import React, { useState, useEffect, useRef } from 'react'
import '../css/Event.css'
import EventsAPI from '../services/EventsAPI'
import { dates } from '../services/dates'

const Event = (props) => {

    const [event, setEvent] = useState([])
    const [time, setTime] = useState([])
    const [remaining, setRemaining] = useState([])
    // const [countdownRef, setCountdownRef] = useRef(null)

    useEffect(() => {
        (async () => {
            try {
                const eventData = await EventsAPI.getEventById(props.id)
                setEvent(eventData)
            }
            catch (error) {
                console.log(error)
                throw error
            }
        }) ()
    }, [])

    useEffect(() => {
        (async () => {
            try {
                const result = dates.formatTime(event.datetime)
                setTime(result)
            }
            catch (error) {
                throw error
            }
        }) ()
    }, [event])

    useEffect(() => {
        (async () => {
            try {
                const timeRemaining = dates.formatRemainingTime(event.datetime)
                setRemaining(timeRemaining)
                dates.formatNegativeTimeRemaining(remaining, event.id)
            }
            catch (error) {
                throw error
            }
        }) ()
    }, [event])

    return (
        <article className='event-information'>
            <img src={event.image} />

            <div className='event-information-overlay'>
                <div className='text'>
                    <h3>{event.name}</h3>
                    <p><i className="fa-regular fa-calendar fa-bounce"> {dates.formatDate(event.datetime)}</i> <br /> {time}</p>
                    {
                        dates.getTimeDifference(event.datetime) > 0 ?
                        <p id={`remaining-${event.id}`}>{remaining}</p> 
                        : <p>Event has already passed!</p>
                    }
                </div>
            </div>
        </article>
    )
}

export default Event