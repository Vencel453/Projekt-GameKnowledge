import models from '../models/index.js';
import { Op } from 'sequelize';
import bcryptMethods from '../bcrypt-methods/bcrypt.methods.js';

export default {
    RegistPutController: async (req, res) => {
        const { username: registUsername, password: registPassword, passwordAgain: registPasswordAgain, email: registEmail} = req.body;

        if (registUsername === undefined || registPassword === undefined || registEmail === undefined || registPasswordAgain === undefined) {
            res.status(400).json({
                error: "true",
                message: "Not every parameter was filled!"
            })
            return;
        }
        
        try {
            const conflictingDatas = await models.User.findOne({
                where: {[Op.or]:
                    [
                        {email: registEmail},
                        {username: registUsername},
                    ]
                }
            });

            if (conflictingDatas) {
                res.status(409).json({
                    error: "true",
                    message: "There's already an user with this username or email address!"
                })
                return;
            }

            const correctUsername =
                String(registUsername).length >= 5 && 
                String(registUsername).length <= 30;

            if (!correctUsername) {
                res.status(400).json({
                    error: "true",
                    message: "The username is not in the correct length!"
                })
                return;
            }

            if (!(registPassword === registPasswordAgain)) {
                res.status(400).json({
                    error: "true",
                    message: "The passwords don't match!"
                })
                return;
            }

            const correctPassword = 
                registPassword.length >= 10 &&
                registPasswordAgain.length <= 30 &&
                !(registPassword.toLowerCase() == registPassword) &&
                /[0-9]/.test(registPassword);
            
            if (!correctPassword) {
                res.status(400).json({
                    error: "true",
                    message: "The password isn't in a correct form!"
                })
                return;
            }

            const hashedPassword = bcryptMethods.Hashing(registPassword);
            const date = new Date();

            const newUser = await models.User.create({
                username: registUsername,
                password: hashedPassword,
                email: registEmail,
                creation: date,
            });

            res.status(201).json({
                error: "false",
                message: "User succesfully created!",
                data: newUser,
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
            else {
            console.log(error);
            res.status(500).json({
                error: "true",
                message: "Something went wrong while creating an user!",
                errorCode: error,
            });
            return;
            }
        }
    },
}