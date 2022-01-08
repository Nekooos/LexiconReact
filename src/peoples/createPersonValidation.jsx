import react from "react";

const CreatePersonValidation = (props) => {

  const cities = this.props.cities
  
  return (
    <form className="post" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.onNameChange}/>
                </div>
                <div className="form-group">
                    <label>Phonenumber</label>
                    <input type="text" className="form-control" id="phoneNumber" value={this.state.phoneNumber} onChange={this.onPhoneNumberChange}/>
                </div>
                <div className="alert alert-danger alert-dismissible fade show">

                </div>
                <select className="form-control" value={this.state.city} onChange={this.handleSelect}>
                {
                  cities.map(city => (
                      <option value={city.id}>{city.name} - {city.country.name}</option> 
                  ))
                }
              </select>
              <button type="submit" className="btn btn-primary">Submit</button>
     
            </form>
  )
}