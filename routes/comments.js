const express = require('express');
const router = express.Router();

const commentsModel = require('../models/commentsModel');

router.get('/', async (req, res) => {
    const getAllComments = await commentsModel.getAllComments();
    res.json(getAllComments).status(200);
});

module.exports = router;
