import { pool } from "./database.js";
import eventData from "../data/events.js";
import locationData from "../data/locations.js";


const createEventsTable = async () => {

    const createTableQuery = `
    DROP TABLE IF EXISTS events;

    CREATE TABLE IF NOT EXISTS events (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        datetime TIMESTAMP NOT NULL,
        image VARCHAR(255) NOT NULL,
        location INTEGER NOT NULL 
    )
    `

    try {
        const res = await pool.query(createTableQuery)
        console.log('🎉 events table created successfully')
    } catch (err) {
        console.error('⚠️ error creating events table', err)
    }
}

const seedEventsTable = async () => {
    await createEventsTable()

    eventData.forEach(event => {
        const insertQuery = {
            text: 'INSERT INTO events (name, datetime, image, location) VALUES ($1, $2, $3, $4)'
        }
        const values = [
            event.name,
            event.datetime,
            event.image,
            event.location
        ]
        
        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting event', err)
                return
            }
        
            console.log(`✅ ${event.name} added successfully`)
        })
    })
    
}

const createLocationsTable = async () => {

    const createTableQuery = `
    DROP TABLE IF EXISTS locations;

    CREATE TABLE IF NOT EXISTS locations (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        image VARCHAR(255) NOT NULL,
        address VARCHAR(255) NOT NULL,
        city VARCHAR(255) NOT NULL,
        state VARCHAR(255) NOT NULL,
        zip INTEGER NOT NULL
    )
    `

    try {
        const res = await pool.query(createTableQuery)
        console.log('🎉 locations table created successfully')
    } catch (err) {
        console.error('⚠️ error creating locations table', err)
    }
}

const seedLocationsTable = async () => {
    await createLocationsTable()
    
    locationData.forEach(location => {
        const insertQuery = {
            text: 'INSERT INTO locations (id, name, image, address, city, state, zip) VALUES ($1, $2, $3, $4, $5, $6, $7)'
        }
        const values = [
            location.id,
            location.name,
            location.image,
            location.address,
            location.city,
            location.state,
            location.zip
        ]
        
        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting location', err)
                return
            }
        
            console.log(`✅ ${location.name} added successfully`)
        })
    })
}

seedLocationsTable()
seedEventsTable()