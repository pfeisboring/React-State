import React, { Component} from 'react';
import './App.css';

class App extends Component {
  state = ({  
    Person : {  
      fullName: "Walid Boulima",
      bio: "hello",
      imgSrc: <img src="/cv.jpg" alt="Range Rover" width="100px"></img>,
      profession: "Etudiant",
    },
    shows: false,
  });

  componentDidMount() {
    console.log("hello from component did mount")
    setInterval(() => {
      console.log('The count begins');
    }, 1000);
  }

  componentDidUpdate() {
    console.log("hello from component did update")
  }
  
  componentWillUnmount() {
    console.log("hello from component did unmount")
  }

  showPerson = () => 
    this.setState({ shows: true }
    );

  render() {
    console.log("hello from render")
    return (
      <div>
        <div className="wrapper">  
        <button className="button"onClick={this.showPerson}>Show</button>
        </div>
        <ul>  
        {this.state.shows === true ? (
          <div> <h3>
             <li>{this.state.Person.fullName} </li>
             <li>{this.state.Person.bio} </li>
             <li>{this.state.Person.profession} </li>
             <li>{this.state.Person.imgSrc} </li>
             </h3>  
          </div> 
          
           ) : (
            
            <div>
                 <h3> Shows is False</h3>             
              </div>
          )} 
          </ul>
      </div>
    );
  }
}

export default App;
