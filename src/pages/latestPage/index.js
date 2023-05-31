import MainLayout from "../../components/layouts/mainLayout";
import { updatedSeries , namavaSeries , trueStory} from "../../components/data";
import RegularMovieList from "../../components/regularMovieList";
import changeTitle from "../../utils/changeTitle";
import { useEffect } from "react";

export default function LatestPage(){
    useEffect(function(){
        document.body.classList.remove("whiteBg")
    })
    useEffect(function(){
        changeTitle("تازه‌ها")
    })
    return(
        <MainLayout>
            <div className="containerFull">
                <RegularMovieList listName={updatedSeries} title="سریال‌های به‌ روز شده"/>
                <RegularMovieList listName={namavaSeries} title="تازه ترین سریال‌ها"/>
                <RegularMovieList listName={trueStory} title="تازه ترین فیلم‌ها"/>
            </div>
        </MainLayout>
    )
}