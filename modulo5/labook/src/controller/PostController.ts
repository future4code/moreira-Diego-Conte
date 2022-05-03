import { Request, Response } from "express";
import PostBusines from "../business/PostBusiness";
import CreatePostInputTDO from "../types/createPostInputTDO";

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
}
