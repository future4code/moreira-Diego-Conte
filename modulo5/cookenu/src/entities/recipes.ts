export class Recipes {
  constructor(
    private id: string,
    private title: string,
    private description: string,
    private createdAt: string,
    private creatorId: string
  ) {}

  public getId() {
    return this.id;
  }

  public getTitle() {
    return this.title;
  }

  public getDescription() {
    return this.description;
  }

  public getCreatedAt() {
    return this.createdAt;
  }

  public getCreatorId() {
    return this.creatorId;
  }

  static toRecipesModel(data: any): Recipes {
    return new Recipes(data.id, data.title, data.description, data.createdAt, data.creatorId);
  }
}
