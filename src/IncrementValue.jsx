import React, { useState } from 'react'

const IncrementValue = () => {
    const [data, setData] = useState(0)

    const incrementValue = () => {
        setData(data + 1)
    }

    const decrementValue = () => {
        setData(data - 1)
    }
    return (
        <div>
            <h1>Value : {data}</h1>
            <button onClick={() => incrementValue()}>Increment</button>
            <button onClick={() => decrementValue()}>Decrement</button>
        </div>
    )
}

export default IncrementValue