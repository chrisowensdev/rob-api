'use strict';

const db = require('./conn');

class Posts {
    static async getAllPosts() {
        try {
            const response = await db.any(`SELECT * FROM posts;`);
            return response;
        } catch (error) {
            console.error(error);
            return error;
        }
    }

    static async getSinglePost(postId) {
        try {
            const response = await db.one(
                `SELECT * FROM posts WHERE id = $1;`,
                [postId]
            );
            console.log(response);
        } catch (error) {
            console.error(error);
            return error;
        }
    }
}

module.exports = Posts;
