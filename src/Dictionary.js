import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css";
export default function Dictionary(){
    let [keyword, setKeyword] = useState("");


    function handleResponse(response){
        
    }

    function search(event){
        event.preventDefault();
        alert(`Searching for ${keyword}`);

        let apiKey = "2f43379oac5f7ffe8tde5aff442f0cdb";
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);

    }
    
    function handleKeywordChange(event){
        setKeyword(event.target.value)

    }
    return (
        <div className="Dictionary">
            <form onSubmit={search}> 
                <input type="Search" onChange={handleKeywordChange}/>
            </form>
        </div>)
        ;
}