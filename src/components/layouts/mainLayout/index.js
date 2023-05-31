import { Fragment } from "react";
import Header from "./header";
import Footer from "./footer";
export default function MainLayout({children}){
    return(
        <Fragment>
            <Header/>
            {children}
            <Footer/>
        </Fragment>
    )
}