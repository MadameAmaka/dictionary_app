import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";
export default function Dictionary(props){
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let[loaded, setLoaded] = useState(false);
    let[photos, setPhotos] = useState(null);


    function handleResponse(response){
        setResults (response.data);
    }

    function handleImgResponse(response){
        console.log(response.data.photos)
        setPhotos(response.data.photos);
    }

    function search(){
      let apiKey = "2f43379oac5f7ffe8tde5aff442f0cdb";
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);
        
        let imgApiKey = "2f43379oac5f7ffe8tde5aff442f0cdb"
        let imgApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imgApiKey}`;

        axios.get(imgApiUrl).then(handleImgResponse);
    }

    function handleSubmit(event){
        event.preventDefault();
        search();
    }
    
    function handleKeywordChange(event){
        setKeyword(event.target.value)

    }

    function load(){
        setLoaded(true);
        search();
    }

    if (loaded){
       return (
        <div className="Dictionary">
            <section>
                <h1>What word do you want to search for?</h1>
            <form onSubmit={handleSubmit}> 
                <input type="Search" onChange={handleKeywordChange} defaultValue={props.defaultKeyword}/>
            </form> 
            <div className="hint">
                (suggested words: sunset, rainfall, market...)
                </div></section>
            <Results results={results}/>
            <Photos photos={photos}/>
           
        </div>
        )
        ; 
    }
    else{
        load();
        return "loading";
    }
    
}