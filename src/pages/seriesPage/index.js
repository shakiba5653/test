import RegularMovieList from '../../components/regularMovieList'
import {namavaSeries, updatedSeries} from '../../components/data';
import MainLayout from '../../components/layouts/mainLayout';
import changeTitle from "../../utils/changeTitle";
import { useEffect } from 'react';

export default function SeriesPage(){
    useEffect(function(){
        changeTitle("سریال")
    })
    useEffect(function(){
        document.body.classList.remove("whiteBg")
    })
    return(
        <MainLayout>
            <div className="containerFull">
                <RegularMovieList listName={updatedSeries} title="سریال‌های به‌روز شده"/>
                <RegularMovieList listName={namavaSeries} title="سریال‌های نماوا"/>
            </div>
        </MainLayout>
    )
}