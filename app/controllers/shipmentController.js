import { findAll, save, updateShipment, removeShipment, findById } from "../models/shipmentModel.js";

export const getAll = async (_,res) => {
    const shipments = await findAll();
    res.json({message: "Ok", data: shipments})
};

export const getOne = async (req, res) => {
    const shipmentFound = await findById(req.params.id);
    if (!shipmentFound) return res.status(404).send("Shipment not found!")
    res.status(200).json({message: "Shipment found!", shipment: shipmentFound})
};

export const insert = async (req, res) => {
    const { item , quantity } = req.body;
    const shipmentCreated = await save({item, quantity});

    res.status(201).send({
        message: "Successfully created",
        data: shipmentCreated
    });
};

export const update = async (req, res) => {
    const shipmentId = req.params.id;
    const { item, quantity } = req.body;
    const updatedShipment = await updateShipment(shipmentId, {item, quantity});
    res.status(200).json({message: "Updated successfully", response: updatedShipment})
};

export const remove = async(req, res) => {
    const shipmentId = req.params.id;
    const removedShipment = await removeShipment(shipmentId);
    res.status(200).json({message: "Deleted successfully", shipment: removedShipment})
}