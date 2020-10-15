const express = require('express');
const router = express.Router();

const postsModel = require('../models/postsModel');

router.get('/', async (req, res) => {
    const getAllPosts = await postsModel.getAllPosts();
    res.json(getAllPosts).status(200);
});

router.get('/post/:id', async (req, res) => {
    const { id } = req.params;
    const getSinglePost = await postsModel.getSinglePost(id);
    res.json(getSinglePost).status(200);
});

module.exports = router;
