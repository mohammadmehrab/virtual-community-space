import { pool } from "../config/database.js";

const getEvents = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM events ORDER BY id ASC')
        res.status(200).json(results.rows)
    } catch(err) {
        res.status(409).json( { error: err.message })
    }
}

const getEventById = async (req, res) => {
    try {
        const selectQuery = `
            SELECT name, datetime, image, location
            FROM events
            WHERE id=$1
        `

        const eventId = req.params.eventId

        const results = await pool.query(selectQuery, [eventId])

        res.status(200).json(results.rows[0])

    } catch(error) {
        res.status(409).json( {error: error.message})
    }
}

export {getEvents, getEventById}