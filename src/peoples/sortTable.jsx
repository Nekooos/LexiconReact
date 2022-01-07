import React from 'react'
import { useState } from 'react/cjs/react.development'
import PeoplesTableValues from './poeplesTablevalues'
import { Link } from 'react-router-dom'

function SortTable(props) {

    const[data, setData] = useState(props.data)
    const[order, setOrder] = useState("ASC")

    const log = () => {
        console.log(props.data);
    }
    log()

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
    const peoples = data;
    return (
        <div> 
        <button className="btn btn-primary" onClick={() => sorting()}>Sort by name</button>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col" onClick={() => sorting("name")}>Name</th>
                    <th scope="col">PhoneNumber</th>
                    <th scope="col">City</th>
                    <th scope="col">Country</th>
                    <th scope="col">Language</th>
                </tr>
            </thead>
            <tbody>
        
            {peoples.map((person, index) => {
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
                <td>
                {person.personLanguage.map(name =>
                 name.name + " "
                )}
                </td>
            </tr>
                )
            })}
            </tbody>
        </table>
        </div>
    )
}

export default SortTable

