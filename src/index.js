import dotenv from 'dotenv'
import connect from "./db/index.js";

dotenv.config({
  path:'./env'
})


connect()








/*
import express from "express";
const app = express()
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

    app.on('error', (err) => {
      console.log("ERRROR: ", err);
      throw err
    })

    app.listen(process.env.PORT, () => {
      console.log(`aapp is listening on port ${process.env.PORT}`);
    })
  } catch (err) {
    console.error("ERROR: ", err);
    throw err;
  }
})();
*/