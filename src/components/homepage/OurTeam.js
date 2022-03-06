import React from "react";
// import Carousel from 'react-bootstrap/Carousel';
// import Profile from '../../assets/images/team.jpg'
import Ahmed from '../../assets/images/team/ahmed.jpeg'
import Ars from '../../assets/images/team/arsalan.jpg'
import Rao from '../../assets/images/team/rao.jpg'
import Profile from '../../assets/images/team/avatar.gif'
import Image from 'react-bootstrap/Image'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
export default function OurTeam({ history }) {
    return (
        <>
            <Container>
                <Row className="sectionRow mrTeamRow">
                    <Col lg={12}>
                        <h1 className="sectionHeading mrTeamHeading">METAL ROARS TEAM</h1>
                    </Col>
                    <Col lg={4} md={4} xs={6}>
                        <Row className="memberContainer">
                            <Col lg={4} md={12} xs={12}>
                                <Image className="memberImage" alt="profile icon" loading="lazy" fluid={true} src={Ars} />
                            </Col>
                            <Col lg={8} md={12} xs={12}>
                                <p className="memberDesignation">CEO</p>
                                <p className="memberName">Vincent R</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={4} md={4} xs={6}>
                        <Row className="memberContainer">
                            <Col lg={4} md={12} xs={12}>
                                <Image className="memberImage" alt="profile icon" loading="lazy" fluid={true} src={Ars} />
                            </Col>
                            <Col lg={8} md={12} xs={12}>
                                <p className="memberDesignation">CEO</p>
                                <p className="memberName">Vincent R</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={4} md={4} xs={6}>
                        <Row className="memberContainer">
                            <Col lg={4} md={12} xs={12}>
                                <Image className="memberImage" alt="profile icon" loading="lazy" fluid={true} src={Ars} />
                            </Col>
                            <Col lg={8} md={12} xs={12}>
                                <p className="memberDesignation">CEO</p>
                                <p className="memberName">Vincent R</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={4} md={4} xs={6}>
                        <Row className="memberContainer">
                            <Col lg={4} md={12} xs={12}>
                                <Image className="memberImage" alt="profile icon" loading="lazy" fluid={true} src={Ars} />
                            </Col>
                            <Col lg={8} md={12} xs={12}>
                                <p className="memberDesignation">CEO</p>
                                <p className="memberName">Vincent R</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={4} md={4} xs={6}>
                        <Row className="memberContainer">
                            <Col lg={4} md={12} xs={12}>
                                <Image className="memberImage" alt="profile icon" loading="lazy" fluid={true} src={Ars} />
                            </Col>
                            <Col lg={8} md={12} xs={12}>
                                <p className="memberDesignation">CEO</p>
                                <p className="memberName">Vincent R</p>
                            </Col>
                        </Row>
                    </Col>

                    <Col lg={4} md={4} xs={6} className="memberContainer ">
                        <Row className="moreMemberContainer">
                            <Col lg={12}>
                                <p className="moreMemberNumber">+5</p>
                                <p className="moreMemberText">Other Monster Roars <br /> Smart Team Member</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

        </>
    )

}