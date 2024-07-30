import { findAll, save, updateWarehouse, removeWarehouse, findById } from "../models/warehouseModel.js";

export const getAll = async (_,res) => {
    const warehouses = await findAll();
    res.json({message: "Ok", data: warehouses})
};

export const getOne = async (req, res) => {
    const warehouseFound = await findById(req.params.id);
    if (!warehouseFound) return res.status(404).send("Warehouse not found!")
    res.status(200).json({message: "Warehouse found!", warehouse: warehouseFound})
};

export const insert = async (req, res) => {
    const { name , location } = req.body;
    const warehouseCreated = await save({name, location});

    res.status(201).send({
        message: "Successfully created",
        data: warehouseCreated
    });
};

export const update = async (req, res) => {
    const warehouseId = req.params.id;
    const { name, location } = req.body;
    const updatedWarehouse = await updateWarehouse(warehouseId, {name, location});
    res.status(200).json({message: "Updated successfully", response: updatedWarehouse})
};

export const remove = async(req, res) => {
    const warehouseId = req.params.id;
    const removedWarehouse = await removeWarehouse(warehouseId);
    res.status(200).json({message: "Deleted successfully", warehouse: removedWarehouse})
}