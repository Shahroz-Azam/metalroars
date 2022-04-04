import React from "react";
// import Carousel from 'react-bootstrap/Carousel';
import GamePlayImage from '../../assets/images/game-play-2.webp'
import Image from 'react-bootstrap/Image'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-awesome-slider/dist/styles.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import g1 from '../../assets/images/freetoplay/ezgif-frame-033.jpg'
import g2 from '../../assets/images/freetoplay/ezgif-frame-036.jpg'
import g3 from '../../assets/images/freetoplay/ezgif-frame-067.jpg'
import g4 from '../../assets/images/freetoplay/ezgif-frame-070.jpg'
import g5 from '../../assets/images/freetoplay/ezgif-frame-076.jpg'
import g6 from '../../assets/images/freetoplay/ezgif-frame-140.jpg'
import g7 from '../../assets/images/freetoplay/ezgif-frame-141.jpg'
import g8 from '../../assets/images/freetoplay/ezgif-frame-145.jpg'





export default function GamePlay({ history }) {
    return(
      
        <>
        <Container>
            <Row className="sectionRow gamePlayRow">
                <Col lg={12}>
                    <h1 className="sectionHeading gamePlayHeading">Game Play</h1>
                
                  
                  
                </Col>
                <Row>
                    
            <Col sm={12}>
                <Swiper
                  pagination={{
                    type: "progressbar",
                  }}
                  navigation={true}
                  modules={[Pagination, Navigation]}
                  className="mySwiper" >
                  <SwiperSlide>
                  <Image className="sectionImage roadMapImg" loading="lazy" src={g1} alt="game play image" fluid={true} />
                  </SwiperSlide>
                  <SwiperSlide>
                  <Image className="sectionImage roadMapImg" loading="lazy" src={g2} alt="game play image" fluid={true} /> 
                  </SwiperSlide>
                  <SwiperSlide>
                  <Image className="sectionImage roadMapImg" loading="lazy" src={g3} alt="game play image" fluid={true} />
                  </SwiperSlide>
                  <SwiperSlide>
                  <Image className="sectionImage roadMapImg" loading="lazy" src={g4} alt="game play image" fluid={true} />
                  </SwiperSlide>
                  <SwiperSlide>
                  <Image className="sectionImage roadMapImg" loading="lazy" src={g5} alt="game play image" fluid={true} />
                  </SwiperSlide>
                  <SwiperSlide>
                  <Image className="sectionImage roadMapImg" loading="lazy" src={g6} alt="game play image" fluid={true} />
                  </SwiperSlide>
                  <SwiperSlide>
                  <Image className="sectionImage roadMapImg" loading="lazy" src={g7} alt="game play image" fluid={true} />
                  </SwiperSlide>
                  <SwiperSlide>
                  <Image className="sectionImage roadMapImg" loading="lazy" src={g8} alt="game play image" fluid={true} />
                  </SwiperSlide>
                </Swiper>
                
                <p className="sectionText gamePlayText">Metal Roars is a Free-to-play and Play-to-earn blockchain-based action game consisting of stunts, racing and battle modes. In the games players can use NFT Trucks & equipment and go to war, race & stunts with other players in an ever-expanding gaming world where the possibilities are limitless.</p>
                </Col>
      
                    </Row>
                
            </Row>
        </Container>
        </>
    )

}