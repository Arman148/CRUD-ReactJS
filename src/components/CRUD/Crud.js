import React, { Component } from 'react'
import './Crud.css';

class Crud extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          password: "",
          email: "",
          poster: {
              email: "",
              password: "",
          },
          posts: [],
        };
    }

    getInput = (e, inputName) => {
        this.setState({ [`${inputName}`]: e.target.value, });        
        this.state.poster[`${inputName}`] = e.target.value;        
    };
    
    click = () => {
        this.state.posts.push(this.state.poster);
        console.log("clicked");
        console.log(this.state);
    }
    render() {
        return(
            <div className="Login" >
                <div className="field" >
                    <input name="email" placeholder="Email" type="text" onChange={e => { this.getInput(e, "email"); }} ></input>
                    <input name="password" placeholder="Password" type="text" onChange={e => { this.getInput(e, "password"); }} ></input>
                    <button onClick={this.click} >buttton</button>
                </div>
            </div>
        )
    }
}

export default Crud;