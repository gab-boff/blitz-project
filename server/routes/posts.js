import express from "express";

import { getPosts, createPost } from "../controllers/postsControllers.js";

const router = express.Router();

router.get("/", getPosts);

router.post("/posts", createPost);

export default router;
