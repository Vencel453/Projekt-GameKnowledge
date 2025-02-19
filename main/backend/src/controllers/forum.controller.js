import Forumpost from "../models/forumpost.js"
import User from "../models/user.js";
import jweMethods from "../utilities/jwe.methods.js";
import validationMethods from "../utilities/validation.methods.js";
import { format } from "date-fns";

export default {
    ForumGetController: async(req, res) => {
        try {
            const query = req.query;

            if (Object.keys(query).length === 0) {
                console.log("The query is empty, using default values!")
            };

            console.log(query);
            const postQuantity = parseInt(query.posts) || 30;
            const page = parseInt(query.page) || 1;

            const offset = (page - 1) * postQuantity;

            const posts = await Forumpost.findAll({
                attributes: ["title", "content", "story", "gameplay", "creation"],
                offset: offset,
                limit: postQuantity,
                order: [["creation", "DESC"]],
                include: {
                    model: User,
                    attributes: ["username"]
                },
                raw: true
            });

            const dateFormatedPosts = posts.map(post => ({
                ...post,
                creation: format(new Date(post.creation), "yyyy-MM-dd HH:mm:ss")
            }));

            res.status(200).json({
                error: false,
                message: `This is page: ${page}, the maximum post shown on one page is ${postQuantity}!`,
                posts: dateFormatedPosts
            });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({
                error: true,
                message: "Something went wrong during fetching the posts"
            });
        }
    },

    ForumCreationPostController: async(req, res) => {
        try {
            const userId = await jweMethods.GetUserId(req);
            if (userId === undefined) {
                res.status(404).json({
                    error: true,
                    message: "The token is empty or faulty!"
                });
                return;
            }

            const title = req.body.title;
            if (title == "" || title === undefined) {
                res.status(400).json({
                    error: true,
                    message: "The title is empty!"
                });
                return;
            }
            if (await validationMethods.CheckProfanity(title) === true) {
                res.status(400).json({
                    error: true,
                    message: "The title contains profanity, submission is prohibited!"
                });
                return;
            }

            const content = req.body.content;
            if (content == "" || content === undefined) {
                res.status(400).json({
                    error: true,
                    message: "The post is empty!"
                });
                return;
            }

            if (content.length > 15000) {
                res.status(400).json({
                    error: true,
                    message: "The post is longer than 15 000 characters!"
                });
                return;
            }

            if (await validationMethods.CheckProfanity(content) === true) {
                res.status(400).json({
                    error: true,
                    message: "The post contains profanity, submission is prohibited!"
                })
                return;
            }

            const gameplay = req.body.gameplay;
            if (gameplay === "" || gameplay === undefined) {
                res.status(400).json({
                    error: true,
                    message: "The gameplay flair is empty!"
                });
                return;
            }

            const story = req.body.story;
            if (story === "" || story === undefined) {
                res.status(400).json({
                    error: true,
                    message: "The story flair is empty!"
                });
                return;
            }

            const date = new Date();

            console.log(await validationMethods.CheckProfanity(content));

            await Forumpost.create({
                content: content,
                story: story,
                gameplay: gameplay,
                creation: date,
                UserId: userId,
                title: title
            });

            res.status(200).json({
                error: false,
                message: "The post creation is successful!"
            });
            return;
            
        }
        catch (error) {
            console.log(error);
            res.status(500).json({
                error: true,
                message: "Something went wrong when creating a post!"
            })
        }
    },

    ForumIdGetController: async(req, res) => {
        res.sendStatus(501);
    },

    ForumIdPostController: async(req, res) => {
        res.sendStatus(501);
    },

    ForumIdDeleteController: async(req, res) => {
        res.sendStatus(501);
    },

}