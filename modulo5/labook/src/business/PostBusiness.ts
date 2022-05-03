import moment from "moment";
import PostData from "../data/PostData";
import Post from "../model/Post";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import CreatePostInputTDO from "../types/createPostInputTDO";

export default class PostBusines {
  constructor(private postData: PostData) {}

  createPost = async (input: CreatePostInputTDO, token: string) => {
    const { photo, description, type } = input;

    if (!token) {
      throw new Error("Please enter a token.");
    }

    if (!photo) {
      throw new Error("Please enter a photo.");
    }

    if (!description || description.length < 2) {
      throw new Error(
        "Please enter a description. At least two characters are required"
      );
    }

    if (type.toUpperCase() !== "NORMAL" && type.toUpperCase() !== "EVENT") {
      throw new Error(
        "Please check type: only values 'normal' and 'event' are accepted."
      );
    }

    const tokenData = Authenticator.getTokenData(token);

    if (!tokenData) {
      throw new Error("Please enter a valid token.");
    }

    const id = IdGenerator.generate();
    const createdAt: string = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");

    const post = new Post(
      id,
      photo,
      description,
      type,
      createdAt,
      tokenData.id
    );
    await this.postData.insert(post);

    return id;
  };
}
