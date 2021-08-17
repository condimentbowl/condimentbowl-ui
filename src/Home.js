import React, { Component } from "react";
import conPic from './Home/league_home.jpg';

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Welcome</h2>
        <p>Hold your pants because this is going to be lit.</p>
        <div>
             <img src={conPic} alt="Mustards vs Ketchups" />        
        </div> 
        <p>this is a test to see if mike knows how to do website stuff</p>
      </div>
    );
  }
}
 
export default Home;