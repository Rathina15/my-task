// import {user,locations} from 'react'
// import { useState } from "react";


//         function List() {
//             const[searchTerm,setSearchTerm]=useState("");
//             return (   
//           {user.filter((val)=>{ 
//                 if(searchTerm ==""){
//                   return val
//                }else if(val.firstName.toLowerCase().includes(searchTerm.toLowerCase())){
//                     return val
//                 }
//             user.map((item) => (
               
//                 <li>{item.firstName},<br></br>
//                {item.lastName},<br></br>
//                {item.date},<br></br>
//               {props.value} 
             
                
//                 </li> 
                
//            ))}
            
//  export default List; 



// // function List(props) {
// //     return (
// //         <ul>
            
            // {user.map((item) => (
            //     <li>
            //     {item.firstName},<br></br>
            //     {item.lastName}<br></br>
            //     {item.date}
           
// //                 </li>
               
// //             ))}

// //             {locations.map((value)=>(
// //                 <li>
// //                     {value.locationName},<br></br>
// //                 </li>
// //             ))}
// //         </ul>
// //     )
// // }

// // export default List;

import { React, useState } from 'react'
import {user,locations} from "./data.js"
function List(props) {
  
// export default List;
// const filteredData = user.filter((el) => {
//     //if no input the return the original
//     if (props.input === '') {
//         return el;
//     }
//     //return the item which contains the user input
//     else {
//         return el.text.toLowerCase().includes(props.input)
//     }
// })
return (
   
            <center>
        
            {user.map((item) => (
                <li>
                {item.firstName},<br></br>
                {item.lastName}<br></br>
                {item.date}
           
                </li>
               
            ))}

            {locations.map((value)=>(
                <li>
                    {value.locationName},<br></br>
                </li>
            ))}
        
        </center>

   
)
}

export default List