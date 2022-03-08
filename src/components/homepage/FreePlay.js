import React from "react";
// import Carousel from 'react-bootstrap/Carousel';
import FreeToPlay from '../../assets/images/free_to_play.png'
import Image from 'react-bootstrap/Image'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Container} from "react-bootstrap";
export default function FreePlay({ history }) {
    return(
        <>
            <Container>
                <Row className="sectionRow freeToPlayRow">
                <Col lg={6}>
                    <Image className="sectionImage freeToPlayImg" loading="lazy" src={FreeToPlay} alt="free to play image" fluid={true} />
                </Col>
                <Col lg={6}>
                    <h1 className="sectionHeading freeToPlayHeading">Free-to-Play <br></br>Play-to-Earn</h1>
                    <p className="sectionText freeToPlayText">Metal Roars is a Free-to-play and Play-to-earn blockchain-based action game consisting of stunts, racing and battle modes. In the games players can use NFT Trucks & equipment and go to war, race & stunts with other players in an ever-expanding gaming world where the possibilities are limitless.
Metal Roars allow users to collect and make in-game purchases of exciting items such as trucks, weapons and upgrades. The game allows users to use their collectibles and head into battle with their opponents. </p>
                    <Image className="sectionImage freeToPlayImg2" loading="lazy" src={FreeToPlay} alt="free to play image" fluid={true} />
                </Col>
                </Row>
            </Container>

        </>
    )

}