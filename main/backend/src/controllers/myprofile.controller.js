import jweMethods from "../utilities/jwe.methods.js";
import User from "../models/user.js";
import { where } from "sequelize";

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
                attributes: ["username", "email", "creation"],
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
        try {
            const userId = await jweMethods.GetUserId(req);

            if (userId === undefined) {
                res.status(404).json({
                    error: true,
                    message: "The token is missing or faulty!"
                });
                return;
            }

            const changes = req.body;
            const conditions = [];
            let empty = true;

            if (!(changes.username === undefined || changes.username == "")) {
                conditions.push({username: changes.username},);
                empty = false;
            };

            if (!(changes.email === undefined || changes.email == "")) {
                conditions.push({email: changes.email},);
                empty = false;
            };

            if (!(changes.password === undefined || changes.password == "")) {
                conditions.push({password: changes.password},);
                empty = false;
            };

            if (empty) {
                res.status(400).json({
                    error: true,
                    message: "Every field is empty!"
                });
                return;
            }

            await User.update(changes, {where: {id: parseInt(userId)}});
            console.log(changes);

            res.status(201).json({
                error: true,
                message: "Datas has been updated!"
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
}