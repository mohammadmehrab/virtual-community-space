import express from 'express'
// import controllers for events and locations
import {getLocations, getLocationById} from '../controllers/locations.js'


const locationsRouter = express.Router()

// define routes to get events and locations
locationsRouter.get('/', getLocations)

locationsRouter.get('/:locationId', getLocationById)






export default locationsRouter