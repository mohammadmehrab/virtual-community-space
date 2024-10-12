import express from 'express'
// import controllers for events and locations
import {getEvents, getEventById, getEventByLocationId} from '../controllers/events.js'


const eventsRouter = express.Router()

eventsRouter.get('/', getEvents)

eventsRouter.get('/:eventId', getEventById)

eventsRouter.get('/location/:locationId', getEventByLocationId)


export default eventsRouter