import React from "react";


// function Bioinfo(props){
//     return(
//         <div>
//             <h1>Name:{props.name} </h1>
//             <h2>Age:{props.age} </h2>
        
//         </div>
//     )
// }


// aug-18 destructing
function Bioinfo({name}){
    return(
         <div>
             {/* <h1>Name:{name} </h1>
             <h2>Age:{age} </h2> */}

             <h1 className="namecard">Name:{name}</h1>
        
         </div>
    )
}

export default Bioinfo