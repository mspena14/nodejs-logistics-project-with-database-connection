import express from 'express';
import warehouseRouter from '../router/warehousesRouter.js';

const routes = express();

routes.use("/warehouses", warehouseRouter);

export default routes;