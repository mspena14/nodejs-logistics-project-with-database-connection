import { pool } from "../../config/db.js";

export const save = async (shipment) => {
    try{
        const [ resolve ] = await pool.query("INSERT INTO shipments ( item, quantity ) VALUES ( ?, ? )", [ shipment.item, shipment.quantity ]);
        const [[shipmentCreated]] = await pool.query("SELECT * FROM shipments WHERE id = ?", [resolve.insertId])
    
        return shipmentCreated
    }catch(err){
        throw new Error("Ocurrio un error", err)

    }
}


export async function findAll(){
    try{
        const [shipments] = await pool.query("SELECT * FROM shipments");
        return shipments;
    }catch(err){
        console.log(err);
    }

}

export const findById = async (id) => {
    try {
        const [[shipmentFound]] = await pool.query("SELECT * FROM shipments WHERE id = ?", [id]);
        if (!shipmentFound) {
            throw new Error("Shipment not found")
        }
        return shipmentFound;
    }       
    catch (error) {
        console.log("Error:", error)
    }
}

export const updateInModel = async(id, newShipment) => {
    try {
        await pool.query("UPDATE shipments SET item = ?, quantity = ? WHERE id = ?", [newShipment.item, newShipment.quantity, id])
        return;
    } catch (error) {
        throw new Error("Shipment has not been updated", error )
    }
}

export const updateShipment = async (id, newShipment) => {
    try{
       await findById(id);
       await updateInModel(id, newShipment);
       return newShipment;

    }catch(err){
        throw new Error("Shipment has not been updated", err )
    }

};

export const removeShipment = async (id) => {
    try {
        const shipmentDeleted = await findById(id);
        await pool.query("DELETE from shipments WHERE id = ?", id);
        return shipmentDeleted;
    } catch (err) {
        throw new Error("Shipment has not been deleted", err)
    }
}