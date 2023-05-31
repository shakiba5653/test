import BuyParticipation from './buyPar'
import Menu from './headerMenu'
import Search from './search'
import SignUp from './signUp'
import './style.css' 
export default function Header(){
    return(
        <div id="headerParts">
            <div className="containerFull">
            <div className='right'>
                <img src="namavaHeaderLogo.svg"/>
                <Menu/>
            </div>
            <div className="left">
                <Search/>
                <BuyParticipation/>
                <SignUp/>
            </div>
            </div>
        </div>
    )
}