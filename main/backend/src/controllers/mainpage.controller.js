import jwtHandler from "../jwt/jwtHandler.js";

export default {
    MainpageGetController: (req, res) => {
        res.sendStatus(501);
    },
    MainpagePostController: async (req, res) => {
        // Kijelentkezés meghívása
        console.log("Cső!")
        try {
            jwtHandler.LoggingOut(req, res);
            res.status(200).json({
                error: "false",
                message: "The users token has been invalidated!"
            });
            return;
        }
        catch (error) {
            console.log(error);
            res.status(500).json({
                error: "true",
                message: "Something went wrong doing the logout!"
            });
            return;
        }
        
    }
}