async function getAllEvents() {
    const response = await fetch('/events')
    const data = await response.json()

    return data
}

async function getEventById(id) {
    const response = await fetch(`/event/${id}`)
    const data = await response.json()

    return data
}