const express = require('express');
const router = express.Router();

const commentsModel = require('../models/commentsModel');

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const getComments = await commentsModel.getCommentsByPost(id);
    res.json(getComments).status(200);
});

module.exports = router;
