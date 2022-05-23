import { BandDatabase } from "../../data/bands/BandDatabase";
import { CustomError } from "../../errors/CustomErrors";
import { Band, BandInfosDTO, BandInputDTO } from "../../model/Band";
import AuthenticationData from "../../types/AuthenticationData";
import IdGenerator from "../services/IdGenerator";
import TokenGenerator from "../services/TokenGenerator";

export class BandBusiness {
  constructor(private bandDatabase: BandDatabase) {}

  public async registerBand(input: BandInputDTO) {
    const { adminToken, name, musicGenre, responsible } = input;
    try {
      if (!adminToken) {
        throw new CustomError(422, "Please enter a token.");
      }

      const tokenData: AuthenticationData = TokenGenerator.verify(adminToken);
      if (!tokenData) {
        throw new CustomError(422, "Please enter a valid token.");
      }

      if (tokenData.role !== "ADMIN") {
        throw new CustomError(
          422,
          "Invalid credentials: switch to an administrator account to register bands."
        );
      }

      if (!name) {
        throw new CustomError(
          422,
          "Missing inputs: please, enter a user name."
        );
      }

      const bandData: Band | undefined = await this.bandDatabase.getBandInfos(
        name
      );

      if (bandData) {
        throw new CustomError(409, "This name is already registered.");
      }

      if (!musicGenre) {
        throw new CustomError(422, "Invalid music genre.");
      }

      if (!responsible) {
        throw new CustomError(
          422,
          "Missing inputs: please, enter a responsible name."
        );
      }

      const id = IdGenerator.generate();

      await this.bandDatabase.registerBand(
        new Band(id, name, musicGenre, responsible)
      );

      return {
        message: "Band successfully registered.",
      };
    } catch (error) {
      if (error instanceof CustomError) {
        throw new CustomError(error.statusCode, error.message);
      }
    }
  }

  public async getBandInfos(query: string) {
    try {
      if (!query) {
        throw new CustomError(
          422,
          "Missing inputs: please, enter a band name or a band ID."
        );
      }

      const bandInformations: Band | undefined =
        await this.bandDatabase.getBandInfos(query);

      if (bandInformations) {
        return { band_informations: bandInformations };
      } else {
        return { message: "Band not found." };
      }
    } catch (error) {
      if (error instanceof CustomError) {
        throw new CustomError(error.statusCode, error.message);
      }
    }
  }
}
