import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import router from "./src/routes/courseRoutes.js";
import connectDB from "./src/db/index.js";


const port = process.env.PORT;
const app = express();


app.use(cors());
app.use(express.json());
app.use("/api/v1", router);


app.get("/", (req, res) => {
  res.status(200).json({ message: "nikal" });
});


connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.log("mongodb connection failed ", error);
  });
