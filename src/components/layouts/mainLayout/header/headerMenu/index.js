import './style.css'
import {Link} from 'react-router-dom'
export default function Menu(){
    return(
        <ul className="menu">
            <li><Link to="/">خانه</Link></li>
            <li><Link to="/movie">فیلم‌ها</Link></li>
            <li><Link to="/series">سریال‌ها</Link></li>
            <li><Link to="/category">دسته بندی</Link></li>
            <li><Link to="/latest">تازه‌ها</Link></li>
            <li><Link to="/kids">کودکان</Link></li>
        </ul>
    )
}