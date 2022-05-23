import { Band } from "../../model/Band";
import BaseDatabase from "../BaseDatabase";

export class BandDatabase extends BaseDatabase {
  protected tableName: string = "LAMA_Bands";

  private toModel(dbModel?: any): Band | undefined {
    return (
      dbModel &&
      new Band(
        dbModel.id,
        dbModel.name,
        dbModel.music_genre,
        dbModel.responsible
      )
    );
  }

  public async registerBand(band: Band): Promise<void> {
    try {
      await BaseDatabase.connection(this.tableName).insert(band);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getBandInfos(query: string): Promise<Band | undefined> {
    try {
      const result = await BaseDatabase.connection(this.tableName)
        .select()
        .where({ id: query })
        .orWhere({ name: query })
        .orWhere("name", "LIKE", `%${query}%`);

      return this.toModel(result[0]);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
