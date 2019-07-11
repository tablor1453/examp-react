import React, {Component} from 'react';
import './App.css';
import HocComponent from './component/HocComponent';
import HoverCounter from './component/HoverCounter';


const formValid = formErrors => {
  let valid = true;

  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  return valid;
};


const emailRegex =  RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: null,
      lastname: null,
      email: null,
      phone: null,
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        phone: ""
      }
    };

  }

  handleSubmit = e => {
    e.preventDefault();
    console.log('submit uy');

    if(formValid(this.state.formErrors)) {
      console.log(
        `Submitting uy
        First Name: ${this.state.firstName}
        Last Name: ${this.state.lastName}
        First Email: ${this.state.email}
        First Contact: ${this.state.phone}      
      `);
    } else {
      console.error('Form Invalid - display error' )
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = this.state.formErrors;

    console.log("Name: ", name)
    console.log("value: ", value);

    switch (name) {
      case 'firstName':
        formErrors.firstName = 
        value.length < 3 && value.length > 0
        ? 'minimum 3 character'
        : "";
      break;
      case 'lastName':
        formErrors.lastName = 
        value.length < 3 && value.length > 0
        ? 'minimum 3 character'
        : "";
      break;
      case 'email':
        formErrors.email = 
        emailRegex.test(value) && value.length > 0
        ? ''
        : 'Invalid email';
      break;
      case 'phone':
        formErrors.phone = 
        value.length < 3 && value.length > 0
        //value.length < 6 && !isNaN(value.name)
        ? 'minimum 6 character and numberic'
        : ""; 
      break;
      default:
      break;
    }

    this.setState({formErrors, [name]: value}, () => console.log(this.state));

  }

  
  render() {
    const { formErrors } = this.state;

    return (
      <div className="wrapper">
        <div className="form-wrapper"> 
          <h1>Create Contact</h1>
          
          <form onSubmit={this.handleSubmit} noValidate>
            {/* <div className="radioButton">
              <input
                className=""
                type="radio" 
                name="data-user" 
                value="company"
                id="radio-company"
                //checked={this.state.name === "company"}
                //onChange={() => this.handleCompany()}
              />Company
            </div> */}
            <div className="firstName">
              <label htmlFor="firstName">First Name</label>
              <input 
                type="text"
                className=""
                placeholder="First Name"
                name="firstName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.firstName.length > 0 && (
                <span className="errorMessage">{formErrors.firstName}</span>
              )}
            </div>
            <div className="lastName"> 
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                className=""
                placeholder="Last Name"
                name="lastName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.lastName.length > 0 && (
                <span className="errorMessage">{formErrors.lastName}</span>
              )}
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className=""
                placeholder="Email"
                name="email"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>
            <div className="contact">
              <label htmlFor="contact">Phone Number</label>
              <input
                type="text"
                className=""
                placeholder="Phone Number"
                name="phone"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.phone.length > 0 && (
                <span className="errorMessage">{formErrors.phone}</span>
              )}
            </div>
            <div className="createContact">
              <button type="submit">Create Contact</button>
            </div>
          </form>
  
        </div>
        <div>
          <HocComponent />
          <HoverCounter />     
        </div>
      </div> 
    );
  }
  
}

export default App;
