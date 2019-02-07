import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TrainerAvailability from './TrainerAvailability'


function BasicExample() {
  return (
    <Router>
        <div>
            LOGO | <Link to="/">Home</Link> | <Link to="/TrainerAvailability">Trainer Availability</Link> | <Link to="/TraineeContact">Trainee Contact</Link>
    
        <hr />

         <Route exact path="/" component={Home} /> 
        <Route path="/TrainerAvailability" component={TrainerAvailability} />
         <Route path="/TrainerContact" component={TraineeContact} /> 
      </div>
    </Router>
  );
}

function TrainerAvailability1() {
  return (
    <div>
      <h2>TrainerAvailability</h2>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>HOME</h2>
    </div>
  );
}

function TraineeContact() {
  return (
    <div>
      <h2>Trainee Contact</h2>
    </div>
  );
}


export default BasicExample;