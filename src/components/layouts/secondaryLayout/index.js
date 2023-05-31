import { Fragment } from "react";
import Header from "./header";

export default function({children}){
    return(
        <Fragment>
            <Header/>
            {children}
        </Fragment>
    )
}