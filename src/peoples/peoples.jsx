import React from 'react';
import axios from 'axios';
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

    render() {
        return(
        <SortTable data = {this.state.peoples} />
        )
    }
}
export default PeoplesList