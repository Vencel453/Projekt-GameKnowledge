import jweMethods from "../utilities/jwe.methods.js";
import User from "../models/user.js";
import validationMethods from "../utilities/validation.methods.js";
import bcryptMethods from "../utilities/bcrypt.methods.js";

export default {
    MyprofileGetController: async(req, res) => {
        try {
            const userId = await jweMethods.GetUserId(req);
            console.log(userId);

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
        try {
            const userId = await jweMethods.GetUserId(req);

            if (userId === undefined) {
                res.status(401).json({
                    error: true,
                    message: "The token is missing or faulty!"
                });
                return;
            }

            const {username, email, password, passwordAgain} = req.body;
            const changes = new Object();

            let empty = true;
            const user = await User.findOne({where: {id: userId}, attributes: ["username", "password", "email"]});

            if (username) {
                const conflictingUsername = await User.findOne({where: {username: username}});
                if (username === user.username) {
                    res.status(409).json({
                        error: "true",
                        message: "The username is the same as the original!"
                    });
                    return;
                }

                if (conflictingUsername) {
                    res.status(409).json({
                        error: "true",
                        message: "There's already an user with this username!"
                    });
                    return;
                }
                else {
                    if (validationMethods.CheckUsername(username) === false) {
                        res.status(400).json({
                            error: "true",
                            message: "The username is not in the correct length or contains space!"
                        });
                        return;
                    }
                    if (validationMethods.CheckProfanity(username) === true) {
                        res.status(400).json({
                            error: "true",
                            message: "The username contains profanity!"
                        });
                        return;
                    }
                }
                empty = false;
                changes.username = username;
            };

            if (email) {
                const conflictingEmail = await User.findOne({where: {email: email}});
                if (email === user.email) {
                    res.status(409).json({
                        error: "true",
                        message: "The email is the same as the original!"
                    });
                    return;
                }

                if (conflictingEmail) {
                    res.status(409).json({
                        error: "true",
                        message: "There's already an user with this email address!"
                    });
                    return;
                }
                empty = false;
                changes.email = email;
            };

            if (password) {
                empty = false;
                if (!passwordAgain) {
                    res.status(400).json({
                        error: "true",
                        message: "The password confirmation is empty!"
                    });
                    return;
                }
                else {
                    if (password === passwordAgain) {
                        if (validationMethods.CheckPassword(password) === true) {
                            if (bcryptMethods.Comparing(password, user.password) === true) {
                                res.status(400).json({
                                    error: "true",
                                    message: "The password is the same as the original!"
                                });
                                return;
                            }
                            else {
                                changes.password = bcryptMethods.Hashing(password);
                            }
                        } 
                        else {
                            res.status(400).json({
                                error: "true",
                                message: "The password is in incorrect form!"
                            });
                            return;
                        }
                    }
                    else {
                        res.status(400).json({
                            error: "true",
                            message: "The passwords don't match!"
                        });
                        return;
                    }
                }
            }
            else {
                if (passwordAgain) {
                    res.status(400).json({
                        error: "true",
                        message: "The password field is empty!"
                    });
                    return;
                }
            }

            if (empty) {
                res.status(400).json({
                    error: true,
                    message: "Every field is empty!"
                });
                return;
            }

            await User.update(changes, {where: {id: userId}});
            console.log(changes);

            res.status(201).json({
                error: false,
                message: "Datas has been updated!"
            });
            return;
        }
        catch (error) {

            if (error.name === "SequelizeValidationError") {
                res.status(400).json({
                    error: "true",
                    message: "The email is in incorrect form!"
                });
                return;
            }

            console.log(error);
            res.status(500).json({
                error: true,
                message: "Something went wrong fetching the user's data!"
            });
            return;
        }
    }
}