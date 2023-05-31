import {category} from '../data'
import './style.css'
export default function Categories(){
    function renderFactoty(){
        return category.map(function({image , title} , index){
            return(
                <li key={index}><a href="#">
                    <img alt={title} src={image}/>
                    <h1>{title}</h1>
                </a></li>
            )
        })
    }
    return(
        <ul className="categories">{renderFactoty()}</ul>
    )
}