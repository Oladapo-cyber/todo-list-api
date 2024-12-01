import express from "express";
import userRoute from "./routes/userRoutes.js";

const app = express();
const port = 567;
app.use(express.json());

app.use("/api/v1/todo", userRoute);

app.get("/", (req, res) => {
  res.send("It's working, my todo-list app!");
});

app.listen(port, () => {
  console.log(`The server is listening on port http://localhost:${port}`);
});
