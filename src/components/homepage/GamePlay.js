import React from "react";
// import Carousel from 'react-bootstrap/Carousel';
import GamePlayImage from '../../assets/images/game-play-2.webp'
import Image from 'react-bootstrap/Image'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default function GamePlay({ history }) {
    return(
        <>
        <Container>
            <Row className="sectionRow gamePlayRow">
                <Col lg={12}>
                    <h1 className="sectionHeading gamePlayHeading">Game Play</h1>
                    <p className="sectionText gamePlayText">Metal Roars is a Free-to-play and Play-to-earn blockchain-based action game consisting of stunts, racing and battle modes. In the games players can use NFT Trucks & equipment and go to war, race & stunts with other players in an ever-expanding gaming world where the possibilities are limitless.</p>
                    <Image className="sectionImage gamePlayImg" loading="lazy" src={GamePlayImage} alt="game play image" fluid={true} />
                </Col>
            </Row>
        </Container>
        </>
    )

}