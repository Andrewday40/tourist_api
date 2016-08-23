
var express = require('express');
var router = express.Router();
var Post = require('../models/post.js');

router.get('/posts', getAllThePost);
router.get('/posts/:id', getPost);
router.post('/posts',  createPost);
router.put('/posts/:id', updatePost);
router.delete('/posts/:id', deletePost);

module.exports = router;

function getAllThePost(req, res, next){
  Post.find({}, function(err, foundPosts){
    if(err){
      res.status(500).json({
        msg:err
      });
    } else {
      res.status(200).json({
        posts: foundPosts
      });
    }
  });
}
function getPost(req, res, next){
  Post.find({_id: req.params.id}, function(err, foundAPost){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        post: foundAPost
      });
    }
  });
}
function createPost(req, res, next){
  var post = new Post({
    city: req.body.city,
    location: req.body.location,
    description: req.body.description,
    person: req.body.person,
    catagory: req.body.catagory
  });
  post.save(function(err, newPost){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        post: newPost
      });
    }
  });
}
function updatePost(){}
function deletePost(){}