import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap';

const Customer = () => {
    const [data, setData] = useState([])

    // const getData = async () => {
    //     const apiUrl = await fetch('http://localhost:5000/api/get')
    //     const userData = await apiUrl.json()
    //     console.log(userData.response, 'userdata')
    //     setData(userData.response)
    // }

    const getData = async() => {
       await fetch('http://localhost:5000/api/get').then((data) => {
           return data.json()
        }).then((data) => {
            setData(data.response)
        }).catch((error)=>{
            console.log("Server Error", error)
        })
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className='container mt-5'>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#CId</th>
                        <th>Customer Name</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.map((item) => {
                            return (
                                <tr key={item.cid}>
                                    <td>{item.cid}</td>
                                    <td>{item.cname}</td>
                                    <td>{item.address}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Customer