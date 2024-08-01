import express from 'express';
import warehouseRouter from '../router/warehousesRouter.js';
import driverRouter from '../router/driversRouter.js';
import vehicleRouter from '../router/vehiclesRouter.js';
import shipmentRouter from '../router/shipmentsRouter.js';

const routes = express();

routes.use("/warehouses", warehouseRouter);
routes.use("/drivers", driverRouter);
routes.use("/vehicles", vehicleRouter);
routes.use("/shipments", shipmentRouter);

export default routes;