import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RoadMapIcon from '../../assets/images/roadmap-icon.svg'

import Image from "react-bootstrap/Image";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// import FlipperRight from "../../assets/images/fliper_1.svg"
// import FlipperLeft from "../../assets/images/fliper_2.svg"

export default class RoadMapSlider extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
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
    return (
      <div>
        <Row>
        <div className="dsktpRoadmapBtnContainer" style={{ textAlign: "right" }}>
          <button className="roadmapBtn roadmapPreviousBtn" onClick={this.previous}>
            &#60; 
          {/* <Image className="flipperImage" loading="lazy" src={FlipperLeft} alt="previous roadmap" fluid={true} /> */}
          </button>
          <button className="roadmapBtn roadmapNextBtn" onClick={this.next}>
            &#62;
          {/* <Image className="flipperImage" loading="lazy" src={FlipperRight} alt="previous roadmap" fluid={true} /> */}
          </button>
        </div>
        </Row>
        <Row className="smallSliderSection">
          <Col lg="12" xs="12">
            <Slider ref={c => (this.slider = c)}  {...settings}>
              <div className="singleRoadMapContainer" key={1}>
                <h4 className="roadMapQ">Q4  <span className="roadMapDate">/ 2021</span></h4>
                <div className="hrContainer">
                  <hr className="roadMap_hr" />
                  <Image className="roadMap_hrImage" src={RoadMapIcon} alt="road map hr image" />
                </div>
                <ul className="roadMap_ul">
                  <li>Idea Brainstorming </li>
                  <li>Concept Art of game design </li>
                  <li>Team Acquring </li>
                  <li>Research & development </li>
                  <li>Character Line Art  </li>
                </ul>
              </div>
              <div className="singleRoadMapContainer" key={2}>
                <h4 className="roadMapQ">Q1  <span className="roadMapDate">/ 2022</span></h4>
                <div className="hrContainer">
                  <hr className="roadMap_hr" />
                  <Image className="roadMap_hrImage" src={RoadMapIcon} alt="road map hr image" />
                </div>
                <ul className="roadMap_ul">
                  <li>Smart Contract / Audit </li>
                  <li>Whitepaper/pitchdeck </li>
                  <li>Website Launch </li>
                  <li>Social media Presence</li>
                  <li>Character Introduce </li>
                  <li>Gameplay Video </li>
                </ul>
              </div>
              <div className="singleRoadMapContainer" key={3}>
                <h4 className="roadMapQ">Q2  <span className="roadMapDate">/ 2022</span></h4>
                <div className="hrContainer">
                  <hr className="roadMap_hr" />
                  <Image className="roadMap_hrImage" src={RoadMapIcon} alt="road map hr image" />
                </div>
                <ul className="roadMap_ul">
                  <li>Marketing Round 1 </li>
                  <li>Game trailer </li>
                  <li>Seed/Private Round </li>
                  <li>IDO's  / INO's Launch </li>
                  <li>NFT Character Release </li>
                  <li>Metaverse Research </li>
                </ul>
              </div>
              <div className="singleRoadMapContainer" key={4}>
                <h4 className="roadMapQ">Q3  <span className="roadMapDate">/ 2022</span></h4>
                <div className="hrContainer">
                  <hr className="roadMap_hr" />
                  <Image className="roadMap_hrImage" src={RoadMapIcon} alt="road map hr image" />
                </div>
                <ul className="roadMap_ul">
                  <li>how to play </li>
                  <li>Game alpha On Web GL </li>
                  <li>Nft Marketplace </li>
                  <li>Nft Airdrop </li>
                  <li>CMC/ CG Listing </li>
                  <li>Marketing Round 2 </li>
                  <li>Nft Staking </li>
                </ul>
              </div>
              <div className="singleRoadMapContainer" key={5}>
                <h4 className="roadMapQ">Q4  <span className="roadMapDate">/ 2022</span></h4>
                <div className="hrContainer">
                  <hr className="roadMap_hr" />
                  <Image className="roadMap_hrImage" src={RoadMapIcon} alt="road map hr image" />
                </div>
                <ul className="roadMap_ul">
                  <li>Game Beta Android & ios </li>
                  <li>Garage  & Truck Upgrade </li>
                  <li>Stunt / Race mode intro </li>
                  <li>Introducing 1st city </li>
                </ul>
              </div>
              <div className="singleRoadMapContainer" key={6}>
                <h4 className="roadMapQ">Q1  <span className="roadMapDate">/ 2023</span></h4>
                <div className="hrContainer">
                  <hr className="roadMap_hr" />
                  <Image className="roadMap_hrImage" src={RoadMapIcon} alt="road map hr image" />
                </div>
                <ul className="roadMap_ul">
                  <li>War/ Destruction Mode </li>
                  <li>Introducing new city </li>
                  <li>Introducing Wepon Arsenal </li>
                </ul>
              </div>
              <div className="singleRoadMapContainer" key={7}>
                <h4 className="roadMapQ">Q2  <span className="roadMapDate">/ 2023</span></h4>
                <div className="hrContainer">
                  <hr className="roadMap_hr" />
                  <Image className="roadMap_hrImage" src={RoadMapIcon} alt="road map hr image" />
                </div>
                <ul className="roadMap_ul">
                  <li>Introducing new City </li>
                  <li>Game on Pc </li>
                  <li>Wepon Upgrade </li>
                </ul>
              </div>
              <div className="singleRoadMapContainer" key={8}>
                <h4 className="roadMapQ">Q3  <span className="roadMapDate">/ 2023</span></h4>
                <div className="hrContainer">
                  <hr className="roadMap_hr" />
                  <Image className="roadMap_hrImage" src={RoadMapIcon} alt="road map hr image" />
                </div>
                <ul className="roadMap_ul">
                  <li>Multiplayer Experience </li>
                  <li>Mega NFT Air Drop </li>
                </ul>
              </div>
              <div className="singleRoadMapContainer" key={9}>
                <h4 className="roadMapQ">Q4  <span className="roadMapDate">/ 2023</span></h4>
                <div className="hrContainer">
                  <hr className="roadMap_hr" />
                  <Image className="roadMap_hrImage" src={RoadMapIcon} alt="road map hr image" />
                </div>
                <ul className="roadMap_ul">
                  <li>metaverse experience  </li>
                </ul>
              </div>
            </Slider>
          </Col>
        </Row>
        <Row>
        <div className="mblRoadmapBtnContainer" style={{ textAlign: "center" }}>
          <button className="roadmapBtn roadmapPreviousBtn" onClick={this.previous}>
          {/* <Image className="flipperImage" loading="lazy" src={FlipperLeft} alt="previous roadmap" fluid={true} /> */}
            &#60; 
          </button>
          <button className="roadmapBtn roadmapNextBtn" onClick={this.next}>
          {/* <Image className="flipperImage" loading="lazy" src={FlipperRight} alt="previous roadmap" fluid={true} /> */}
            &#62;
          </button>
        </div>
        </Row>
      </div>
    );
  }
}


