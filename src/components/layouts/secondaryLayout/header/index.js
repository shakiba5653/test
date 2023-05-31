import './style.css'
import Exit from './exit'
import Search from './search'
import KidLogo from './kidLogo'
import '../../../../global.css'
export default function Header(){
    return(
        <div id="headerParts" className='secondHeader'>
            <div className="containerFull">
                <div className='right'>
                    <KidLogo/>
                </div>
                <div className='left'>
                    <Search/>
                <Exit/>
                </div>
            </div>
        </div>
    )
}