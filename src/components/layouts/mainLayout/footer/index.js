import AboutUs from "./about";
import MenuBar from "./menuBar";
import NamavaApp from "./namavaApp";
import SocialMedia from "./social";

export default function Footer(){
    return(
        <div className="footer">
            <MenuBar/>
            <NamavaApp/>
            <AboutUs/>
            <SocialMedia/>
        </div>
    )
}