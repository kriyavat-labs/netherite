import express from "express";
import sequelize from "./config/database";
import User from "./models/User";

const app = express();

const PORT = process.env.BE_PORT || 3000;

async function initDatabase() {
  try {
    await sequelize.authenticate();
    console.log("Success!");

    await sequelize.sync({ alter: true });
    console.log("db sync done...");
  } catch (error) {
    console.log("error connecting...");
  }
}

initDatabase();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
