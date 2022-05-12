import { Request, Response } from "express";
import { BandBusiness } from "../../business/bands/BandBusiness";
import { BandDatabase } from "../../data/bands/BandDatabase";
import { BandInfosDTO, BandInputDTO } from "../../model/Band";

const bandBusiness = new BandBusiness(new BandDatabase());

export class BandController {
  public async register(req: Request, res: Response) {
    try {
      const adminToken: string = req.headers.authorization as string;
      const { name, musicGenre, responsible } = req.body;

      const input: BandInputDTO = {
        adminToken,
        name,
        musicGenre,
        responsible,
      };
      const response = await bandBusiness.registerBand(input);

      res.status(200).send(response);
    } catch (error: any) {
      const { statusCode, message } = error;
      res.status(statusCode || 400).send({ message });
    }
  }

  public async getBandInfos(req: Request, res: Response) {
    try {
      const query: string = req.query.query as string;

      const response = await bandBusiness.getBandInfos(query);

      res.status(200).send(response);
    } catch (error: any) {
      const { statusCode, message } = error;
      res.status(statusCode || 400).send({ message });
    }
  }
}
