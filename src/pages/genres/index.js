import axios from "axios";
import { Fragment , useEffect ,useState } from "react";
import { Link } from "react-router-dom";

export default function Genres(){
    const [loading , setloading] = useState(false);
    const [genres , setGenres] = useState([])
    useEffect(function(){
        getApi();
    },[])
    async function getApi(){
        try{
            setloading(true)
            const response = await axios.get("https://moviesapi.ir/api/v1/genres");
            setGenres(response.data);
            setloading(false);
        }catch(e){
            setloading(false);
        }
    }
    function renderFarm(){
        return genres.map(function(genre){
            const { id ,name } = genre;
            return(
                <li key = {id}>
                    <Link to ="">
                    <h5>{name}</h5>
                    </Link>
                   
                </li>
            )
        })
    }
return(
    <Fragment>
        <ul>{renderFarm()}</ul>
    </Fragment>
)
    }
   