import React from 'react'
import { Child, ChildAsFC } from './Child'

const Parent = () => {
    // return (<Child color="green" onClick={() => console.log("clicked")} >
    //     Hello
    //     <Child>)
    //     }
    return (
        <ChildAsFC color="green" onClick={() => console.log("clicked")} >
            Hello
        </ChildAsFC>
    )
}

export default Parent
