import supertest from "supertest";

import { app, server } from "../index.js";
const api = supertest(app);

test("Referrer list are returned as json", async () => {
  await api
    .get("/api/referral/referrer-list")
    .expect(200)
    .expect("Content-Type", /application\/json/);
});

afterAll(() => {
  server.close();
});
