import { Request, Response } from "express";
import { ShowInputDTO } from "../../model/Show";
import { ShowDatabase } from "../../data/shows/ShowDatabase";
import { ShowBusiness } from "../../business/shows/ShowBusiness";
import { BandDatabase } from "../../data/bands/BandDatabase";
import { UserDatabase } from "../../data/user/UserDatabase";

const showBusiness = new ShowBusiness(new ShowDatabase(), new BandDatabase());

export class ShowController {
  public async register(req: Request, res: Response) {
    try {
      const token: string = req.headers.authorization as string;

      const { bandId, weekDay, startTime, endTime } = req.body;

      const input: ShowInputDTO = {
        token,
        bandId,
        weekDay,
        startTime,
        endTime,
      };
      const response = await showBusiness.register(input);

      res.status(200).send(response);
    } catch (error: any) {
      const { statusCode, message } = error;
      res.status(statusCode || 400).send({ message });
    }
  }

  public async getScheduleByDay(req: Request, res: Response) {
    try {
      const query: string = req.query.query as string;

      const response = await showBusiness.getScheduleByDay(query);

      res.status(200).send(response);
    } catch (error: any) {
      const { statusCode, message } = error;
      res.status(statusCode || 400).send({ message });
    }
  }
}
