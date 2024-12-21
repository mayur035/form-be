import cors from "cors";
import dotenv from "dotenv";
import express, { Express, Request, Response, urlencoded } from "express";
import { DataSources } from "./db/data-source";
import { formRoute } from "./routes/form.routes";

dotenv.config();

const app: Express = express();
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cors());

const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.use("/api", formRoute);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

DataSources.initialize()
  .then(() =>
    console.log(
      `Database connected successfully on ${process.env.DATABASE_USERPORT}`
    )
  )
  .catch((error: Error) => {
    console.log("error: ~ 🚀", error);
  });
