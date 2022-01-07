import React, { useEffect } from 'react';
import deletePerson from './deletePerson';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';


function PeopleDetails() {
    
        let { id } = useParams()
        let[person, setPerson] = useState({});

        useEffect(() => {
            async function fetchData() {
                let request = await axios.get('https://localhost:5001/api/React/get/'+id)
                setPerson(request.data)
            }
            fetchData();
        }, [id])

        
        return (
            
        <div>
        <h1> {person.name} </h1>
            <ul className="list-group">
                
                <li className="list-group-item">id: {id} </li>
            </ul>
            <button onClick={() => deletePerson(id)} className="btn btn-primary">Delete</button>
        </div>
        
        )
}

export default PeopleDetails



