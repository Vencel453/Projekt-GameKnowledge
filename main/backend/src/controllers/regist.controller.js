import bcryptjs from 'bcryptjs';
import models from '../models/index.js';

export default {
    RegistGetController: (req, res) => {
        res.sendStatus(501);
    },
    RegistPutController: async (req, res) => {
        //username: Vencel453 | email: majd.titkos@lesz.tényleg
        const registUsername = req.body.username;
        const registEmail = req.body.email;

        if (registUsername === undefined || registEmail === undefined) {
            if((models.User.findOne({where: {username: registUsername}})) || (models.User.findOne({where: {email: registEmail}}))) {
                res.sendStatus(409);
            } 
            else {
                res.sendStatus(200);
            }
        }
        else {
            res.sendStatus(400);
        }
    },
}