import jweMethods from "../utilities/jwe.methods.js";
import User from "../models/user.js";

export default {
    MyprofileGetController: async(req, res) => {
        try {
            const userId = await jweMethods.GetUserId(req);

            if (userId === undefined) {
                res.status(404).json({
                    error: true,
                    message: "The token is missing or faulty!"
                });
                return;
            }

            const user = await User.findOne({
                attributes: ["username", "email", "admin", "creation"],
                where: {
                    id: userId
                }
            });

            res.status(200).json({
                error: false,
                message: "The user's data are successfully fetched!",
                user: user
            });
            return;

            
        }
        catch (error) {
            console.log(error);
            res.status(500).json({
                error: true,
                message: "Something went wrong fetching the user's data!"
            });
            return;
        }
    },

    MyprofilePostController: async(req, res) => {
        res.sendStatus(501);
    },
}