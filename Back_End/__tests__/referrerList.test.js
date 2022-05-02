import mongoose from "mongoose";
import supertest from "supertest";
import { app, server } from "../index.js";
const api = supertest(app);



test.skip("Referrer list are returned as json", async () => {
  const response = await api
    .get("/api/referral/referrer-list")
    
});

afterAll(() => {
  mongoose.connection.close();
  server.close();
});


