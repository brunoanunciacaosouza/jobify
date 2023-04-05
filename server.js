import express from "express";
import notFoundMiddleware from "./middleware/not-found.js";
import dotenv from "dotenv";
import connectDB from "./db/connect.js";
dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Welcome!</h1>");
});

app.use(notFoundMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

start();
