import React, {Component} from "react";
import {Link} from 'react-router-dom';


class PeoplesTableValues extends React.Component {
    render() {
        let person = this.props.personData
        const index = this.props.index
        let personArray = person
        
        return (
            <tr key={index}>
                <td>{person.id} </td>
                
                <td>
                <Link to={'details/'+person.id}> 
                {person.name}  
                </Link></td>
                <td>{person.phoneNumber} </td>
                <td>{person.city.name} </td>
                <td>{person.city.country}</td>
                <td>
                {
                    personArray
                }
                </td>
            </tr>
        )
    }
}

export default PeoplesTableValues