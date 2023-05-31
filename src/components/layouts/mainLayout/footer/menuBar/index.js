import './style.css'
export default function MenuBar(){
    return(
        <ul className="menuBar">
            <div className="container menuHolder">
                <li><a href="#">درباره نماوا</a></li>
                <li><a href="#">اپلیکیشن‌ها</a></li>
                <li><a href="#">فرصت‌های شغلی</a></li>
                <li><a href="#">خرید اشنراک</a></li>
                <li><a href="#">کارت هدیه</a></li>
                <li><a href="#">نماوا مگ</a></li>
                <li><a href="#">سوالات متداول</a></li>
                <li><a href="#">تماس با ما</a></li>
                <li><a href="#">قوانین</a></li>
                <li><a href="#">شرایط مصرف اینترنت</a></li>
            </div>
        </ul>
    )
}