// import { useState } from 'react';
// import './App.css';

// function App(props) {
//     const [inputText, setInputText] = useState("");
//     let inputHandler = (e) => {
   
//       var lowerCase = e.target.value.toLowerCase();
//       setInputText(lowerCase);
//     };
  

//   return (
//           <div>
//               <center>
//                   <h1>SEARCH:</h1>
  
//                   <label>
  
//                       <input type="text" name="name" placeholder="Search For"></input>
//                   </label>
//               </center>
//           </div>
//       );
      
     
//   }
  
//   export default App;
// import { useState } from "react";
// import {user,locations} from "./data.js";
// const getFilteredItems = (query, items) => {
//     if (!query) {
//       return items;
//     }
//     return items.filter((firstName) => firstName.name.includes(query));
//   };
  
//   export default function App() {
//     const [query, setQuery] = useState("");
  
//     const { tracks } = {user,locations};
//     const { items } = tracks;
//     // items looks like this: [{name: 'name1'}, {name: 'name2'}]
  
//     const filteredItems = getFilteredItems(query, items);
  
//     return (
//       <div className="App">
//         <label>Search</label>
//         <input type="text" onChange={(e) => setQuery(e.target.value)} />
//         <ul>
//           {filteredItems.map((value) => (
//             <h1 key={value.firstName}></h1>
//           ))}
//         </ul>
//       </div>
//     );
//   }
  
