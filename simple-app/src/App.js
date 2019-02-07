import React, { Component } from 'react';
import './App.css';
//********************************************************** */
import HelloWorld from './helloWorld.js';
//********************************************************** */
import TrainerHeader from './TrainerHeader';
import TrainerTableName from './TrainerTableName';
import TrainerTable from './TrainerTable';
//********************************************************** */
import PropExample from './PropExample.js';
import StateExample from './StateExample.js';
import PropAndStateExample from './PropAndStateExample.js';
//********************************************************** */
import TrainerDataConstructor from './TrainerDataConstructor.js';
//********************************************************** */
import ChangeStateConstructor from './ChangeStateConstrutor.js';
import ChangeTextClass from './ChangeTextClass.js';
//********************************************************** */
import TrainerAvailability from './TrainerAvailability.js'
import BasicExample from './Routing.js'
//********************************************************** */

class App extends Component {

     
//   render() {
//     return (
//       <div>
//         <HelloWorld />   
//      </div>
//     );
//   }
// }

// CREATING TRAINER AVAILABILITY PAGE
//   render(){
//         return(
//             <div>
//                 <TrainerAvailability />
//             </div>
//         )
//     }
// }

//USING A MAP TO CREATE THE TRAINER TABLE FOR THE TRAINER AVAILABILITY PAGE
// render(){
//     return(
//         <div>
//             <TrainerDataConstructor />
//         </div>
//     );
// }
// }

// render(){
//     return(
//         <div>
//             <Routing />
//         </div>
//     );
// }
// }


// USING PROPS
// render() {
//     return (
//       <div>
//         <PropExample sampleText="Hello world!"/>   
//      </div>
//     );
//   }
// }

//USING STATES
// render() {
//     return (
//         <div>
//             < StateExample />
//         </div>
//     );
// }
// }
 
//USING PROPS AND STATES. COMPONENTS CAN RECIEVE STATES THROUGH PROPSS
// render() {
//     return (
//         <div>
//             < PropAndStateExample />
//         </div>
//     );
// }
// }


// CHANGING STATES using a button
// render() {
//     return (
//         <div>
//             <div>
//             < ChangeStateConstructor />
//             </div>
//         </div>
//     );
// }
// }

// Routing
 render(){
        return(
            <div>
                <BasicExample />
            </div>
        )
    }
}




export default App;
