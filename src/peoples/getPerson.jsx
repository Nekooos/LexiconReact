
import axios from "axios";

const getPerson = (id) => {
    console.log(id)
    axios.get('https://localhost:5001/api/React/get/'+id)
    .then(response => {
        JSON.stringify(response.data)
        console.log(response.data)
        this.setState({ person: response.data })
    })
    .catch(error => {
        this.setState({ errorMessage: error.toString() });
        console.error('There was an error!', error);
    });
};

export default getPerson