// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   // <React.StrictMode>
//   //   <App />
//   // </React.StrictMode>
//   <h1>Hello World!!..</h1>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();



import React from 'react';
import ReactDOM from 'react-dom';
// ReactDOM.render('kya dikhana hai','kaha dikhana hai','callback function');
// ReactDOM.render(<h1>Hello World !!</h1> , document.getElementById('root'));


//Lecture -10
// ReactDOM.render(
//     <>
//     <h1>Mysterio Netflix Pick</h1>
//     <p>Here the list of my fav 5 Netflix Shows</p>
//     <ol>
//         <li>DARK</li>
//         <li>STRANGER THINGS</li>
//         <li>EXTRA CURRRICULAR</li>
//         <li>MY Holo Love</li>
//         <li>Mr Robot</li>
//     </ol>

//     </>,
//     document.getElementById('root')
// );


// // Lecture - 11
// const flname = "Mohit Yadav";
// ReactDOM.render(
//     <>
//         <h1>my name is {flname} </h1>
//         <p>my lucky number is {3+Math.random()}</p>
//     </>,
//     document.getElementById('root')
// );


// //Lecture - 12 ES6 Template Literals in JSX in ReactJS
// const fname = "Mohit";
// const lname = "Yadav";
// ReactDOM.render(
//     <>
//         <h1>{`my name is ${fname} ${lname}`} </h1>
//         <p>my lucky number is {3+Math.random()}</p>
//     </>,
//     document.getElementById('root')
// );


// //Lecture - 13 Display Current Date and Time in JSX in React JS
// const name = "Mohit";
// const currDate = new Date().toLocaleDateString();
// const currTime = new Date().toLocaleTimeString();
// ReactDOM.render(
//     <>
//         <h1>{`Hi there, my name is ${name}`} </h1>
//         <p>{`Currnet Date is ${currDate}`}</p>
//         <p>{`Currnet time is ${currTime}`}</p>
//     </>,
//     document.getElementById('root')
// );


// //Lecture - 14 JSX Attributes in ReactJS
// const name = "Mohit";
// const img1 = "https://picsum.photos/200/300";
// const img2 = "https://picsum.photos/250/300";
// const img3 = "https://picsum.photos/300/300";
// const img4 = "https://picsum.photos/350/300";
// const link = "http://youtube.com";
// ReactDOM.render(
//     <>
//         <h1 contentEditable>{`My name is ${name}`}</h1>
//         <img src = {img1} alt ="randomImages"/>
//         <img src = {img2} alt ="randomImages"/>
//         <img src = {img3} alt ="randomImages"/>
//         <a href = {link} target ="_blank"> <img src = {img4} alt ="randomImages"/> </a>
//     </>,
//     document.getElementById('root')
// )


// //Lecture 15 - CSS Styling & Importing CSS Files in React JS
// import './index.css'

// const name = "Mohit";
// const img1 = "https://picsum.photos/200/300";
// const img2 = "https://picsum.photos/250/300";
// const img3 = "https://picsum.photos/300/300";
// const img4 = "https://picsum.photos/350/300";
// const link = "http://youtube.com";

// const heading = {
//     color:"#fa9191",
//     textAlign:"center",
//     textTransform:'capitalize',
//     fontWeight:'bold',
//     textShadow:'0px 2px 8px #aba696',
//     margin:'50px 0px',
//     fontFamily:'"Varela Round", sans - serif',
// };

// ReactDOM.render(
//     <>
//         <h1 style={heading}>{`My name is ${name}`}</h1>
//         <div className='img_div'>
//             <img src={img1} alt="randomImages" />
//             <img src={img2} alt="randomImages" />
//             <img src={img3} alt="randomImages" />
//             <a href={link} target="_blank"> <img src={img4} alt="randomImages" /> </a>
//         </div>
//     </>,
//     document.getElementById('root')
// )


// // Lecture -18 Creating Simple Greeting Website using React JS 
// import "./index.css";
// let currDate = new Date(2023, 14, 4, 15);
// currDate = currDate.getHours();
// let greeting = "";
// const cssStyle = {};

// if (currDate >= 1 && currDate < 12) {
//     greeting = "Good Morning";
//     cssStyle.color = "green";
// } else if (currDate >= 12 && currDate < 20) {
//     greeting = "Good Afternoon";
//     cssStyle.color = "orange";
// } else {
//     greeting = "Good Night";
//     cssStyle.color = "black";
// }

// ReactDOM.render(
//     <>
//         <div>
//             <h1>
//                 hello sir <span style={cssStyle}>{greeting}</span>
//             </h1>
//         </div>
//     </>,
//     document.getElementById('root')
// );

// //Lecture - 19 React Components 
// import App from './App';
// ReactDOM.render(<App/>,document.getElementById('root'));


// // Lecture -20  Creating Simple Greeting Website using React JS 
// import App from './App';
// ReactDOM.render(<App/>,document.getElementById('root'));


// // Lecture -21 ES6 Modules Import Export in React JS
// import * as ques from './App';
// ReactDOM.render(
//     <>
//         <ol>
//             <li>Mohit</li>
//             <li> {ques.default}</li>
//             <li> {ques.favprog}</li>
//             <li> {ques.myName()}</li>
//             <li> {ques.myNames()}</li>
//         </ol>
//     </>, document.getElementById('root')
// );

//Lecture - 22 Create Simple Calculator App in reactJS.
import App from './App';
ReactDOM.render(<App/>,document.getElementById('root'));