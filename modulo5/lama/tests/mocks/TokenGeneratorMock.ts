import { USER_ROLE } from "../../src/model/User";
import AuthenticationData from "../../src/types/AuthenticationData";

export default class TokenGeneratorMock {
  public generate = (input: AuthenticationData): string => {
    return "mock_token";
  };

  public verify(token: string) {
    return {
      id: "mock_id",
      role: USER_ROLE.NORMAL,
    };
  }
}
