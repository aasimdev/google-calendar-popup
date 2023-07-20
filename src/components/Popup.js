import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import { Button, Form, Badge } from 'react-bootstrap';

import meetIcon from '../assets/images/meet.svg'

const Popup = ({ handleClose, show }) => {
    const [eventDescription, setEventDescription] = useState(false);


    const addDescriptionHandler = () => {
        setEventDescription(true)
    }

    return (
        <Modal show={show} onHide={handleClose} centered className="calendar-popup">
            <Modal.Header closeButton>
                <Modal.Title>
                    <button class="material-icons">
                        drag_handle
                    </button>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='event-tnt'>
                    <div className='event-title'>
                        <Form.Control type="text" placeholder="Add title" />
                    </div>
                    <div className='event-type'>
                        <button className='active' type='button'>Event</button>
                        <button type='button'>Task</button>
                        <button type='button'>Appointment schedule
                            <Badge pill bg="primary">
                                New
                            </Badge>
                        </button>
                    </div>
                </div>

                <div className='event-content'>

                    {/* Event Date & Time */}
                    <div className='event-dnt'>
                        <div className='event-icon'>
                            <span class="material-icons">access_time</span>
                        </div>
                        <div className='event-dnt-text'>
                            <p>Wendesday, July 19 &nbsp; &nbsp; 3:00pm - 4:00pm</p>
                            <ul className='dot-list'>
                                <li>Time zone</li>
                                <li>Does not repeat</li>
                            </ul>
                        </div>
                    </div>

                    {/* Event Fina a time */}
                    <div className='event-findtime'>
                        <button type="button">Find a time</button>
                    </div>

                    {/* Event Add Guest */}
                    <div className='event-guest'>
                        <div className='event-icon'>
                            <svg focusable="false" width="20" height="20" viewBox="0 0 24 24"><path d="M15 8c0-1.42-.5-2.73-1.33-3.76.42-.14.86-.24 1.33-.24 2.21 0 4 1.79 4 4s-1.79 4-4 4c-.43 0-.84-.09-1.23-.21-.03-.01-.06-.02-.1-.03A5.98 5.98 0 0 0 15 8zm1.66 5.13C18.03 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.58-3.47-6.34-3.87zM9 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 9c-2.7 0-5.8 1.29-6 2.01V18h12v-1c-.2-.71-3.3-2-6-2M9 4c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm0 9c2.67 0 8 1.34 8 4v3H1v-3c0-2.66 5.33-4 8-4z"></path></svg>
                        </div>
                        <div className='event-guest-content'>
                            <button type="button" className='event-baction'>Add guests</button>
                        </div>
                    </div>

                    {/* Event Google Meet */}
                    <div className='event-mmet-vc'>
                        <div className='event-icon'>
                            <img src={meetIcon} className="meet-icon" alt="icon" />
                        </div>
                        <div className='event-mmet-vc-action'>
                            <Button variant="primary">Add Google Meet video conferencing</Button>
                        </div>
                    </div>

                    {/* Event Location */}
                    <div className='event-location'>
                        <div className='event-icon'>
                            <svg focusable="false" width="24" height="24" viewBox="0 0 24 24" class=" NMm5M"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"></path><circle cx="12" cy="9" r="2.5"></circle></svg>
                        </div>
                        <div className='event-location-content'>
                            <button type="button" className='event-baction'>Add location</button>
                        </div>
                    </div>

                    {/* Event Description */}
                    <div className='event-description'>
                        <div className='event-icon'>
                            <span class="material-icons">notes</span>
                        </div>
                        <div className='event-description-content'>
                            {eventDescription ?
                                <div className='event-description-field'>
                                    <Form.Control as="textarea" rows={3} placeholder='Add description' />
                                </div> :
                                <button type="button" className='event-baction' onClick={addDescriptionHandler}>Add description or attachments</button>
                            }
                        </div>
                    </div>

                    {/* Event Organizer */}
                    <div className='event-organizer'>
                        <div className='event-icon'>
                            <span class="material-icons">event</span>
                        </div>
                        <div className='event-organizer-content'>
                            <h5>Tariq Saleem <span className='status default'></span></h5>
                            <ul className='dot-list'>
                                <li>Busy</li>
                                <li>Default visibility</li>
                                <li>Notify 30 minutes before</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="link">
                    More options
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Popup