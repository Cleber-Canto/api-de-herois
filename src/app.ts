import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import heroRoutes from "./routes/heroRoutes";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/api", heroRoutes);

export default app;
