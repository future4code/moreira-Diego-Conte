import { BandDatabase } from "../../data/bands/BandDatabase";
import { ShowDatabase } from "../../data/shows/ShowDatabase";
import { CustomError } from "../../errors/CustomErrors";
import { Band } from "../../model/Band";
import { Show, ShowInputDTO, SHOW_WEEK_DAY } from "../../model/Show";
import AuthenticationData from "../../types/AuthenticationData";
import IdGenerator from "../services/IdGenerator";
import ScheduleTimeCheker from "../services/ScheduleTimeCheker";
import TokenGenerator from "../services/TokenGenerator";

export class ShowBusiness {
  constructor(
    private showDatabase: ShowDatabase,
    private bandDatabase: BandDatabase
  ) {}

  public async register(input: ShowInputDTO) {
    const { token, bandId, weekDay, startTime, endTime } = input;
    try {
      if (!token) {
        throw new CustomError(422, "Please, enter a token.");
      }

      const tokenData: AuthenticationData = TokenGenerator.verify(token);
      if (!tokenData) {
        throw new CustomError(422, "Please, enter a valid token.");
      }
      if (!bandId) {
        throw new CustomError(422, "Missing inputs: please, enter a band ID.");
      }

      const bandData: Band | undefined = await this.bandDatabase.getBandInfos(
        bandId
      );

      if (!bandData) {
        throw new CustomError(404, "Band not found. Check band ID.");
      }

      const showDay: SHOW_WEEK_DAY = Show.stringToWeekDay(
        weekDay.toUpperCase()
      );

      if (
        showDay !== SHOW_WEEK_DAY.SEXTA &&
        showDay !== SHOW_WEEK_DAY.SABADO &&
        showDay !== SHOW_WEEK_DAY.DOMINGO
      ) {
        throw new CustomError(
          422,
          "Invalid week day: only 'sexta', 'sábado' or 'domingo' are allowed."
        );
      }

      if (!Number.isInteger(startTime)) {
        throw new CustomError(
          422,
          "Missing inputs: please, enter a starting show time. Only numbers are allowed."
        );
      }

      if (!Number.isInteger(endTime)) {
        throw new CustomError(
          422,
          "Missing inputs: please, enter an ending show time. Only numbers are allowed."
        );
      }

      if (endTime < startTime) {
        throw new CustomError(422, "Invalid show time.");
      }

      if (ScheduleTimeCheker.scheduleInvalidRange(startTime)) {
        throw new CustomError(
          422,
          "Invalid starting show time: shows starts at 8 a.m. "
        );
      }

      if (ScheduleTimeCheker.scheduleInvalidRange(endTime)) {
        throw new CustomError(
          422,
          "Invalid ending show time: shows ends at 23 p.m. "
        );
      }

      if (startTime.toString().length > 2 || endTime.toString().length > 2) {
        throw new CustomError(
          422,
          "Invalid show time. Formats allowed: 9, 16, 22."
        );
      }
      
      const allShowsByDay =
        await this.showDatabase.getShowsByWeekDay(weekDay);

      let isRangeAvailable: boolean = true;
      allShowsByDay?.find((show: any) => {
        if (
          (show.start_time <= startTime && show.end_time > startTime) ||
          (show.start_time >= endTime && show.end_time <= endTime) ||
          (show.start_time > startTime && show.end_time < endTime)
          
        ) {
          isRangeAvailable = false;
        }
      });

      if (!isRangeAvailable) {
        throw new CustomError(422, "Not a valid time in this week day.");
      }

      const id = IdGenerator.generate();

      await this.showDatabase.register(
        new Show(
          id,
          bandId,
          Show.stringToWeekDay(weekDay),
          Number(startTime),
          Number(endTime)
        )
      );

      return {
        message: "Show successfully registered.",
      };
    } catch (error) {
      if (error instanceof CustomError) {
        throw new CustomError(error.statusCode, error.message);
      }
    }
  }

  //   public async getBandInfos(query: string) {
  //     try {
  //       if (!query) {
  //         throw new CustomError(
  //           422,
  //           "Missing inputs: please, enter a band name or a band ID."
  //         );
  //       }

  //       const bandInformations: Band | undefined =
  //         await this.bandDatabase.getBandInfos(query);

  //       if (bandInformations) {
  //         return { band_informations: bandInformations };
  //       } else {
  //         return { message: "Band not found." };
  //       }
  //     } catch (error) {
  //       if (error instanceof CustomError) {
  //         throw new CustomError(error.statusCode, error.message);
  //       }
  //     }
  //   }
}
