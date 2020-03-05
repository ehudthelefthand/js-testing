const { createUser } = require("../create-user");

jest.mock("../mailer");
const mailer = require("../mailer");

test("should send email to user after create", async () => {
  mailer.send.mockImplementation(() => Promise.resolve());
  await createUser({ email: "pongneng@mail.com" }, mailer);
  expect(mailer.send).toHaveBeenCalledWith("pongneng@mail.com");
});
