import moment from "moment"; moment.locale("pt-br");
import IPostData from "../model/InterfacePostData";
import Post from "../model/Post";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import authenticationData from "../types/authenticationData";
import CreatePostInputTDO from "../types/createPostInputTDO";
import transferIdAndTokenTDO from "../types/transferIdAndTokenTDO";


export default class PostBusines {
  private postData: IPostData;

  constructor(postData: IPostData) {
    this.postData = postData;
  }

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

    const tokenData: authenticationData = Authenticator.getTokenData(token);

    if (!tokenData) {
      throw new Error("Please enter a valid token.");
    }

    const id: string = IdGenerator.generate();
    const createdAt: string = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");

    const post: Post = new Post(
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

  getPostById = async (input: transferIdAndTokenTDO) => {
    const { id, token } = input;
    if (!token) {
      throw new Error("Please enter a token.");
    }

    const tokenData: authenticationData = Authenticator.getTokenData(token);
    if (!tokenData) {
      throw new Error("Please enter a valid token.");
    }

    const result: Post = await this.postData.getPostById(id);

    const response = {
      id: result.getId(),
      URLphoto: result.getPhoto(),
      description: result.getDescription(),
      type: result.getType(),
      createdAt: moment(result.getCreatedAt(), "X").format("LLLL"),
      authorId: result.getAuthorId(),
    };

    return response;
  };
}
