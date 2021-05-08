import React from 'react'

const EventsComponents: React.FC = () => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e);

    }
    const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
        console.log(e)
    }
    return (
        <div>
            <h3>EVENTS ON REFS AND STATES</h3>
            {/* Input Text */}
            <input type="text" value="" onChange={handleChange} />
            {/* Draggable Event */}
            <div draggable onDragStart={handleDrag}>Drag ME</div>
        </div>
    )
}
// *ALL EVENT HANDLER DEFINTION CAN BE FIND HERE:"node_modules/@types/react/index.d.ts"* 

export default EventsComponents
