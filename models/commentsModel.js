'use strict';

const db = require('./conn');

class Comments {
    static async getAllComments() {
        try {
            const response = await db.any(`SELECT * FROM comments;`);
            return response;
        } catch (error) {
            console.error(error);
            return error;
        }
    }
}

module.exports = Comments;
