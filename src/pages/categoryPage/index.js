import Categories from "../../components/categories";
import MainLayout from "../../components/layouts/mainLayout";
import changeTitle from "../../utils/changeTitle";
import { useEffect } from "react";
export default function CategoryPage(){
    useEffect(function(){
        changeTitle("دسته‌بندی")
    })
    useEffect(function(){
        document.body.classList.remove("whiteBg")
    })
    return(
        <MainLayout>
            <div className="containerFull">
            <Categories/>
            </div>
        </MainLayout>
    )
}