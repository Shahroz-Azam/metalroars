import React from "react";
// import Carousel from 'react-bootstrap/Carousel';
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider1 from '../../assets/images/banner/s1.jpg'
import Slider2 from '../../assets/images/banner/s2.jpg'
import Slider3 from '../../assets/images/banner/s3.jpg'






// import Image from 'react-bootstrap/Image'
export default function Banner({ history }) {
    return(
        <>
        

<Carousel>
  <Carousel.Item interval={1000} >
    <img
      className="d-block w-100"
      src={Slider1}
      alt="First slide"
    />
    
    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={Slider2}
      alt="Second slide"
    />
    <Carousel.Caption>
    <Button variant="primary">Primary</Button>{' '}
      <h3>1 </h3>
      <p>1</p>
      <Button variant="primary">Primary</Button>{' '}
    </Carousel.Caption>
     </Carousel.Item>
    <Carousel.Item>
    <img
      className="d-block w-100"
      src={Slider3}
      alt="Third slide"
    />
    <Carousel.Caption>
    <Button variant="success">Success</Button>{' '}
  <Button variant="warning">Warning</Button>{' '}
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel>


        </>
        
        )
        

}