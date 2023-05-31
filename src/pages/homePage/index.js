import CollectionList from "../../components/collectionList";
import { collection1, liveStream, special, updatedSeries , stars} from "../../components/data";
import MainLayout from "../../components/layouts/mainLayout";
import RegularMovieList from "../../components/regularMovieList";
import LargeMovieList from "../../components/largeMovieList";
import ProfileList from "../../components/profileList";
import changeTitle from "../../utils/changeTitle";
import { useEffect } from "react";

import App from "../../components/swiper";

export default function HomePage(){
    useEffect(function(){
        document.body.classList.remove("whiteBg")
    })
    useEffect(function(){
        changeTitle("خانه")
    })
    return(
        <MainLayout>
            <App></App>
            <div className="containerFull">
                <RegularMovieList  title="ویژه"/>
                <LargeMovieList  title="پخش زنده"/>
                <CollectionList listName={collection1}/>
                <RegularMovieList listName={updatedSeries} title="سریال‌های به‌روز شده"/>
                <ProfileList listName={stars} title="ستارگان"/>
            </div>
        </MainLayout>
    )
}