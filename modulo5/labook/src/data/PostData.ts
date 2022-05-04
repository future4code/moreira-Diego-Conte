import IPostData from "../model/InterfacePostData";
import Post from "../model/Post";
import { BaseDatabase } from "./BaseDatabase";

export default class PostData extends BaseDatabase implements IPostData {
  protected TABLE_NAME = "labook_posts";

  insert = async (post: Post): Promise<void> => {
    try {
      await PostData.connection(this.TABLE_NAME).insert({
        id: post.getId(),
        photo: post.getPhoto(),
        description: post.getDescription(),
        type: post.getType(),
        created_at: post.getCreatedAt(),
        author_id: post.getAuthorId(),
      });
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("Erro do banco !");
      }
    }
  };

  getPostById = async (id: string): Promise<Post> => {
    try {
      const response = await PostData.connection(this.TABLE_NAME).where({ id });

      return response[0] && Post.toUserPost(response[0]);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("Erro do banco !");
      }
    }
  };
}
