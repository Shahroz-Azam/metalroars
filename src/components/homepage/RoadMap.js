import React from "react";
import RoadMapSmocky from '../../assets/images/road_map_smoky_back.png'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

const RoadMapSlider = React.lazy(() => import('../partials/RoadMapSlider'));


export default function RoadMap({ history }) {

    return (
        <>
            <Container>
                <Row className="sectionRow roadMapRow">
                    <Col lg={12}>
                        <h1 className="sectionHeading roadMapHeading">ROADMAP</h1>
                    </Col>
                    <Col lg={12}>
                    <RoadMapSlider />
                    </Col>
                    <Col lg={12} className="roadMapImgContainer">
                        <Image className="sectionImage roadMapImg" loading="lazy" src={RoadMapSmocky} alt="game play image" fluid={true} />
                    </Col>
                </Row>
            </Container>

        </>
    )

}