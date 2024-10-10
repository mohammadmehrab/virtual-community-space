

async function getAllLocations() {
    const response = await fetch('/locations')
    const data = await response.json()

    return data
}

async function getLocationById(id) {
    const response = await fetch(`/location/${id}`)
    const data = await response.json()

    return data
}