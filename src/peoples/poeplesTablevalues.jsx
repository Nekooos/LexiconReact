import React, {Component} from "react";
import {Link} from 'react-router-dom';


class PeoplesTableValues extends React.Component {
    render() {
        console.log("table values")
        let person = this.props.personData
        const index = this.props.index

        // Needs to be const and not in td for some wierd reason
        const city = person.city.name;
        const country = person.city.country.name;
        const personLanguageArray = person.personLanguage.map(personLanguage => personLanguage.language.name)

        return (
            <tr key={index}>
                <td>{person.id} </td>
                
                <td>
                <Link to={'details/'+person.id}>
                {person.name}  
                </Link></td>
                <td>{person.phoneNumber} </td>
                <td>{city} </td>
                <td>{country}</td>
                <td>
                {personLanguageArray.map(name =>
                 name + " "
                )}
                </td>
            </tr>
        )
    }
}

export default PeoplesTableValues