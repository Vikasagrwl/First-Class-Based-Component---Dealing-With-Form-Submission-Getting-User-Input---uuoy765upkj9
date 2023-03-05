import React from 'react'
import '../styles/App.css';

class App extends React.Component {
    constructor(){
        super();
        this.name="John Doe"
        this.age="34"
        this.enrollmentNo="12345678"
    }
    render(){
        return(
            <div>
                <h1>Hello, my name is {this.name} </h1>
                <p>I am {this.age} years old and my enrollment no is {this.enrollmentNo}</p>
            </div>
        )
    }
}


export default App;
