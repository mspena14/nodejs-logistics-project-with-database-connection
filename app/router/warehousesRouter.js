import { Router } from "express";
import { getAll, insert, update, remove, getOne } from "../controllers/warehouseController.js";

const warehouseRouter = Router();

warehouseRouter.get("/", getAll);
warehouseRouter.post("/", insert);
warehouseRouter.get("/:id", getOne);
warehouseRouter.put("/:id", update);
warehouseRouter.delete("/:id", remove);


export default warehouseRouter;