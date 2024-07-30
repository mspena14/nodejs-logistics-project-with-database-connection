import { findAll, save, updateDriver, removeDriver, findById } from "../models/driverModel.js";

export const getAll = async (_,res) => {
    const drivers = await findAll();
    res.json({message: "Ok", data: drivers})
};

export const getOne = async (req, res) => {
    const driverFound = await findById(req.params.id);
    if (!driverFound) return res.status(404).send("Driver not found!")
    res.status(200).json({message: "Driver found!", driver: driverFound})
};

export const insert = async (req, res) => {
    const { name } = req.body;
    const driverCreated = await save({ name });

    res.status(201).send({
        message: "Successfully created",
        data: driverCreated
    });
};

export const update = async (req, res) => {
    const driverId = req.params.id;
    const { name } = req.body;
    const updatedDriver = await updateDriver(driverId, { name });
    res.status(200).json({message: "Updated successfully", response: updatedDriver})
};

export const remove = async(req, res) => {
    const driverId = req.params.id;
    const removedDriver = await removeDriver(driverId);
    res.status(200).json({message: "Deleted successfully", driver: removedDriver})
}