import dotenv from "dotenv";
import express from "express";
import cors from "cors";

import userRoutes from "./routes/user.routes.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import createUserTable from "./data/createUserTable.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/users", userRoutes);

// Create user table
createUserTable();

// Error handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log("Server is running on PORT: ", PORT);
});
