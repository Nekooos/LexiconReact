import React from 'react';
import axios from 'axios';
import PeoplesTableValues from './poeplesTablevalues';
import useState from 'react'; 
import SortTable from './sortTable';


class PeoplesList extends React.Component {

    constructor () {
        super()
        this.state = {
            peoples: [],
            errorMessage: '',
        }
    }

   
    componentDidMount() {
        axios.get('https://localhost:5001/api/React/get-all')
            .then(response => {
                JSON.stringify(response.data)
                console.log(response.data)
                this.setState({ peoples: response.data })
                console.log(this.state.peoples)
            })
            .catch(error => {
                console.log(error)
                this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });
    }

    sortOrder = "ASC"
    sortArray() {
        if(this.sortOrder === "ASC") {
            let sortedArrayAsc = [...this.state.peoples].sort((a, b) => 
                a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
            );
            console.log(sortedArrayAsc)
            this.sortOrder = "DSC"
            this.setState.peoples = sortedArrayAsc;
        } else {
            let sortedArrayDsc = [...this.state.peoples].sort((a, b) => 
            a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1
            );
            console.log(sortedArrayDsc)
            this.sortOrder = "ASC"
            this.setState.peoples = sortedArrayDsc;
        }
    }

    
    //<Route path="/user/:userId" />
    render() {
        return (
            
        
            
            <div> 
            <SortTable data = {this.state.peoples} />
            <button className="btn btn-primary" onClick={() => this.sortArray()}>Sort by name</button>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">PhoneNumber</th>
                        <th scope="col">City</th>
                        <th scope="col">Country</th>
                        <th scope="col">Language</th>
                    </tr>
                </thead>
                <tbody>
              
                {this.state.peoples.map((person, index) => {
                    return <PeoplesTableValues personData = {person} key = {`post-list-key ${index}`} />
                })}
                </tbody>
            </table>
            </div>
        )
        
    }
}

export default PeoplesList