import UserBusiness from "../src/business/UserBusiness";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImVjY2QxMzY1LTNiYzQtNGZlMi1iNTZkLTRmMzgyODFkZTkxMSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTY1MjExNzU2NiwiZXhwIjoxNjUyMjAzOTY2fQ.TIY5G4gImW3RbKfUatd1GyJv3FkpyB3p2HY9_DcZcUs"


describe("getUserById", () => {
  // (a)
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

  // (b)
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
