import { Fragment } from 'react'
import './style.css'

export default function MediumMovieList({listName , title}){
    function renderFactory(){
        return listName.map(function( { image , title , type , year , rating , imdb , subtitle , play , update } , index ){
            return(
                <li className="movieBox medium" key={index}><a href="#">
                    <div className='imageContent'>
                        <img src={image}/>
                        <div className='content'>
                            <p>{type} {year}</p>
                            <p>{rating}</p>
                            <p>{subtitle}</p>
                            <p>{imdb}</p>
                            <img className="playIcon medium" src={play}/>
                        </div>
                    </div>
                    <h3 className="title medium">{title}</h3>
                    <p className="update">{update}</p>
                </a></li>
            )
        })
    }
    return(
        <Fragment>
            <h2 className='mediumListTitle'>{title}</h2>
            <ul className='movieBoxes'>{renderFactory()}</ul>
        </Fragment>
    )
}