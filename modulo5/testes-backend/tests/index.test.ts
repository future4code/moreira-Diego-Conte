import UserBusiness from "../src/business/UserBusiness";
import { USER_ROLES } from "../src/model/User";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNhN2Q4MjVmLTJjOTEtNDA1NC05ZWUzLTQ3ZWJlMThjOTlhMCIsInJvbGUiOiJOT1JNQUwiLCJpYXQiOjE2NTIxMjE3NDEsImV4cCI6MTY1MjIwODE0MX0.D4lpsJzboXgE4PedENpJfs1gnbiPTwSLmwNb0GGLqSE";
const tokenAdmin =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImVjY2QxMzY1LTNiYzQtNGZlMi1iNTZkLTRmMzgyODFkZTkxMSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTY1MjExNzU2NiwiZXhwIjoxNjUyMjAzOTY2fQ.TIY5G4gImW3RbKfUatd1GyJv3FkpyB3p2HY9_DcZcUs";

describe("getUserById", () => {
  test("Should catch error when id is not registered", async () => {
    expect.assertions(2);

    const id = "eccd1365-3bc4-4fe2-b56d-4f38281de912";

    try {
      await UserBusiness.getUserById(id, token);
    } catch (error) {
      expect(error.statusCode).toBe(404);
      expect(error.message).toBe("User not found");
    }
  });

  test("Should return respective user when id is registered", async () => {
    expect.assertions(2);
    const id = "eccd1365-3bc4-4fe2-b56d-4f38281de911";

    try {
      const getUserById = jest.fn((id: string) =>
        UserBusiness.getUserById(id, token)
      );

      const result = await getUserById(id);

      expect(getUserById).toHaveBeenCalledWith(id);
      expect(result).toEqual({
        id: "eccd1365-3bc4-4fe2-b56d-4f38281de911",
        name: "Alice",
        email: "alice@lbn.com",
        role: "ADMIN",
      });
    } catch (error) {
      console.log(error.message);
    }
  });
});

describe("getAllUsers", () => {
  test("Should catch error when role is not ADMIN", async () => {
    expect.assertions(2);

    try {
      await UserBusiness.getAllUsers(token);
    } catch (error) {
      expect(error.statusCode).toBe(401);
      expect(error.message).toBe(
        "Please, sign in with or switch to an administrator account to access this endpoint."
      );
    }
  });

  test("Should return all users when authorized", async () => {
    expect.assertions(3);

    try {
      const getAllUsers = jest.fn((role: USER_ROLES) =>
        UserBusiness.getAllUsers(tokenAdmin)
      );

      const result = await getAllUsers(USER_ROLES.ADMIN);

      expect(getAllUsers).toHaveBeenCalledWith(USER_ROLES.ADMIN);
      expect(result).toContainEqual({
        id: "b2829dc3-4573-45f5-bf81-851f9ed78071",
        name: "Astrodev",
        email: "astrodev@gmail.com",
        role: "ADMIN",
      });
      expect(result).toContainEqual({
        id: "3a7d825f-2c91-4054-9ee3-47ebe18c99a0",
        name: "Diego",
        email: "diego@gmail.com",
        role: "NORMAL",
      });
    } catch (error) {
      console.log(error.message);
    }
  });
});
