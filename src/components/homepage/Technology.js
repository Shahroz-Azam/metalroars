import React from "react";


import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Binance from '../../assets/images/binance.png'
import Unity from '../../assets/images/unity.png'



export default function Technology() {
    return (
        <>  
            <Container>
           
                <Row className="sectionRow technologyRow">
                    <Col lg={12}>
                        <h1 className="sectionHeading technologyHeading">TECHNOLOGY</h1>
                    </Col>
                    <Col lg={6}  xs={6}>
                        <Image className="techImg binanceImage" src={Binance} alt="binance logo" fluid={true} />
                    </Col>
                    <Col lg={6} xs={6}>
                        <Image className="techImg unityImage" src={Unity} alt="unity logo" fluid={true} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}