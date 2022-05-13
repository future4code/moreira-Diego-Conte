import { Show } from "../../model/Show";
import BaseDatabase from "../BaseDatabase";

export class ShowDatabase extends BaseDatabase {
  protected tableName: string = "LAMA_Shows";

  private toModel(dbModel?: any): Show | undefined {
    return (
      dbModel &&
      new Show(
        dbModel.id,
        dbModel.bandId,
        dbModel.weekDay,
        dbModel.startTime,
        dbModel.endTime
      )
    );
  }

  public async register(show: Show): Promise<void> {
    try {
      await BaseDatabase.connection(this.tableName).insert(show);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getShowsByWeekDay(weekDay: string): Promise<Show[] | undefined> {
    try {
      const result = await BaseDatabase.connection(this.tableName)
        .select()
        .where({ week_day: weekDay })
        .orderBy("start_time");

      return result;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
