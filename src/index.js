import dotenv from "dotenv";
import express from "express";
import cors from "cors";

import userRoutes from "./routes/user.routes.js";
import { errorHandler } from "./middlewares/errorHandler.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.use("/api/users", userRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log("Server is running on PORT: ", PORT);
});
