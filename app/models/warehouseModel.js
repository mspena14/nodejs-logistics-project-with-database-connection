import { pool } from "../../config/db.js";

export const save = async (warehouse) => {
    try{
        const [ resolve ] = await pool.query("INSERT INTO warehouses ( name, location ) VALUES ( ?, ? )", [ warehouse.name, warehouse.location ]);
        const [[warehouseCreated]] = await pool.query("SELECT * FROM warehouses WHERE id = ?", [resolve.insertId])
    
        return warehouseCreated
    }catch(err){
        throw new Error("Ocurrio un error", err)

    }
}


export async function findAll(){
    try{
        const [warehouses] = await pool.query("SELECT * FROM warehouses");
        return warehouses;
    }catch(err){
        console.log(err);
    }

}

export const findById = async (id) => {
    try {
        const [[warehouseFound]] = await pool.query("SELECT * FROM warehouses WHERE id = ?", [id]);
        if (!warehouseFound) {
            throw new Error("Warehouse not found")
        }
        return warehouseFound;
    }       
    catch (error) {
        console.log("Error:", error)
    }
}

export const updateInModel = async(id, newWarehouse) => {
    try {
        await pool.query("UPDATE warehouses SET name = ?, location = ? WHERE id = ?", [newWarehouse.name, newWarehouse.location, id])
        return;
    } catch (error) {
        throw new Error("Warehouse has not been updated", error )
    }
}

export const updateWarehouse = async (id, newWarehouse) => {
    try{
       await findById(id);
       await updateInModel(id, newWarehouse);
       return newWarehouse;

    }catch(err){
        throw new Error("Warehouse has not been updated", err )
    }

};

export const removeWarehouse = async (id) => {
    try {
        const warehouseDeleted = await findById(id);
        await pool.query("DELETE from warehouses WHERE id = ?", id);
        return warehouseDeleted;
    } catch (err) {
        throw new Error("Warehouse has not been deleted", err)
    }
}