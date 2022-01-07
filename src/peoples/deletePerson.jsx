import axios from "axios";

const deletePerson = (id) => {

    console.log(id);
    const url = `https://localhost:5001/api/React/delete/${id}`;
    axios.delete(url)
        .then(response => console.log(response))
        .catch(error => console.log(error));
}

export default deletePerson