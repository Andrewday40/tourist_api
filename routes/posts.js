
var express = require('express');
var router = express.Router();
var Post = require('..models/post.js');

router.get('/posts', getAllThePost);
router.get('/posts/:id', getPost);
router.post('/posts',  createPost);
router.put('/posts/:id', updatePost);
router.delete('/posts/:id', deletePost);

module.exports = router;

function getAllThePost(){}
function getPost(){}
function createPost(){}
function updatePost(){}
function deletePost(){}
