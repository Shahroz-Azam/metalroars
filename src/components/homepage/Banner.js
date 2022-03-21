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
            </div>
        </>
        )

}