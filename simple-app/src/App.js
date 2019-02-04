import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import HelloWorld from './helloWorld.js';
import TrainerHeader from './TrainerHeader';
import TrainerTableName from './TrainerTableName';
import TrainerTable from './TrainerTable';

class App extends Component {

//   render() {
//     return (
//       <div>
//         <HelloWorld />   
//      </div>
//     );
//   }
// }

  render(){
        return(
            <div>
                <TrainerHeader />  
                <TrainerTableName />
                <TrainerTable />
            </div>
        )

    }
}


export default App;
