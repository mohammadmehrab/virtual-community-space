import { pool } from "../config/database.js";

const getLocations = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM locations ORDER BY id ASC')
        res.status(200).json(results.rows)
    } catch(err) {
        res.status(409).json( { error: err.message })
    }
}

async function getLocationById(req, res) {
    try {
        const selectQuery = `
            SELECT name, address, zip, city, state, image 
            FROM locations
            WHERE id=$1
        `

        const locationId = req.params.locationId

        const results = await pool.query(selectQuery, [locationId])

        res.status(200).json(results.rows[0])

    } catch(error) {
        res.status(409).json( {error: error.message})
    }
}

export {getLocations, getLocationById}