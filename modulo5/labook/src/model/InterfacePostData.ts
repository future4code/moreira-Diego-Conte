import Post from "./Post";

interface IPostData {
  insert(post: Post): Promise<void>;
  getPostById(id: string): Promise<Post>;
}

export default IPostData;
