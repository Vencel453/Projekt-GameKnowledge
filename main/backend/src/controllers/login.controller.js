import jwtHandler from "../jwt/jwtHandler.js";
import bcryptMethods from "../bcrypt-methods/bcrypt.methods.js";
import models from "../models/index.js";

export default {
    LoginPutController: async (req, res) => {
        const {username: loginUsername, password: loginPassword} = req.body;

        if (loginUsername === undefined || loginPassword === undefined) {
            res.status(400).json({
                error: "true",
                message: "Not every field is filed!"
            });
            return;
        }

        try {

            const correctUser = await models.User.findOne({where: {username: loginUsername}});
            const correctPassword = bcryptMethods.Comparing(loginPassword, correctUser.password);

            if (correctUser && correctPassword) {
                const token = await jwtHandler.CreatingToken(correctUser.username, correctUser.admin);

                res.status(200).json({
                    error: "false",
                    message: "Succefull login",
                    isAdmin: correctUser.admin,
                    token: token
                });
                return;
            } 
            else {
                res.status(400).json({
                    error: "true",
                    message: "The username or password is incorrect"
                });
                return;
            }
            
        }
        catch (error) {
            console.log(error);
            res.status(500).json({
                error: "true",
                message: "Something went wrong during the login!"
            });
            return;
        }
    },
}