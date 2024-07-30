import { pool } from "../../config/db.js";

export const save = async (vehicle) => {
    try{
        const [ resolve ] = await pool.query("INSERT INTO vehicles ( model, year ) VALUES ( ?, ? )", [ vehicle.model, vehicle.year ]);
        const [[vehicleCreated]] = await pool.query("SELECT * FROM vehicles WHERE id = ?", [resolve.insertId])
    
        return vehicleCreated
    }catch(err){
        throw new Error("Ocurrio un error", err)

    }
}


export async function findAll(){
    try{
        const [vehicles] = await pool.query("SELECT * FROM vehicles");
        return vehicles;
    }catch(err){
        console.log(err);
    }

}

export const findById = async (id) => {
    try {
        const [[vehicleFound]] = await pool.query("SELECT * FROM vehicles WHERE id = ?", [id]);
        if (!vehicleFound) {
            throw new Error("Vehicle not found")
        }
        return vehicleFound;
    }       
    catch (error) {
        console.log("Error:", error)
    }
}

export const updateInModel = async(id, newVehicle) => {
    try {
        await pool.query("UPDATE vehicles SET model = ?, year = ? WHERE id = ?", [newVehicle.model, newVehicle.year, id])
        return;
    } catch (error) {
        throw new Error("Vehicle has not been updated", error )
    }
}

export const updateVehicle = async (id, newVehicle) => {
    try{
       await findById(id);
       await updateInModel(id, newVehicle);
       return newVehicle;

    }catch(err){
        throw new Error("Vehicle has not been updated", err )
    }

};

export const removeVehicle = async (id) => {
    try {
        const vehicleDeleted = await findById(id);
        await pool.query("DELETE from vehicles WHERE id = ?", id);
        return vehicleDeleted;
    } catch (err) {
        throw new Error("Vehicle has not been deleted", err)
    }
}