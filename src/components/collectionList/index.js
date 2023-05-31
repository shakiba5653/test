import './style.css'
export default function CollectionList({listName}){
    function renderFactory(){
        return listName.map(function({image , title} , index){
            return(
                <li key={index}><a href="#">
                    <img src={image}/>
                    <p>{title}</p>
                </a></li>
            )
        })
    }
    return(
        <ul className="collectionUl">{renderFactory()}</ul>
    )
}