import React, { useState } from 'react'

const SearchUser: React.FC = () => {
    const userList = [
        { "name": "Abhishek", "age": 20 },
        { "name": "Rocky", "age": 10 },
        { "name": "Tutu", "age": 30 },
    ]
    const [name, setName] = useState<string>('')
    const [user, setUser] = useState<{ name: string, age: number | undefined }>()
    const handleClick = () => {
        // userList.filter(user => { name === user.name { console.log(user.name) } })
        const foundUser = userList.find((user) => { return user.name === name })
        setUser(foundUser)
    }
    return (

        <div>
            <h2>
                Search User
            </h2>
            <input type="text" value={name} onChange={e => setName(e.target.value)}></input>
            <button onClick={handleClick}>Search User</button>
            <h5>{user && user.name}</h5>
            <h5>{user && user.age}</h5>
        </div >
    )
}

export default SearchUser
