import { Request, Response } from "express";
import PostBusines from "../business/PostBusiness";
import Post from "../model/Post";
import CreatePostInputTDO from "../types/createPostInputTDO";
import GetPostByIdInputTDO from "../types/getPostByIdInputTDO";

export class PostController {
  constructor(private postBusiness: PostBusines) {}

  createPost = async (req: Request, res: Response) => {
    const { photo, description, type } = req.body;
    const token: string = req.headers.authorization as string;

    const input: CreatePostInputTDO = {
      photo,
      description,
      type,
    };

    try {
      const postId = await this.postBusiness.createPost(input, token);

      res
        .status(201)
        .send({ message: "Post successfully created.", post_id: postId });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).send(error.message);
      }
      res.status(500).send("Something went wrong!");
    }
  };

  getPostById = async (req: Request, res: Response) => {
    const id: string = req.params.id as string;
    const token: string = req.headers.authorization as string;

    const input: GetPostByIdInputTDO = { id };
    try {
      const response = await this.postBusiness.getPostById(input, token);

      res.status(200).send(response);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).send(error.message);
      }
      res.status(500).send("Something went wrong!");
    }
  };
}
