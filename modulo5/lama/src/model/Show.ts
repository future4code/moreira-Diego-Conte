import { CustomError } from "../errors/CustomErrors";

export class Show {
  constructor(
    private id: string,
    private band_id: string,
    private week_day: string,
    private start_time: number,
    private end_time: number
  ) {}

  public getId() {
    return this.id;
  }

  public getBandId() {
    return this.band_id;
  }

  public getWeekDay() {
    return this.week_day;
  }

  public getStartTime() {
    return this.start_time;
  }

  public getEndTime() {
    return this.end_time;
  }

  public static stringToWeekDay(input: string): SHOW_WEEK_DAY {
    switch (input.toUpperCase()) {
      case "SEXTA":
        return SHOW_WEEK_DAY.SEXTA;
      case "SEXTA-FEIRA":
        return SHOW_WEEK_DAY.SEXTA;
      case "SÁBADO":
        return SHOW_WEEK_DAY.SABADO;
      case "SABADO":
        return SHOW_WEEK_DAY.SABADO;
      case "DOMINGO":
        return SHOW_WEEK_DAY.DOMINGO;
      default:
        throw new CustomError(
          422,
          "Invalid week day: only 'SEXTA-FEIRA', 'SÁBADO' or 'DOMINGO' are allowed."
        );
    }
  }

  public static toShowModel(show: any): Show {
    return new Show(
      show.id,
      show.band_id,
      Show.stringToWeekDay(show.week_day),
      show.start_time,
      show.end_time
    );
  }
}

export interface ShowInputDTO {
  token: string;
  bandId: string;
  weekDay: string;
  startTime: number;
  endTime: number;
}

export enum SHOW_WEEK_DAY {
  SEXTA = "Sexta-feira",
  SABADO = "Sábado",
  DOMINGO = "Domingo",
}
