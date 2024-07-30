import { Router } from "express";
import { getAll, insert, update, remove, getOne } from "../controllers/vehicleController.js";

const vehicleRouter = Router();

vehicleRouter.get("/", getAll);
vehicleRouter.post("/", insert);
vehicleRouter.get("/:id", getOne);
vehicleRouter.put("/:id", update);
vehicleRouter.delete("/:id", remove);


export default vehicleRouter;