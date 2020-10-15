'use strict';

const http = require('http');

const hostname = '127.0.0.1';
const port = 3333;

const express = require('express');
const cors = require('cors');

const app = express();

const corsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers':
        'Origin, X-Requested-With, Content-Type, Accept',
};

app.use(cors(corsOptions));

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});

const postsController = require('./routes/posts');
const commentsController = require('./routes/comments');

app.use('/', postsController);
app.use('/comments', commentsController);
