import { useState } from 'react'
export const GuestList: React.FC = () => {
    const [name, setName] = useState<string>('')
    const [guests, setGuests] = useState<string[]>([])
    const handleChange = (e: any) => {
        console.log(e.target.value)
        setName(e.target.value)
    }
    const handleGuestAdd = () => {
        setName('')
        setGuests([name, ...guests])
    }
    return (
        <div>
            <h3>Guest List</h3>
            <ol>
                {guests.map(guest => <li key={guest}>{guest}</li>)}
            </ol>
            <input type="text" value={name} onChange={handleChange} />
            <button onClick={handleGuestAdd}>Add Guest</button>
        </div>
    )
}