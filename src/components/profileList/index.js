import { Fragment } from 'react'
import './style.css'
export default function ProfileList({listName , title}){
    function renderFactory(){
        return listName.map(function({image , name} , index){
            return(
                <li key={index}><a href="#">
                    <img className='profilePhoto' src={image}/>
                    <p>{name}</p>
                </a></li>
            )
        })
    }
    return(
        <Fragment>
            <h2>{title}</h2>
            <ul className='profileList'>{renderFactory()}</ul>
        </Fragment>
    )
}