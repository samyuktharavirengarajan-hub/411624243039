import MyCounter from './Counter';
import NavBar from './NavBar';
import {Add, Subtract, Multiply, Divide, NotFound} from './Math'
import {Routes, Route} from 'react-router-dom'
function App() {
  return (
      <>
       <NavBar/>
      <Routes>
        <Route path = "/counter" element = {<MyCounter/>}/>
        <Route path = "/add" element = {<Add/>}/>
        <Route path = "/subtract" element = {<Subtract/>}/>
        <Route path = "/multiply" element = {<Multiply/>}/>
        <Route path = "/divide" element = {<Divide/>}/>
        <Route path = "*" element = {<NotFound/>}/>
      </Routes>
      </>
  );  
}
export default App;


// import MyCounter from './Counter';
// import {Add, Subtract, Multiply, Divide, NotFound} from './Math'
// import {Routes, Route} from 'react-router-dom'
// function App() {
//   return (
//       <>
//       <Routes>
//         <Route path = "/counter" element = {<MyCounter/>}/>
//         <Route path = "/add" element = {<Add/>}/>
//         <Route path = "/subtract" element = {<Subtract/>}/>
//         <Route path = "/multiply" element = {<Multiply/>}/>
//         <Route path = "/divide" element = {<Divide/>}/>
//         <Route path = "*" element = {<NotFound/>}/>
//       </Routes>
//       </>
//   );  
// }
// export default App;

// import Counter from './Counter';
// import {Add, Subtract, Multiply, Divide} from './Math'
// function App() {
//   return (
//     <>
//     <Counter/>
//     <Add/>
//     <Subtract/>
//     <Multiply/>
//     <Divide/>
//     </>
//   );
// }
// export default App;

// import BGcolor from "./BGcolor";
// function App(){
//   return(
//     <BGcolor/>
//   )
// }
// export default App;

// import Counter from './Counter';
// function App() {
//   return (
//     <Counter/>
//   );
// }
// export default App;

// const fruits = ["Apple", "Banana", "Mango"];
// function App(){
//   return(
//     <div>
//       {fruits.map((fruit) => {
//           return <p>{fruit}</p>;
//         })}
//     </div>
//   )
// }
// export default App;

// import Page from './Pages/Page.js';
// function App(){
//   return(
//     <div>
//       <Page/>
//     </div>
//   )
// }
// export default App;

// import Parent from './Parent.js';
// function App(){
//   return(
//     <div>
//       <Parent/>
//     </div>
//   )
// }
// export default App;

// import First23 from './First23.js';
// import Second23 from './Second23.js';
// function App(){
//   return(
//     <div>
//     <First23/>
//     <Second23/>
//     </div>
//   )
// }
// export default App;

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
