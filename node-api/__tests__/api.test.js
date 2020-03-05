const mongoose = require("mongoose");
const request = require("supertest");
const { start } = require("../api");

let app;

beforeEach(async () => {
  app = await start({ mongoURL: "mongodb://localhost/installment-test" });
});

afterEach(async () => {
  const collections = await mongoose.connection.db.collections();
  for (let collection of collections) {
    await collection.remove();
  }
  await mongoose.connection.close();
});

test("get user should be success", async () => {
  // act
  // request
  await request(app)
    .post("/users")
    .send({ name: "pongneng" });
  await request(app)
    .post("/users")
    .send({ name: "airmee" });
  const res = await request(app).get("/users");

  // assert
  // check response
  expect(res.status).toEqual(200);
  expect(res.body.length).toEqual(2);
});

test("create user should be success", async () => {
  // act
  // request
  const res = await request(app)
    .post("/users")
    .send({ name: "john" });

  // assert
  // check response
  expect(res.status).toEqual(200);
  expect(res.body.name).toEqual("john");
});
