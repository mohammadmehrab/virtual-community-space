import React, { useState, useEffect } from 'react'
import Event from '../components/Event'
import '../css/LocationEvents.css'
import LocationsAPI from '../services/LocationsAPI'
import EventsAPI from '../services/EventsAPI'

const LocationEvents = ({index}) => {
    const [location, setLocation] = useState([])
    const [events, setEvents] = useState([])

    useEffect(() => {
        (async () => {
            try {
                if(index !== 0) {
                    const locationData = await LocationsAPI.getLocationById(index)
                    // console.log("locationData data is " + locationData)
                    setLocation(locationData)
    
                    const eventsData = await EventsAPI.getEventByLocationId(index)
                    // console.log("events data is " + eventsData)
                    setEvents(eventsData)
                } else {
                    const eventsData = await EventsAPI.getAllEvents()
                    setEvents(eventsData)
                }
            }
            catch (error) {
                throw error
            }
        }) ()
    }, [events])

    return (
        <div className='location-events'>
            
            {
                index !== 0 ? (
                <header key={index}>
                    <div className='location-image'>
                        <img src={location.image} />
                    </div>

                    <div className='location-info'>
                        <h2>{location.name}</h2>
                        <p>{location.address}, {location.city}, {location.state} {location.zip}</p>
                    </div>
                </header>   ) : <></>
            }

            <main>
                {
                    events && events.length > 0 ? events.map((event, index) =>
                        <Event
                            key={event.id}
                            id={event.id}
                            title={event.name}
                            date={event.datetime}
                            time={event.datetime}
                            datetime={event.datetime}
                            image={event.image}
                        />
                    ) : <h2><i className="fa-regular fa-calendar-xmark fa-shake"></i> {'No events scheduled at this location yet!'}</h2>
                }
            </main>
        </div>
    )
}

export default LocationEvents