import { Fragment } from "react";
import CircleIcons from "../../components/circleIcons";
import SecondaryLayout from "../../components/layouts/secondaryLayout";
import { circleAnimation , kidLatest , kidNamavaDub, kidUpdatedSeries} from "../../components/data";
import changeTitle from "../../utils/changeTitle";
import { useEffect } from "react";
import MediumMovieList from "../../components/mediumMovieList";

export default function KidsPage(){
    useEffect(function(){
        changeTitle("کودکان")
    })
    useEffect(function(){
        document.body.classList.add("whiteBg")
    })
    return(
        <Fragment>
            <SecondaryLayout/>
            <div className="containerFull">
                <CircleIcons listName={circleAnimation}/>
                <MediumMovieList listName={kidLatest} title="تازه‌های کودک"/>
                <MediumMovieList listName={kidUpdatedSeries} title="سریال‌های به روز شده‌ی کودک"/>
                <MediumMovieList listName={kidNamavaDub} title="دوبله نماوا"/>
            </div>
        </Fragment>
    )

}