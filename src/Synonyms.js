import React from "react";
import "./Synonyms.css";

export default function Synonyms(props){
    if (props.synonyms){
        return (<div>

            <ul className="Synonyms">
            
            {props.synonyms.map(function(synonyms, index){
            return(
                <li key={index}>
                    {synonyms}
                </li>);
    })}
    </ul> 
    </div>);
    }
    else{
        return null;
    }
}