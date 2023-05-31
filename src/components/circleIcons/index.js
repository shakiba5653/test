import './style.css'
export default function CircleIcons({listName}){
    function renderFactory(){
        return listName.map(function({image} , index){
            return(
                <li key={index}><a href="#">
                    <img src={image}/>
                </a></li>
            )
        })
    }
    return(
        <ul className="circleIcons">{renderFactory()}</ul>
    )
}