export enum Type {
  normal = "NORMAL",
  event = "EVENT",
}

export default class Post {
  constructor(
    private id: string,
    private photo: string,
    private description: string,
    private type: Type,
    private createdAt: string,
    private authorId: string
  ) {}

  public getId() {
    return this.id;
  }

  public getPhoto() {
    return this.photo;
  }

  public getDescription() {
    return this.description;
  }

  public getType() {
    return this.type;
  }

  public getCreatedAt() {
    return this.createdAt;
  }

  public getAuthorId() {
    return this.authorId;
  }
}
