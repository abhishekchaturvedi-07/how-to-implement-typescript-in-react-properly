import React from 'react'

interface ChildProps {
    color: string;
    onClick: () => void
}

export const Child = ({ color, onClick }: ChildProps) => {
    return (
        <div> 
            `Color is {color}` 
            <button onClick={onClick}></button>
        </div>
    )
}

export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick, children }) => { 
    return (
        <div>
            {children}
            `Color is {color}`
            <button onClick={onClick}></button>
        </div> 
    )}


