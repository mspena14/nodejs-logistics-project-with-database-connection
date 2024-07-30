import { Router } from "express";
import { getAll, insert, update, remove, getOne } from "../controllers/driverController.js";

const driverRouter = Router();

driverRouter.get("/", getAll);
driverRouter.post("/", insert);
driverRouter.get("/:id", getOne);
driverRouter.put("/:id", update);
driverRouter.delete("/:id", remove);


export default driverRouter;