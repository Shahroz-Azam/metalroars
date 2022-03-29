import React from "react";
// import Carousel from 'react-bootstrap/Carousel';
import Poster from '../../assets/images/poster.jpg'
import HeaderVideo from '../../assets/images/banner/Metal Roars main banner.mp4'
// import Image from 'react-bootstrap/Image'
export default function Banner({ history }) {
    return(
        <>
            <div className="bannerContainer">
                <video
                    className="bannerVideo"
                    src={HeaderVideo}
                    controls={false}
                    autoPlay={true}
                    playsInline={true}
                    preload="none"
                    loop={true}
                    muted={true}
                    poster={Poster}
                />

                <div className="bannerButtons">
                    <button className="bannerBtn trailerBtn" onClick={()=> window.open("https://www.youtube.com/watch?v=UobNaF93bNc", "_blank")}>Game Trailer</button>
                    <button className="bannerBtn whitepaperBtn" onClick={()=> window.open("https://metal-roars.gitbook.io/metal-roars-whitepaper-v.1-1/", "_blank")}>WhitePaper</button>
                </div>
            </div>
        </>
        )

}