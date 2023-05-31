import './style.css'
export default function NamavaApp(){
    return(
        <div className="container flexbox">
            <div className='appDownload'>
                <img src="namavaLogo.svg"/>
                <h3>دانلود اپلیکیشن</h3>
            </div>
            <div className="downloadFrom">
                <ul>
                <li><a href="#">
                    <img src="bazarLogo.svg"/>
                    <div className='content'>
                        <p>دریافت از</p>
                        <p>بازار</p>
                    </div>
                </a></li>
                <li><a href="#">
                    <img src="sibAppLogo.svg"/>
                    <div className='content'>
                        <p>دریافت از</p>
                        <p>سیب‌اپ</p>
                    </div>
                </a></li>
                <li><a href="#">
                    <img src="googlePlayLogo.svg"/>
                    <div className='content'>
                        <p>دریافت از</p>
                        <p>گوگل پلی</p>
                    </div>
                </a></li>
                </ul>
                <a className="more" href="#"><p>بیشتر</p></a>
            </div>
        </div>
    )
} 