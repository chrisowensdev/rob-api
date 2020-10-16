'use strict';

const db = require('./conn');

class Comments {
    static async getCommentsByPost(postId) {
        try {
            const response = await db.any(
                `SELECT * FROM comments WHERE post_id = $1;`,
                [postId]
            );
            return response;
        } catch (error) {
            console.error(error);
            return error;
        }
    }
}

module.exports = Comments;
