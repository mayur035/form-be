import { Router } from "express";
import { formGet, formPost } from "../db/controller/form.controller";

export const formRoute = Router();

formRoute.post("/post", formPost);
formRoute.get("/get", formGet);
