import React, { useState, useEffect, useRef } from "react";
// import Carousel from 'react-bootstrap/Carousel';
// import GamePlay from '../../assets/images/game_play.png'
import Image from 'react-bootstrap/Image'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
// import 'swiper/css/navigation';
// SwiperCore.use([Navigation]);
//SwiperCore,Navigation
export default function NewsFeed({ history }) {

    const [mediumFeed, setMediumFeeds] = useState([]);
    // const prevRef = useRef(null);
    // const nextRef = useRef(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        // https://medium.com/@metalroars
        //https://medium.com/feed/@waleed.hassang10/
        mediumFeeds('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@metalroars/')
            .then(data => {
                if (data) {
                    setMediumFeeds(data.items)
                    document.getElementById('news_feed_link').href = data.items[0].link
                    // document.getElementById('news_feed_title').textContent = data.items[0].title
                    // document.getElementById('news_feed_description').textContent = data.items[0].description

                }
            });

    }, [])

    async function mediumFeeds(url = '') {
        // Default options are marked with *
        const response = await fetch(url);
        //.catch(err => console.log(err));
        return response.json(); // parses JSON response into native JavaScript objects
    }
    function slideChange() {
        let link = mediumFeed && mediumFeed[swiperRef.current.swiper.activeIndex] !== undefined ? mediumFeed[swiperRef.current.swiper.activeIndex].link : false;
        if (link) {
            document.getElementById('news_feed_link').href = link
        } else {
            document.getElementById('news_feed_link').href = '/#'
        }
    }

    return (
        <>
            <Container>
                <Row className="sectionRow newsFeedRow">
                    <Col lg={12} xs={12}>
                        <h1 className="sectionHeading newsFeedHeading">News Feed</h1>
                    </Col>
                    <Col lg={6} xs={12} className="newsFeedSliderContiner nfsc-lg">
                        <Row>
                            <Col lg={12}>
                                <Swiper
                                    effect={"cards"}
                                    grabCursor={true}
                                    modules={[EffectCards]}
                                    className="mySwiper"
                                    onSlideChange={() => slideChange()}
                                    // onSwiper={(swiper) => console.log('----',swiper)}
                                    ref={swiperRef}

                                // navigation={{
                                //     prevEl: prevRef.current ? prevRef.current : undefined,
                                //     nextEl: nextRef.current ? nextRef.current : undefined,
                                // }}
                                // onInit={(swiper) => {
                                //     swiper.params.navigation.prevEl = prevRef.current;
                                //     swiper.params.navigation.nextEl = nextRef.current;
                                //     swiper.navigation.update();
                                // }}
                                // modules={[Navigation]}
                                >
                                    {
                                        mediumFeed && mediumFeed.map((value, key) => {
                                            // console.log(value)
                                            return (
                                                <SwiperSlide key={key}>
                                                    <input type="hidden" className="medium_id" value={value.link} />
                                                    <Image className="swiper_image" loading="lazy" src={value.thumbnail} alt={value.title} fluid={true} />
                                                </SwiperSlide>
                                            )
                                        })
                                    }
                                </Swiper>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12}>
                                <div className="newsfeedBtnContainer" style={{ textAlign: "center" }}>
                                    <button className="newsfeedBtn newsfeedPreviousBtn" onClick={() => swiperRef.current.swiper.slidePrev()}>
                                        {/* <Image className="flipperImage" loading="lazy" src={FlipperLeft} alt="previous roadmap" fluid={true} /> */}
                                        &#60;
                                    </button>
                                    <button className="newsfeedBtn newsfeedNextBtn" onClick={() => swiperRef.current.swiper.slideNext()}>
                                        {/* <Image className="flipperImage" loading="lazy" src={FlipperRight} alt="previous roadmap" fluid={true} /> */}
                                        &#62;
                                    </button>
                                </div>
                                {/* <Col lg={{ span: 3, offset: 0 }} md={{ span: 3, offset: 0 }} xs={{ span: 4, offset: 0 }}>
                                    <div className="newsFeedPreviousButton" onClick={() => swiperRef.current.swiper.slidePrev()}>{'<'}</div>
                                </Col>
                                <Col lg={{ span: 3, offset: 0 }} md={{ span: 3, offset: 0 }} xs={{ span: 4, offset: 0 }}>
                                    <div className="newsFeedNextButton" onClick={() => swiperRef.current.swiper.slideNext()}>{'>'}</div>
                                </Col> */}
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={6} xs={12}>
                        <h2 className="sectionHeading newsFeedSubHeading">News Feed</h2>
                        <p className="sectionText newsFeedText">Metal Roars is a Free-to-play and Play-to-earn blockchain-based action game consisting of stunts, racing and battle modes. In the games players can use NFT Trucks & equipment and go to war, race & stunts with other players in an ever-expanding gaming world where the possibilities are limitless.</p>
                        <a href="/#" className="newsFeedLink">Read More</a>

                        <Row>
                            <Col lg="12" className="newsFeedSliderContiner nfsc-sm">
                                {/* <h2> - - Slider Images for mobile screen  - - </h2> */}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            {/* <Container>
                <Row className="news_feed_row">
                    <Col lg={{ span: 12, offset: 0 }} md={{ span: 12, offset: 0 }} xs={{ span: 12, offset: 0 }}>
                        <Row className="news_feed_heading_row">
                            <Col lg={{ span: 12, offset: 0 }} md={{ span: 12, offset: 0 }} xs={{ span: 12, offset: 0 }}>
                                <h1 className="news_feed_heading text-center">News Feeds</h1>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="news_feed_row-2">
                    <Col lg={{ span: 6, offset: 0 }} md={{ span: 6, offset: 0 }} xs={{ span: 12, offset: 0 }} >
                        <Swiper
                            effect={"cards"}
                            grabCursor={true}
                            modules={[EffectCards]}
                            className="mySwiper"
                            onSlideChange={() => slideChange()}
                            // onSwiper={(swiper) => console.log('----',swiper)}
                            ref={swiperRef}

                        // navigation={{
                        //     prevEl: prevRef.current ? prevRef.current : undefined,
                        //     nextEl: nextRef.current ? nextRef.current : undefined,
                        // }}
                        // onInit={(swiper) => {
                        //     swiper.params.navigation.prevEl = prevRef.current;
                        //     swiper.params.navigation.nextEl = nextRef.current;
                        //     swiper.navigation.update();
                        // }}
                        // modules={[Navigation]}
                        >
                            {
                                mediumFeed && mediumFeed.map((value, key) => {
                                    // console.log(value)
                                    return (
                                        <SwiperSlide key={key}>
                                            <input type="hidden" className="medium_id" value={value.link} />
                                            <Image className="swiper_image" loading="lazy" src={value.thumbnail} alt={value.title} fluid={true} />
                                        </SwiperSlide>
                                    )
                                })
                            }

                            <Row className="d-flex justify-content-center">
                                <Col lg={{ span: 3, offset: 0 }} md={{ span: 3, offset: 0 }} xs={{ span: 4, offset: 0 }}>
                                    <div id="newsFeedPreviousButton" onClick={() => swiperRef.current.swiper.slidePrev()}>{'<'}</div>
                                </Col>
                                <Col lg={{ span: 3, offset: 0 }} md={{ span: 3, offset: 0 }} xs={{ span: 4, offset: 0 }}>
                                    <div id="newsFeedNextButton" onClick={() => swiperRef.current.swiper.slideNext()}>{'>'}</div>
                                </Col>

                            </Row>
                        </Swiper>
                    </Col>
                    <Col className="news_feed_col-2" lg={{ span: 6, offset: 0 }} md={{ span: 6, offset: 0 }} xs={{ span: 12, offset: 0 }} >
                        <h2 className="" id="news_feed_title">Lorem ipsum Lorem ipsum</h2>
                        <p id="news_feed_description" className="news_feed_paragraph">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet,
                            consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                        <a href="/#" target="_blank" className="news_feed_link" id="news_feed_link">Learn more</a>
                    </Col>
                </Row>
            </Container> */}

        </>
    )

}