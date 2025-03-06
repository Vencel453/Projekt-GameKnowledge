import { Op } from "sequelize";
import Forumpost from "../models/forumpost.js"
import User from "../models/user.js";
import jweMethods from "../utilities/jwe.methods.js";
import validationMethods from "../utilities/validation.methods.js";
import { format } from "date-fns";
import Forumcomment from "../models/forumcomment.js";

export default {
    ForumGetController: async(req, res) => {
        try {
            const page = Math.max(1, Number(req.query.page?.trim()) || 1);
            const search = req.query.search || null
            const maxPostOnPage = 30;

            let formattedSearch = null
            if (search !== null) {
                formattedSearch = "%" + String(search).toLowerCase() + "%";
            }
            else {
                formattedSearch = "%"
            }
            console.log(page);

            const offset = (page - 1) * maxPostOnPage;

            const posts = await Forumpost.findAll({
                attributes: ["id", "title", "content", "story", "gameplay", "creation"],
                where: {
                    title: {[Op.like]: formattedSearch}
                },
                offset: offset,
                limit: maxPostOnPage,
                order: [["creation", "DESC"]],
                include: {
                    model: User,
                    attributes: ["username"]
                },
                raw: true
            });

            console.log(posts);

            const postQuantity = await Forumpost.count({
                where: {
                    title: {[Op.like]: formattedSearch}
                }
            });

            const maxPage = Math.ceil(postQuantity / maxPostOnPage);

            if (page > maxPage) {
                res.status(404).json({
                    error: true,
                    message: "There aren't any post on this page and beyond!",
                    maximumPost: maxPage
                });
                return;
            }

            const formatedPosts = posts.map(post => ({
                ...post,
                creation: format(new Date(post.creation), "yyyy-MM-dd HH:mm:ss"),
                content: String(post.content).substring(0, 300).concat("...")
            }));

            res.status(200).json({
                error: false,
                message: `This is page: ${page}`,
                maximumPost: maxPage,
                posts: formatedPosts
            });
            return;
        }
        catch (error) {
            console.log(error);
            res.status(500).json({
                error: true,
                message: "Something went wrong during fetching the posts"
            });
            return;
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
            if (!title) {
                res.status(400).json({
                    error: true,
                    message: "The title is empty!"
                });
                return;
            }

            if (title.length > 150) {
                res.status(400).json({
                    error: true,
                    message: "The title is longer than 150 character!"
                });
                return;
            }

            if (validationMethods.CheckProfanity(title) === true) {
                res.status(400).json({
                    error: true,
                    message: "The title contains profanity, submission is prohibited!"
                });
                return;
            }

            const content = req.body.content;
            if (!content) {
                res.status(400).json({
                    error: true,
                    message: "The post is empty!"
                });
                return;
            }

            if (content.length < 30) {
                res.status(400).json({
                    error: true,
                    message: "The post is less then 30 character!"
                });
                return;
            }
            
            if (content.length > 15000) {
                res.status(400).json({
                    error: true,
                    message: "The post is longer than 15 000 character!"
                });
                return;
            }

            if (validationMethods.CheckProfanity(content) === true) {
                res.status(400).json({
                    error: true,
                    message: "The post contains profanity, submission is prohibited!"
                })
                return;
            }

            const gameplay = req.body.gameplay;
            if (gameplay === "" || gameplay === null || gameplay === undefined) {
                res.status(400).json({
                    error: true,
                    message: "The gameplay tag is empty!"
                });
                return;
            }

            console.log(gameplay)
            if (gameplay !== true && gameplay !== false) {
                res.status(400).json({
                    error: true,
                    message: "The gameplay tag is not a booelan!"
                });
                return;
            }

            const story = req.body.story;
            if (story === "" || story === null || story === undefined) {
                res.status(400).json({
                    error: true,
                    message: "The story tag is empty!"
                });
                return;
            }

            if (story !== true && story !== false) {
                res.status(400).json({
                    error: true,
                    message: "The story flair is not a booelan!"
                });
                return;
            }

            const date = new Date();

            console.log(validationMethods.CheckProfanity(content));

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
            });
            return;
        }
    },

    ForumIdGetController: async(req, res) => {
        try {
            const postId = Number(req.params.postId?.trim());

            if (!postId || isFinite(postId) === false) {
                res.status(400).json({
                    error: true,
                    message: "There's no post id!"
                });
                return;
            }

            const post = await Forumpost.findOne({
                attributes: ["title", "content", "story", "gameplay", "creation"],
                where: {
                    id: postId
                },
                include: {
                    model: User,
                    attributes: ["username"]
                },
                raw: true
            });

            if (!post) {
                res.status(404).json({
                    error: true,
                    message: "There's no post with this id!"
                });
                return;
            }

            const comments = await Forumcomment.findAll({
                attributes: ["id", "content", "creation"],
                where: {
                    ForumPostId: postId
                },
                include: {
                    model: User,
                    attributes: ["username"]
                },
                raw: true
            });

            const formatedComments = comments.map(comment => ({
                ...comment,
                creation: format(new Date(comment.creation), "yyyy-MM-dd HH:mm:ss"),
            }));

            res.status(200).json({
                error: false,
                message: "The whole post and it's comments are fetched!",
                post: post,
                comments: formatedComments
            });
            return;
        }
        catch (error) {
            console.log(error);
            res.status(500).json({
                error: true,
                message: "Something went wrong when fetching a post and it's comments!"
            });
            return;
        }
    },

    ForumIdPostController: async(req, res) => {
        try {
            const postId = Number(req.params.postId?.trim());

            if (!postId || isFinite(postId) === false) {
                res.status(400).json({
                    error: true,
                    message: "There's no post id!"
                });
                return;
            }

            const postExist = await Forumpost.findOne({
                where: {
                    id: postId
                }
            });

            if (!postExist) {
                res.status(400).json({
                    error: true,
                    message: "There's no post with this id!"
                });
                return;
            }

            const userId = await jweMethods.GetUserId(req);

            if (userId === undefined) {
                res.status(401).json({
                    error: true,
                    message: "The user is not logged in or the token is faulty or expired!"
                });
                return;
            }

            const newComment = req.body.comment;

            if (!newComment) {
                res.status(400).json({
                    error: true,
                    message: "The comment is missing or empty!"
                });
                return;
            }

            if (newComment.length < 2) {
                res.status(400).json({
                    error: true,
                    message: "The comment is less than 2 character!"
                });
                return;
            }

            if (newComment.length > 5000) {
                res.status(400).json({
                    error: true,
                    message: "The comment is longer than 5000 character!"
                });
                return;
            }

            if (validationMethods.CheckProfanity(newComment) === true) {
                res.status(400).json({
                    error: true,
                    message: "The comment contains profanity!"
                });
                return;
            }

            const currentDate = new Date();

            Forumcomment.create({
                content: newComment,
                creation: currentDate,
                ForumpostId: postId,
                UserId: userId
            });

            res.status(201).json({
                error: false,
                message: "The comment has been shared!"
            });
            return;
        }
        catch (error) {
            console.log(error);
            res.status(500).json({
                error: true,
                message: "Something went wrong when creating a comment!"
            });
            return;
        }
    },

    ForumIdDeleteController: async(req, res) => {
        try {
            const postId = Number(req.params.postId?.trim());

            if (!postId || isFinite(postId) === false) {
                res.status(400).json({
                    error: true,
                    message: "There's no post id!"
                });
                return;
            }

            const postExist = await Forumpost.findOne({
                where: {
                    id: postId
                }
            });

            if (!postExist) {
                res.status(404).json({
                    error: true,
                    message: "There is no post with this id!"
                });
                return;
            }

            const userId = await jweMethods.GetUserId(req);

            if (userId === undefined) {
                res.status(401).json({
                    error: true,
                    message: "The user is not logged in or the token is faulty or expired!"
                });
                return;
            }

            const isAdmin = await User.findOne({
                where: {
                    id: userId,
                    admin: true
                }
            });

            if (!isAdmin) {
                res.status(401).json({
                    error: true,
                    message: "This user can't delete this, only admins can do it!"
                });
                return;
            }

            const type = req.body.type;

            if (!type) {
                res.status(400).json({
                    error: true,
                    message: "The content type is missing!"
                });
                return;
            }

            if (type === "post") {
                Forumcomment.destroy({
                    where: {
                        ForumpostId: postId
                    }
                });

                Forumpost.destroy({
                    where: {
                        id: postId
                    }
                });
    
                res.status(200).json({
                    error: false,
                    message: "The post and it's comment(s) has been deleted"
                });
                return;
            }

            if (type === "comment") {
                const commentId = req.body.commentId;

                if (!commentId) {
                    res.status(400).json({
                        error: true,
                        message: "The comment's id is missing!"
                    });
                    return;
                }

                if (isFinite(commentId) === false) {
                    res.status(400).json({
                        error: true,
                        message: "The comment's id is not a number!"
                    });
                    return;
                }

                const doesCommentExist = await Forumcomment.findByPk(commentId);

                if(!doesCommentExist) {
                    res.status(400).json({
                        error: true,
                        message: "There isn't any comment with this id!"
                    });
                    return;
                }

                Forumcomment.destroy({
                    where: {
                        id: commentId
                    }
                });

                res.status(200).json({
                    error: false,
                    message: "The comment has been deleted"
                });
                return;
            }
        
            res.status(400).json({
                error: true,
                message: "The content type is not valid!"
            });
            return;
        }
        catch(error) {
            console.log(error);
            res.status(500).json({
                error: true,
                message: "Something went wrong when deleting a content!"
            });
            return;
        }
    }
}