import React, { useState } from "react";

export default function ProductApi() {

    const[moviedata,setmoviedata]=useState([])

    const handlefetch=async()=>{
        let res=await fetch("https://fooapi.com/api/movies")
        let luffy =await res.json()
        setmoviedata(luffy.data)
        


    }
    return(
        
        <div className="movies">
        
            {/* <button onClick={handlefetch}>Call Api</button> */}
            
            {moviedata.map((da)=>(
                <div className="movie">
                    <img src={da.poster}/>
                    <h1>{da.title}</h1>
                    <h3>{da.imdbRating}</h3>

                </div>    

            ))}
        </div>
    )

}