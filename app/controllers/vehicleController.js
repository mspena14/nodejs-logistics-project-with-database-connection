import { findAll, save, updateVehicle, removeVehicle, findById } from "../models/vehicleModel.js";

export const getAll = async (_,res) => {
    const vehicles = await findAll();
    res.json({message: "Ok", data: vehicles})
};

export const getOne = async (req, res) => {
    const vehicleFound = await findById(req.params.id);
    if (!vehicleFound) return res.status(404).send("Vehicle not found!")
    res.status(200).json({message: "Vehicle found!", vehicle: vehicleFound})
};

export const insert = async (req, res) => {
    const { model , year } = req.body;
    const vehicleCreated = await save({model, year});

    res.status(201).send({
        message: "Successfully created",
        data: vehicleCreated
    });
};

export const update = async (req, res) => {
    const vehicleId = req.params.id;
    const { model, year } = req.body;
    const updatedVehicle = await updateVehicle(vehicleId, {model, year});
    res.status(200).json({message: "Updated successfully", response: updatedVehicle})
};

export const remove = async(req, res) => {
    const vehicleId = req.params.id;
    const removedVehicle = await removeVehicle(vehicleId);
    res.status(200).json({message: "Deleted successfully", vehicle: removedVehicle})
}