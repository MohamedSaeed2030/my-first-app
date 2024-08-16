// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import './MyComponentStyle.css'; 
import React, { useState } from 'react';
import './App.css';
import MyButton from './MyBotton';
import Input from './Input';
import MyForm from './MyForm';


function App() {
  const [count, setCount] = useState(0);

  return (


    
    <div className="App">
      <header className="App-header">
        
<MyForm></MyForm>


<hr/>
{/* 
        <MyButton></MyButton>

<hr></hr>
    <Input></Input>    */}



{/*         
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button> */}
      </header>
    </div>
  );
}

export default App;
