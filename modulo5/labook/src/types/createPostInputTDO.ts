import { Type } from "../model/Post";

type createPostInputTDO = {
  photo: string;
  description: string;
  type: Type;
};

export default createPostInputTDO;
