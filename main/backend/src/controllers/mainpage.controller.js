import jwtHandler from "../jwt/jwtHandler.js";

export default {
    MainpageGetController: (req, res) => {
        res.sendStatus(501);
    },
    // Ez a metódus kijelentkezteti a felhasználót, ehhez a 'jwtHandler' fájl egy metódusát hívja meg és küldi ki a megfelelő kódot és
    // üzenetet, ha valami hiba történik akkor hiba üznetet ki írja a konzolra
    MainpagePostController: async (req, res) => {
        try {
            jwtHandler.Blacklisting(req);
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