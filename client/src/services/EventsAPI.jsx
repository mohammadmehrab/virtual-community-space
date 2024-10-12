async function getAllEvents() {
    const response = await fetch('/events')
    const data = await response.json()

    return data
}

async function getEventById(eventId) {
    const response = await fetch(`/events/${eventId}`)
    const data = await response.json()

    return data
}

async function getEventByLocationId(locationId) {
    const response = await fetch(`/events/location/${locationId}`)
    const data = await response.json()

    return data
}

export default {
    getAllEvents,
    getEventById,
    getEventByLocationId
}