import React from 'react';
import axios from 'axios';

class CreatePerson extends React.Component {

    constructor () {
        super()
        this.state = {
            cities: [],
            nameErrorMessage: '',
            phoneErrorMessage: '',
            cityErrorMessage: '',

            name: '',
            phoneNumber: '',
            cityId: 0,
        }
    }

    componentDidMount() {
        this.getAllCities()
    }

    getAllCities = () => {
        axios.get('https://localhost:5001/api/React/cities')
        .then(response => {
            JSON.stringify(response.data)
            console.log(response.data)
            this.setState({ cities: response.data })
        })
        .catch(error => {
            this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
        });
    }

    handleSelect = e => {
        this.setState({
          city : parseInt(e.target.value)
    })};
      
    validate = () => {
        let nameError = "";
        let phoneError = "";
        let cityError = "";

        if(this.state.name === '') {
            nameError = "Name is required"
        }

        if(nameError) {
            this.setState({ nameErrorMessage: nameError });
            console.log(nameError)
            return false;
        }

        if(this.state.phoneNumber === '') {
            phoneError = "Phone Number is required"
        }


        if(phoneError) {
            this.setState({ phoneErrorMessage: phoneError });
            return false;
        }

        if(this.state.cityId === 0) {
            cityError = "City is required";
        }

        if(cityError) {
            this.setState({ cityErrorMessage: cityError });
            return false;
        }

        return true;
    }

    onNameChange = e => {
        this.setState({
          name: e.target.value
        });

    }

    onPhoneNumberChange = e => {
        this.setState({
            phoneNumber: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault()
        const isValid = this.validate();
        if(isValid) {
            const data = {
                Name: this.state.name,
                PhoneNumber: this.state.phoneNumber,
                CityId: this.state.city
            };

            console.log(data);
            

            axios.post("https://localhost:5001/api/React/create", JSON.stringify(data), {headers: {"Content-Type": "application/json"}})
                .then(response => {
                        console.log(response)
                })
                .catch(error => console.log(error));
        }
    };

    render() {
        const {cities } = this.state;
        return (
            <form className="post" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.onNameChange}/>
                </div>

                {this.state.nameErrorMessage ? (
                <div className="alert alert-danger">
                    <p>{ this.state.nameErrorMessage}</p>
                </div>
                ) : null}

                <div className="form-group">
                    <label>Phonenumber</label>
                    <input type="text" className="form-control" id="phoneNumber" value={this.state.phoneNumber} onChange={this.onPhoneNumberChange}/>
                </div>

                {this.state.phoneErrorMessage ? (
                    <div className="alert alert-danger">
                        <p>{ this.state.phoneErrorMessage}</p>
                    </div>
                    ) : null}

                <select className="form-control" value={this.state.city} onChange={this.handleSelect}>
                    <option>Select City</option>
                {
                  cities.map(city => (
                      <option value={city.id}>{city.name} - {city.country.name}</option> 
                  ))
                }
              </select>
              {this.state.cityErrorMessage ? (
                <div className="alert alert-danger">
                    <p>{ this.state.cityErrorMessage}</p>
                </div>
                ) : null}
              <button type="submit" className="btn btn-primary">Submit</button>
     
            </form>
        )
    }  
}

export default CreatePerson