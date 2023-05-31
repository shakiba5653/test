import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Search(){
    const [result , setResult] = useState([]);
    const [loading , setloading] = useState(false);
    function onSearch(e){
        setloading(true)
        console.log(e.target.value);
        const value = e.target.value;
        axios.get("https://moviesapi.ir/api/v1/movies" , { params : { q : value}})
        .then(function(response){
            console.log(response.data);
            setResult(response.data.data);
            setloading(false);
        }).catch(function(error){
            setloading(false);
        });
    }
    function renderFram(){
        return result.map(function(movie , i ){
            const {id , poster , title} = movie;
            return(
                <li key={id}>
                    <Link to={`/movie/${id}`}>
                    <img src={poster} />
                    <h2>{title}</h2>
                    </Link>

                </li>

            )
        })

    }
    return(
        <div className="search">
            <input onChange={onSearch} placeholder="name film ra jostejo konid"/>
            <div className="result">
                {loading === true ? "loading..." :  <ul> {renderFram()}</ul>}
              
            </div>
        </div>
        
    )
}