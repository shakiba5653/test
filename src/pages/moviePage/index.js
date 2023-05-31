import RegularMovieList from '../../components/regularMovieList'
import { special, trueStory , namavaDub} from '../../components/data';
import MainLayout from '../../components/layouts/mainLayout';
import changeTitle from "../../utils/changeTitle";
import { useEffect } from 'react';

export default function MoviePage(){
    useEffect(function(){
        document.body.classList.remove("whiteBg")
    })
    useEffect(function(){
        changeTitle("فیلم")
    })
    return(
        <MainLayout>
            <div className="containerFull">
                <RegularMovieList  title="بر اساس داستان واقعی"/>
                <RegularMovieList  title="دوبله نماوا"/>
                <RegularMovieList   title="ویژه"/>
            </div>
        </MainLayout>
    )
}