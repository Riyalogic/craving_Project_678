import dotenv from "dotenv";
dotenv.config();

import connectDB from "../config/dbConnection.config.js";
import adminSedd from "./admin.seed.js";
import userSeed from "./user.seed.js";

const Seed = async () => {
  try {
    connectDB();

    await adminSedd();
    await userSeed();
  } catch (error) {
    console.log(error.message);
  } finally {
    process.exit(1);
  }
};

Seed();
