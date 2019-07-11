import React, {Component} from 'react';
import List from './List';




class DataComponent extends Component {

    // state = {
    //     name: ''
    // }    

    // handleCompany = () => {
    //     console.log(this.state.name);
    // }
    
    // handlePerson = () => {
    //     console.log(this.state.name);
    // }

    // handleChange = (_event) => {
    //     this.setState({
    //         name: _event.target.value
    //     })

    //     console.log(this.state.name);
    // }

    // handelSubmit = (_event) => {
        
    //     this.setState({
    //         name: this.state.name
    //     })

    //     console.log(this.state.name);
    // }

    constructor(props) {
        super(props)

        this.state = {
            todoItem: '',
            items: []
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({
            items: [...this.state.items, this.state.todoItem],
            todoItem: ''
        })
    }

    handleChange = (event) => {

        //valueTodo = event.target.value

        if(!isNaN(event.target.value)) {
            alert('harus karakter')
        }else{
            this.setState({
                todoItem: event.target.value
            })
            
            //console.log(this.state.todoItem)
        }

       
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.todoItem} onChange={this.handleChange}/>
                    <button>add</button>
                </form>

                <List items={this.state.items} />
            </div>

            // <div>
            //     <form onSubmit={this.handleSubmit}>
            //     <p>
            //         <label>
            //             <input 
            //                 type="radio" 
            //                 name="data-user" 
            //                 value="person" 
            //                 id="radio-person"
            //                 checked={this.state.name === "person"}
            //                 onChange={() => this.handlePerson()}
            //             />
            //             Person
            //         </label>
            //     </p>
            //     <p>
            //         <label>
            //             <input 
            //                 type="radio" 
            //                 name="data-user" 
            //                 value="company"
            //                 id="radio-company"
            //                 checked={this.state.name === "company"}
            //                 onChange={() => this.handleCompany()}
            //             />Company
            //         </label>
            //     </p>
                

            //     <p>Name</p>
            //     {/* <input type="text" name="name" value={this.state.name} onChange={() => this.handleChange}/> */}
            //     <p>Last Name</p>
            //     <input type="text" name="last-name"/>
            //     <p>Address</p>
            //     <input type="text" name="address"/>
            //     <p>Phone Number</p>
            //     <input type="text" name="phone"/>
            //     <p>Email</p>
            //     <input type="text" name="email"/>
            //     <p>
            //         <button onClick={() => this.handelSubmit()}>Submit</button> 
            //         <button>Reset</button>
            //     </p>
            //     </form>
            // </div>
        );
    }
}

export default DataComponent;