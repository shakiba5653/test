import { Fragment, useState } from 'react'
import axios from 'axios';
import './style.css'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
export default function RegularMovieList({ title}){
    const  [movies , setmovies] =useState([]);
    useEffect(function(){
         getApi()
    },[])
   
    function getApi(){
        axios.get("https://moviesapi.ir/api/v1/movies").then(function(response){
        setmovies(response.data.data);
        });
    }
    function renderFactory(){
        return movies.map(function(movie , index){
            const {poster ,title ,id} =movie
            return(
                <li className="movieBox" key={index}>
                     <Link to={`/movie/${id}`}> 
                    {/* <div className='imageContent'> */}
                        <img src={poster}/>
                        <h2>{title}</h2>
                       
                        {/* <div className='content'>
                            <p>{type} {year}</p>
                            <p>{rating}</p>
                            <p>{subtitle}</p>
                            <p>{imdb}</p>
                            <img className="playIcon" src={play}/>
                        </div>
                    </div>
                    <h3 className="title">{title}</h3>
                    <p className="update">{update}</p> */}
                    </Link>
                </li>
            )
        })
    }
    return(
        <Fragment>
            <h2>{title}</h2>
            <ul className='movieBoxes'>{renderFactory()}</ul>
        </Fragment>
    )
}