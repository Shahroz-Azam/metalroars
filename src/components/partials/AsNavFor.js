import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from "react-bootstrap/Image";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Truck1 from '../../assets/images/Truck-1.png'
import Truck2 from '../../assets/images/Truck-2.png'
import Truck3 from '../../assets/images/Truck-3.png'
import Model1 from '../../assets/images/360/model1.mp4'
import Model2 from '../../assets/images/360/model2.mp4'
import Model3 from '../../assets/images/360/model3.mp4'

import Flipper1 from '../../assets/images/fliper_1.svg'
import Flipper2 from '../../assets/images/fliper_2.svg'

export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
      nav3: null
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
      nav3: this.slider3

    });
  }

  next() {
    this.slider1.slickNext();
    this.slider2.slickNext();
    this.slider3.slickNext();
  }
  previous() {
    this.slider1.slickPrev();
    this.slider2.slickPrev();
    this.slider3.slickPrev();
  }

  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      slidesToScroll: 3,
      speed: 500,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          }
        },
      ]
    };
    return (
      <div>
        <Row className="smallSliderSection">
          <Col lg="12" xs="12">
            <Slider
              asNavFor={this.state.nav1}
              ref={slider => (this.slider2 = slider)}
              swipeToSlide={true}
              focusOnSelect={true}
              {...settings}
            >
              <div className="truckContainer" key={1}>
                <Image className="truckImage" src={Truck1} alt="First slide" fluid={true} loading="lazy" />
              </div>
              <div className="truckContainer" key={2}>
                <Image className="truckImage" src={Truck2} alt="First slide" fluid={true} loading="lazy" />
              </div>
              <div className="truckContainer" key={3}>
                <Image className="truckImage" src={Truck3} alt="First slide" fluid={true} loading="lazy" />
              </div>
              <div className="truckContainer" key={4}>
                <Image className="truckImage" src={Truck1} alt="First slide" fluid={true} loading="lazy" />
              </div>
              <div className="truckContainer" key={5}>
                <Image className="truckImage" src={Truck2} alt="First slide" fluid={true} loading="lazy" />
              </div>
              <div className="truckContainer" key={6}>
                <Image className="truckImage" src={Truck3} alt="First slide" fluid={true} loading="lazy" />
              </div>
            </Slider>
          </Col>
        </Row>
        <hr className="nftCollection_hr" />

        <Row className="bigSliderSection">
          <Col lg={2} xs={0}>
            <button onClick={this.previous} className="sliderButton">
              <Image src={Flipper1} alt="Previous slide" />
            </button>
          </Col>
          <Col lg={8} xs={12}>
            <Slider
              asNavFor={this.state.nav2}
              ref={slider => (this.slider1 = slider)}
            >
              <div key={1}>
                <video className="truckVideo" src={Model1} controls={false} autoPlay={true} playsInline={false} preload="none" loop={true} muted={true} />
              </div>
              <div key={2}>
                <video className="truckVideo" src={Model2} controls={false} autoPlay={true} playsInline={false} preload="none" loop={true} muted={true} />
              </div>
              <div key={3}>
                <video className="truckVideo" src={Model3} controls={false} autoPlay={true} playsInline={false} preload="none" loop={true} muted={true} />
              </div>
              <div key={4}>
                <video className="truckVideo" src={Model1} controls={false} autoPlay={true} playsInline={false} preload="none" loop={true} muted={true} />
              </div>
              <div key={5}>
                <video className="truckVideo" src={Model2} controls={false} autoPlay={true} playsInline={false} preload="none" loop={true} muted={true} />
              </div>
              <div key={6}>
                <video className="truckVideo" src={Model3} controls={false} autoPlay={true} playsInline={false} preload="none" loop={true} muted={true} />
              </div>
            </Slider>
          </Col>

          <Col lg={2} xs={0}>
            <button onClick={this.next} className="sliderButton">
              <Image src={Flipper2} alt="Next slide" />
            </button>
          </Col>
        </Row>
        <Row>
          <Col lg={12} className="nftCollectionTextContainer">
          <Slider
              asNavFor={this.state.nav3}
              ref={slider => (this.slider3 = slider)}
            >
              <div className="nftCollectionText" key={1}>
            <p>1. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit,</p>
              </div>
              <div className="nftCollectionText" key={2}>
            <p>2. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit,</p>
              </div>
              <div className="nftCollectionText" key={3}>
            <p>3. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit,</p>
              </div>
              <div className="nftCollectionText" key={4}>
            <p>4. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit,</p>
              </div>
              <div className="nftCollectionText" key={5}>
            <p>5. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit,</p>
              </div>
              <div className="nftCollectionText" key={6}>
            <p>6. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit,</p>
              </div>
            </Slider>
          </Col>
        </Row>
      </div>
    );
  }
}


