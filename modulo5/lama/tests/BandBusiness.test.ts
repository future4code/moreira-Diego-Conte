import { BandBusiness } from "../src/business/bands/BandBusiness";
import { CustomError } from "../src/errors/CustomErrors";
import { BandInputDTO } from "../src/model/Band";
import BandDatabaseMock from "./mocks/BandDatabaseMock";

const bandBusinessMock = new BandBusiness(new BandDatabaseMock() as any);

describe("Testing 'REGISTER BAND'", () => {
  test("Should catch error when input 'name' is void", async () => {
    const input: BandInputDTO = {
      adminToken: "mock_token",
      name: "",
      musicGenre: "classical",
      responsible: "name responsible",
    };

    expect.assertions;
    try {
      await bandBusinessMock.registerBand(input);
    } catch (error) {
      if (error instanceof CustomError) {
        expect(error.message).toEqual(
          "Missing inputs: please, enter a user name."
        );
        expect(error.statusCode).toEqual(422);
      } else {
        console.log(error);
      }
    }
  });

  test("Should return access token when inputs correctly filled.", async () => {
    const input: BandInputDTO = {
      adminToken: "mock_token",
      name: "Band name",
      musicGenre: "classical",
      responsible: "name responsible",
    };

    expect.assertions;
    try {
      const message = await bandBusinessMock.registerBand(input);
      expect(onmessage).toEqual("Band successfully registered.");
    } catch (error) {
      console.log(error);
    }
  });
});
