import { ShowBusiness } from "../src/business/shows/ShowBusiness";
import { CustomError } from "../src/errors/CustomErrors";
import { ShowInputDTO } from "../src/model/Show";
import BandDatabaseMock from "./mocks/BandDatabaseMock";
import ShowDatabaseMock from "./mocks/ShowDatabaseMock";

const showBusinessMock = new ShowBusiness(
  new ShowDatabaseMock() as any,
  new BandDatabaseMock() as any
);

describe("Testing 'REGISTER SHOW'", () => {
  test("Should catch error when input 'bandId' is void", async () => {
    const input: ShowInputDTO = {
      token: "mock_token",
      bandId: "",
      weekDay: "domingo",
      startTime: 20,
      endTime: 22,
    };

    expect.assertions;
    try {
      await showBusinessMock.register(input);
    } catch (error) {
      if (error instanceof CustomError) {
        expect(error.message).toEqual(
          "Missing inputs: please, enter a band ID.."
        );
        expect(error.statusCode).toEqual(422);
      } else {
        console.log(error);
      }
    }
  });

  test("Should return success message when inputs correctly filled.", async () => {
    const input: ShowInputDTO = {
      token: "mock_token",
      bandId: "mock_id",
      weekDay: "domingo",
      startTime: 20,
      endTime: 22,
    };

    expect.assertions;
    try {
      const message = await showBusinessMock.register(input);
      expect(onmessage).toEqual({
        message: "Show successfully registered.",
      });
    } catch (error) {
      console.log(error);
    }
  });
});
