import express from 'express'
// import controllers for events and locations
import {getEvents, getEventById} from '../controllers/events.js'


const eventsRouter = express.Router()

eventsRouter.get('/', getEvents)

eventsRouter.get('/:eventId', getEventById)

export default eventsRouter