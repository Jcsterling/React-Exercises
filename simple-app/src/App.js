import React, { Component } from 'react';
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
import ChangeStateConstructor from './ChangeStateConstrutor.js';
import ChangeTextClass from './ChangeTextClass.js'

class App extends Component {
   


//   render() {
//     return (
//       <div>
//         <HelloWorld />   
//      </div>
//     );
//   }
// }

//CREATING TRAINER AVAILABILITY PAGE
//   render(){
//         return(
//             <div>
//                 <div>
//                     <TrainerHeader /> 
//                 </div> 
//                 <TrainerTableName />
//                 <TrainerTable />
//             </div>
//         )

//     }
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

render() {
    return (
        <div>
            <div>
            < ChangeStateConstructor />
            </div>
        </div>
    );
}
}




export default App;
