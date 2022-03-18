import React, { useEffect, useState, useRef } from "react";
import "./App.css"
 function App() {
  const [count, setCount] = useState(0);

  const prevCount = useRef();
  useEffect(() => {
    prevCount.current = count;
  });

  
  return (
    <div className="App">
      <h1>Counter Task</h1>
      <hr></hr>
      <h2>
      Current value: {count}</h2> <h2>Previous value: {prevCount.current}</h2>
      <button onClick={() => setCount((count) => count + 1)}>
       
        <h1>Update</h1>
      </button>
      
    </div>
  );
}

export default App






































// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(props) {
//     super(props)
  
//     this.state = {count:0
//     }

//   }

//   handleclick=()=>{
// this.setState(({count})=>({
//   count:count+1
// }))
//   };

//   handleclick2=()=>{
//     this.setState(({count})=>({
//       count:count-1
//     }))
//       };

//   render() {
//     return (
//       <div>
//         <h1>value is:{this.state.count}
//         </h1>
//         <button onClick={this.handleclick}>Increment</button>
//         <button onClick={this.handleclick2}>Decrement</button>
        
//         </div>
//     )
//   }
// }
