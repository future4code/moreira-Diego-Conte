import { Type } from "../model/Post";

type CreatePostInputTDO = {
  photo: string;
  description: string;
  type: Type;
};

export default CreatePostInputTDO;
