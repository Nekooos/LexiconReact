import React from 'react'
import { useState } from 'react/cjs/react.development'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'

function SortTable() {

        const[data, setData] = useState()
        const[order, setOrder] = useState("ASC")
        useEffect(() => {
        axios.get('https://localhost:5001/api/React/get-all')
            .then(response => {
            setData(response.data)
            console.log(response.data)
            })
        }, [])

      if(data === undefined) {
          return null
      }

    const sorting = () => {
        if(order === "ASC") {
            const sortedArrayAsc = [...data].sort((a, b) => 
                a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
            );
            console.log(sortedArrayAsc)
            setOrder("DSC")
            setData(sortedArrayAsc);
        } else {
            const sortedArrayDsc = [...data].sort((a, b) => 
            a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1
            );
            console.log(sortedArrayDsc)
            setOrder("ASC")
            setData(sortedArrayDsc);
        }
    }
    console.log(data)
    return (
        <div> 
        <button className="btn btn-primary" onClick={() => sorting()}>Sort by name</button>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col" onClick={() => sorting()}>Name</th>
                    <th scope="col">PhoneNumber</th>
                    <th scope="col">City</th>
                    <th scope="col">Country</th>
            
                </tr>
            </thead>
            <tbody>
        
            {data.map((person, index) => {
                console.log("person: ")
                console.log(person)
                return (
                /*console.log("person: ")
                console.log(person)
                return <PeoplesTableValues personData = {person} key = {`post-list-key ${index}`} />*/
                <tr key={index}>
                <td>{person.id} </td>
                
                <td>
                <Link to={'details/'+person.id}>
                {person.name}  
                </Link></td>
                <td>{person.phoneNumber} </td>
                <td>{person.city.name} </td>
                <td>{person.city.country.name}</td>
            </tr>
                )
            })}
            </tbody>
        </table>
        </div>
    )
}

export default SortTable

