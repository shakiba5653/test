import { Fragment, useState } from 'react'
import axios from 'axios';

import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function SingleMovie(){
       const {id} = useParams();
       const [movie , setMovie] = useState({});
       const navigate = useNavigate();
       useEffect(function(){
        axios.get(`https://moviesapi.ir/api/v1/movies/${id}`)
        .then(function(response){
        setMovie(response.data)
        })
        .catch(function (error){
            navigate("/");
        });
       },{});
    return(
        <Fragment>
            <h2>{movie.title}</h2>
           <img src={movie.poster}/>
           <p>{movie.actors}</p>
        </Fragment>
    )
}