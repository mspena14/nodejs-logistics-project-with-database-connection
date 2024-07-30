import { pool } from "../../config/db.js";

export const save = async (driver) => {
    try{
        const [ resolve ] = await pool.query("INSERT INTO drivers ( name ) VALUES ( ? )", driver.name);
        const [[driverCreated]] = await pool.query("SELECT * FROM drivers WHERE id = ?", [resolve.insertId])
    
        return driverCreated
    }catch(err){
        throw new Error("Ocurrio un error", err)

    }
};


export async function findAll(){
    try{
        const [drivers] = await pool.query("SELECT * FROM drivers");
        return drivers;
    }catch(err){
        console.log(err);
    }

};

export const findById = async (id) => {
    try {
        const [[driverFound]] = await pool.query("SELECT * FROM drivers WHERE id = ?", [id]);
        if (!driverFound) {
            throw new Error("Driver not found")
        }
        return driverFound;
    }       
    catch (error) {
        console.log("Error:", error)
    }
};

export const updateInModel = async(id, newDriver) => {
    try {
        await pool.query("UPDATE drivers SET name = ? WHERE id = ?", [newDriver.name, id])
        return;
    } catch (error) {
        throw new Error("Driver has not been updated", error )
    }
};

export const updateDriver = async (id, newDriver) => {
    try{
       await findById(id);
       await updateInModel(id, newDriver);
       return newDriver;

    }catch(err){
        throw new Error("Driver has not been updated", err )
    }

};

export const removeDriver = async (id) => {
    try {
        const driverDeleted = await findById(id);
        await pool.query("DELETE from drivers WHERE id = ?", id);
        return driverDeleted;
    } catch (err) {
        throw new Error("Driver has not been deleted", err)
    }
};