import { CustomError } from "../errors/CustomErrors";

export class Band {
  constructor(
    private id: string,
    private name: string,
    private music_genre: string,
    private responsible: string
  ) {}

  public getId() {
    return this.id;
  }

  public getName() {
    return this.name;
  }

  public getMusicGenre() {
    return this.music_genre;
  }

  public getResponsible() {
    return this.responsible;
  }

  public static toBandModel(user: any): Band {
    return new Band(user.id, user.name, user.music_genre, user.responsible);
  }
}

export interface BandInputDTO {
  adminToken: string;
  name: string;
  musicGenre: string;
  responsible: string;
}

export interface BandInfosDTO {
  id: string;
  name: string;
}
