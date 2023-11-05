import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/config";
import booksRoute from "./routes/bookRoutes";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 5555;

app.get("/", (req, res) => {
  console.log(req);
  return res.status(200).send("MERN Stack development");
});

app.use("/books", booksRoute);

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB Connection Error:", error);
  });
