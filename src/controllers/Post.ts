import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import { Post } from "../models/schemas/PostSchema";
import { post } from "../routes";



const createPost = (req: Request, res: Response, nex: NextFunction) => {
    
    console.log(req.body);
    const { title, description} = req.body;
    const created_at = Date.now();

    const post = new Post({
        title,
        description,
        created_at,
      
    });

    return post.save().then((post) => res.status(201).json({post}))
    .catch((error) => res.status(500).json({ error }));

};

const readPost = (req: Request, res: Response, nex: NextFunction) => { 
    const postId = req.params.postID;

    return Post.findById(postId)
    .then((post) => (post ? res.status(200).json({post}) : res.status(404).json({message: 'not found'})))
    .catch((error) => res.status(500).json({error}));
};


const readAll = (req: Request, res: Response, next: NextFunction) =>{
    return Post.find()
    .then((posts) => res.status(200).json({posts}))
    .catch((error) => res.status(500).json({error}) );
};

const updatePost = (req: Request, res: Response, nex: NextFunction) => { 
    const postId = req.params.postID;

    return Post.findById(postId)
    .then((post) =>{
        if(post){
            post.set(req.body);
            
            return post
            .save()
            .then((post) => res.status(201).json({post}))
            .catch((error) => res.status(501).json({error}));
        }
        else {
            return res.status(404).json({messge: 'not found'});
        }
    })
    .catch((error) => res.status(500).json({error}));
};



const deletePost = (req: Request, res: Response, nex: NextFunction) => { 
    const postId = req.params.postID;

    return Post.findByIdAndDelete(postId)
    .then((post) => (post ? res.status(201).json({post, message:'Deleted'}): res.status(404).json({message: 'not found'})))
    .catch((error) => res.status(500).json({error}));
};



export default { createPost, readPost, updatePost, deletePost, readAll };