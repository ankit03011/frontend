import React from 'react'

const Props = (props) => {
    console.log(props.data, 'props')
    const data = props.data
    return (
        <div className='mt-5'>
            <h1>Name: {data.name}</h1>
            <h1>Age: {data.age}</h1>
            <h1>Color: {data.color}</h1>
            <h1>Weight: {data.weight}</h1>
        </div>
    )
}

export default Props