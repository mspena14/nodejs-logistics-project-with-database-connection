import { Router } from "express";
import { getAll, insert, update, remove, getOne } from "../controllers/shipmentController.js";

const shipmentRouter = Router();

shipmentRouter.get("/", getAll);
shipmentRouter.post("/", insert);
shipmentRouter.get("/:id", getOne);
shipmentRouter.put("/:id", update);
shipmentRouter.delete("/:id", remove);


export default shipmentRouter;