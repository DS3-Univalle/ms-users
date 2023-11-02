const { beforeEach } = require('@jest/globals');
const verificationFunctions = require("./verification");
const userFunctions = require("./user");

jest.mock("./user");

describe("Verification suit test", () => {

  beforeEach(() => {
    jest.clearAllMocks();
  })

  it("Verification not found user", async () => {
    userFunctions.getUser.mockResolvedValue({
      Item: undefined,
    });

    const event = {
      body: JSON.stringify({
        uid: "010c386f-2cad-434f-81c1-05450e080b10",
      }),
    };

    const result = JSON.parse(await verificationFunctions.verification(event));

    expect(userFunctions.getUser).toHaveBeenCalledTimes(1);
    expect(result.statusCode).toBe(404);
    expect(result.body.message).toContain("User not found");
  });

});
