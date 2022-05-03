import Post from "../model/Post";
import { BaseDatabase } from "./BaseDatabase";

export default class PostData extends BaseDatabase {
  protected TABLE_NAME = "labook_posts";

  insert = async (post: Post) => {
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
}
