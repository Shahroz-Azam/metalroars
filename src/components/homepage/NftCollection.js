import React, { useState, useEffect, useRef } from "react";
import Image from 'react-bootstrap/Image'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "react-bootstrap/Container";
import Truck1 from '../../assets/images/Truck-1.png'
import Truck2 from '../../assets/images/Truck-2.png'
import Truck3 from '../../assets/images/Truck-3.png'
import Model1 from '../../assets/images/360/model1.mp4'
import Model2 from '../../assets/images/360/model2.mp4'
import Model3 from '../../assets/images/360/model3.mp4'
import BlackTruck from '../../assets/images/Black-Truck.png'
import Flipper1 from '../../assets/images/fliper_1.svg'
import Flipper2 from '../../assets/images/fliper_2.svg'

export default function NftCollection({ history }) {
    const [slideCount, setSlideCount] = useState([1, 2, 3, 4, 5, 6])
    const [activeSlide, setActiveSlide] = useState(1)
    const [activeIndex, setActiveIndex] = useState()
    const [nav1, setnav1] = useState(null)
    const [nav2, setnav2] = useState(null)
    // const [slickF,setSlickF] = useState('')
    let slide1 = useRef(null);
    let slide2 = useRef(null);
    useEffect(() => {
        // let slide1 = document.getElementById('truck_image_1');
        // let slide2 = document.getElementById('truck_image_2');
        // let slide3 = document.getElementById('truck_image_3');
        // let slide4 = document.getElementById('truck_image_4');
        // let slide5 = document.getElementById('truck_image_5');
        // if(activeSlide === 1){
        //     slide2.src = BlackTruck
        //
        // }
        setnav1(slide1)
        setnav2(slide2)

    }, [nav1, nav2])
    const settings = {
        dots: false,
        infinite: true,
        lazyLoad: true,
        className: "center",
        centerMode: true,
        focusOnSelect: true,
        speed: 100,
        // initialSlide: 2,
        slidesToShow: 5,
        slidesToScroll: 1,
        beforeChange: function (current, next) {
            if (current === 0 && next === slideCount.length) {
                setActiveSlide(next+2)
            } else {
                setActiveSlide(next+1)
            }
        },
        responsive: [

            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const settings2 = {
        dots: false,
        infinite: true,
        lazyLoad: true,
        className: "center",
        centerMode: true,
        focusOnSelect: true,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: function (current, next) {
            if (current === 0 && next === slideCount.length) {
                setActiveSlide(next+2)
            } else {
                setActiveSlide(next+1)
            }
        },
        responsive: [

            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    function slicPrev(e) {
        slide1.slickPrev()
        slide2.slickPrev()
        console.log(activeIndex);

        if (activeIndex === 0) {
            setActiveSlide(4)
        }
    }
    function slicNext(e) {
        // console.log(slide1.slickNext())
        slide1.slickNext()
        slide2.slickNext()
        
        console.log(activeIndex);
    }
    let trucks = {};
    trucks[1] = Truck1;
    trucks[2] = Truck2;
    trucks[3] = Truck3;
    trucks[4] = Truck1;
    trucks[5] = Truck2;
    trucks[6] = Truck3;

    let models = {};
    models[1] = Model1;
    models[2] = Model2;
    models[3] = Model3;
    models[4] = Model1;
    models[5] = Model2;
    models[6] = Model3;



    // Slider start

    // var slideIndex = 1;
    // showSlides(slideIndex);

    // // Next/previous controls
    // const plusSlides = (n) => {
    //   showSlides(slideIndex += n);
    // }

    // // Thumbnail image controls
    // const currentSlide = (n) => {
    //   showSlides(slideIndex = n);
    // }

    // function showSlides(n) {
    //   var i;
    //   var slides = document.getElementsByClassName("mySlides");
    //   var dots = document.getElementsByClassName("demo");
    //   var captionText = document.getElementById("caption");
    //   if (n > slides.length) {slideIndex = 1}
    //   if (n < 1) {slideIndex = slides.length}
    //   for (i = 0; i < slides.length; i++) {
    //     slides[i].style.display = "none";
    //   }
    //   for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    //   }
    //   slides[slideIndex-1].style.display = "block";
    //   dots[slideIndex-1].className += " active";
    //   captionText.innerHTML = dots[slideIndex-1].alt;
    // }


    return (
        <>
            <Container>
                <Row className="sectionRow nftCollectionRow">
                    <Col lg={12}>
                        <h1 className="sectionHeading nftCollectionHeading">NFT <span className="nftCollectionHeadingPart">Monster</span> Collection</h1>
                    </Col>
                    <Col lg={12}>
                        <h2> - - Slider Row Section  - - </h2>

                        <Row className="nft_collection_row-2">
                            <Col lg={{ span: 12, offset: 0 }} md={{ span: 12, offset: 0 }} xs={{ span: 12, offset: 0 }}>
                                <Slider {...settings}
                                    asNavFor={nav2}
                                    ref={(d) => {
                                        slide1 = d
                                    }}

                                >
                                    {
                                        slideCount.map((value, key) => {
                                            return (
                                                <div key={key} className="d-flex justify-content-center">
                                                    <Image
                                                        className="d-block truck_image"
                                                        src={activeSlide === value ? trucks[value] : BlackTruck}
                                                        alt="First slide"
                                                        width="185px"
                                                        id={`truck_image_${value}`}
                                                        fluid={true}
                                                        loading="lazy"
                                                    />
                                                </div>
                                            )
                                        })
                                    }
                                </Slider>
                                <hr id="nft_collection_hr" />
                                {/*<p id="nft_collection_p">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit,</p>*/}
                            </Col>
                        </Row>

                        {/* <Image src={Flipper1} alt="First slide" width="200px" /> */}

                        {/* <!-- Thumbnail images --> */}
                        {/* <div class="row">
                            <div class="column">
                            <Image class="demo cursor" src={Truck1} style="width:100%" onClick={currentSlide(1)} alt="The Woods" />
                            </div>
                            <div class="column">
                            <Image class="demo cursor" src={Truck2} style="width:100%" onClick={currentSlide(2)} alt="Cinque Terre" />
                            </div>
                            <div class="column">
                            <Image class="demo cursor" src={Truck3} style="width:100%" onClick={currentSlide(3)} alt="Mountains and fjords" />
                            </div>
                        </div> */}

                    </Col>

                    <Col lg={12}>

                        <h2> - - Full Slider Section  - - </h2>
                        <Row>
                            <Col lg={2} xs={2}>
                                <button onClick={((e) => slicPrev(e))} className="sliderButton">
                                    <Image src={Flipper1} alt="Previous slide" />
                                </button>
                            </Col>
                            <Col lg={8} xs={8} style={{ position: 'relative' }}>
                                <Slider
                                    {...settings2}
                                    asNavFor={nav1}
                                    ref={(d) => {
                                        slide2 = d
                                    }}
                                    slidesToShow={1}
                                    swipeToSlide={true}
                                    focusOnSelect={true}
                                >
                                    {
                                        slideCount.map((value, key) => {
                                            return (
                                                <div key={key} className="d-flex justify-content-center truck_image_div">
                                                    {/*onClick={slide2.slickPrev()}*/}
                                                    {/*<Image src={Flipper1} alt="First slide" width="200px"*/}
                                                    {/*       onClick={((e) => slicPrev(e))}*/}
                                                    {/*/>*/}
                                                    <video
                                                        id={`truck_image_bottom_${value}`}
                                                        className="d-block truck_image_bottom"
                                                        src={models[activeSlide]}
                                                        controls={false}
                                                        autoPlay={true}
                                                        playsInline={false}
                                                        preload="none"
                                                        loop={true}
                                                        muted={true}
                                                    />
                                                </div>
                                            )
                                        })
                                    }
                                </Slider>
                            </Col>

                            <Col lg={2} xs={2}>
                                <button onClick={((e) => slicNext(e))} className="sliderButton">
                                    <Image src={Flipper2} alt="Next slide" />
                                </button>
                            </Col>
                        </Row>

                        {/* <!-- Container for the image gallery --> */}
                        <div class="sliderContainer">

                            {/* <!-- Full-width images with number text --> */}
                            {/* <div class="mySlides">
                                <div class="numbertext">1 / 6</div>
                                <Image src={Truck1} style="width:100%" />
                            </div>

                            <div class="mySlides">
                                <div class="numbertext">2 / 6</div>
                                <Image src={Truck2} style="width:100%" />
                            </div>

                            <div class="mySlides">
                                <div class="numbertext">3 / 6</div>
                                <Image src={Truck3} style="width:100%" />
                            </div>

                            <div class="mySlides">
                                <div class="numbertext">4 / 6</div>
                                <Image src={Truck1} style="width:100%" />
                            </div>

                            <div class="mySlides">
                                <div class="numbertext">5 / 6</div>
                                <Image src={Truck2} style="width:100%" />
                            </div>

                            <div class="mySlides">
                                <div class="numbertext">6 / 6</div>
                                <Image src={Truck3} style="width:100%" />
                            </div> */}

                            {/* <!-- Next and previous buttons --> */}
                            {/* <a class="prev" onClick={plusSlides(-1)}>&#10094;</a>
                            <a class="next" onClick={plusSlides(1)}>&#10095;</a> */}

                            {/* <!-- Image text --> */}
                            {/* <div class="caption-container">
                                <p id="caption"></p>
                            </div> */}

                        </div>
                    </Col>

                    <Col lg={12}>
                        <p className="sectionText nftCollectionText">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit,</p>
                    </Col>
                </Row>
            </Container>
            {/* <Container className="nft_collection_container">
                <Row className="nft_collection_row">
                    <Col lg={{ span: 12, offset: 0 }} md={{ span: 12, offset: 0 }} xs={{ span: 12, offset: 0 }}>
                        <Row className="nft_collection_heading_row mt-lg-5 pt-lg-5">
                            <Col lg={{ span: 12, offset: 0 }} md={{ span: 12, offset: 0 }} xs={{ span: 12, offset: 0 }}>
                                <h1 className="nft_collection_heading text-center">Nft <span className="nft_collection_monster_heading">Monster</span> Collection</h1>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row className="nft_collection_row-2">
                    <Col lg={{ span: 12, offset: 0 }} md={{ span: 12, offset: 0 }} xs={{ span: 12, offset: 0 }}>
                        <Slider {...settings}
                            asNavFor={nav2}
                            ref={(d) => {
                                slide1 = d
                            }}

                        >
                            {
                                slideCount.map((value, key) => {
                                    return (
                                        <div key={key} className="d-flex justify-content-center">
                                            <Image
                                                className="d-block truck_image"
                                                src={activeSlide === value ? trucks[value] ? trucks[value] : Truck1 : BlackTruck}
                                                alt="First slide"
                                                width="185px"
                                                id={`truck_image_${value}`}
                                                fluid={true}
                                                loading="lazy"
                                            />
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                        <hr id="nft_collection_hr" />
                    </Col>
                </Row>
                <Row>

                    <Col lg={{ span: 12, offset: 0 }} md={{ span: 12, offset: 0 }} xs={{ span: 12, offset: 0 }} style={{ position: 'relative' }}>
                        <button id="slickPrev" onClick={((e) => slicPrev(e))}></button>
                        <Slider
                            {...settings2}
                            asNavFor={nav1}
                            ref={(d) => {
                                slide2 = d
                            }}
                            slidesToShow={1}
                            swipeToSlide={true}
                            focusOnSelect={true}
                        >
                            {
                                slideCount.map((value, key) => {
                                    return (
                                        <div key={key} className="d-flex justify-content-center truck_image_div">
                                            
                                            <video
                                                id={`truck_image_bottom_${value}`}
                                                className="d-block truck_image_bottom"
                                                src={models[activeSlide]}
                                                width="600"
                                                height="400"
                                                controls={false}
                                                autoPlay={true}
                                                playsInline={true}
                                                preload="none"
                                                loop={true}
                                                muted={true}
                                            />
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                        <button id="slickNext" onClick={((e) => slicNext(e))}></button>
                    </Col>

                </Row>

            </Container> */}

        </>
    )

}