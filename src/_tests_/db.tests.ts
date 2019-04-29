import { User } from "../server/db";

describe("our models", () => {
  test("user model creates a user", () => {
    return User.create({ name: "moe" }).then(user =>
      expect(user.name).toBe("moe")
    );
  });
});
