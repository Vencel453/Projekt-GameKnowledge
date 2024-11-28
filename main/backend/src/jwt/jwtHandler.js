import { jwtVerify } from "jose";
import { SignJWT } from "jose";

const key = "GameKnowledgeSuperSecretDecoder58739";
const tokenBlacklist = [];

export default {
    Authenticating: async (req, res, next) => {
        const token = req.headers['authorization']?.split(' ')[1];

        if (!token) {
            res.status(403).json({
                error: "true",
                message: "A valid token is required!"
            });
            return;
        }

        if (tokenBlacklist.includes(token)) {
            res.status(401).json({
                error: "true",
                message: "The token is invalid or expired!"
            });
            return;
        }

        try {
            const { payload } = await jwtVerify(token, new TextEncoder().encode(key));

            req.user = payload;
            next();
        } 
        catch (error) {
            console.log(error);
            res.status(401).json({
                error: "true",
                message: "The token is invalid or expired!"
            });
            return;
        }
    },

    CreatingToken: async (loginUsername, isAdmin) => {
        const payload = {
            username: loginUsername,
            admin: isAdmin,
        };

        const token = await new SignJWT(payload)
            .setIssuedAt()
            .setExpirationTime("1h")
            .setProtectedHeader({ alg: "HS256"})
            .sign(new TextEncoder().encode(key));

        return token;
    },

    LoggingOut: (req, res, next) => {
        console.log(req.headers);
        
        const token = req.headers['authorization']?.split(' ')[1];
        tokenBlacklist.push(token);
        return;
    }
}