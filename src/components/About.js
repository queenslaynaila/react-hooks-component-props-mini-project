import React from "react";

function About({URL="https://via.placeholder.com/215",About}){
    return(
        <aside>
            <img src={URL} alt="blog logo"></img>
             <p>{About}</p>
        </aside>
    )
}

export default About