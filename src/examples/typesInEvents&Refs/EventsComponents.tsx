import React from 'react'

const EventsComponents: React.FC = () => {
    const handleChange = (e: any) => {
        console.log(e);

    }
    return (
        <div>
            <h3>EVENTS ON REFS AND STATES</h3>
            <input type="text" value="" onChange={handleChange} />
        </div>
    )
}

export default EventsComponents
