// import React from 'react';
// import Heading from './Heading';
// import List from './List';
// import Para from './Para';

// function App(){
//   return(
//       <>
//         <Heading/>
//         <Para/>
//         <List/>
//         <Para/>
//       </>
//   );
// }export default App;

// //Lecture 20 Rewrite lecture 18 (Rewrite our React Project into Components in React JS)
// import React from "react";
// import "./index.css";

// function App(){
//   let currDate = new Date(2023, 14, 4);
//   currDate = currDate.getHours();
//   let greeting = "";
//   const cssStyle = {};
  
//   if (currDate >= 1 && currDate < 12) {
//       greeting = "Good Morning";
//       cssStyle.color = "green";
//   } else if (currDate >= 12 && currDate < 20) {
//       greeting = "Good Afternoon";
//       cssStyle.color = "orange";
//   } else {
//       greeting = "Good Night";
//       cssStyle.color = "black";
//   }

//   return(
//     <>
//        <div>
//             <h1>
//                 hello sir <span style={cssStyle}>{greeting}</span>
//             </h1>
//         </div>
//     </>
//   );
// }
// export default App;


// Lecture -21 ES6 Modules Import Export in React JS
const youtuber = "Mohit Yadav";
const favprog = "React JS";
function myName(){
    let name = 'Mohit';
    return name;
}
function myNames(){
    let names = 'Mohit Yadav';
    return names;
}
export default youtuber;
export {favprog,myName,myNames};