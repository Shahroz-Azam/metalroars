import React from "react";
// import Carousel from 'react-bootstrap/Carousel';
// import Profile from '../../assets/images/team.jpg'
import Ahmed from '../../assets/images/team/ahmed.jpeg'
import Ars from '../../assets/images/team/arslan-q.png'
import Rao from '../../assets/images/team/rao.jpg'
import Saad from '../../assets/images/team/saad.jpeg'
import Waleed from '../../assets/images/team/waleed.jpeg'
import Faran from '../../assets/images/team/Faran Q.jpeg'
import Vincent from '../../assets/images/team/Vincent-R.png'
import Shahroz from '../../assets/images/team/shahroz.png'
import Ann from '../../assets/images/team/ann wiech.png'
import Image from 'react-bootstrap/Image'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
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
                                <Image className="memberImage" alt="profile icon" loading="lazy" fluid={true} src={Vincent} />
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
                                <Image className="memberImage" alt="profile icon" loading="lazy" fluid={true} src={Faran} />
                            </Col>
                            <Col lg={8} md={12} xs={12}>
                                <p className="memberDesignation">Co-Founder/CTO</p>
                                <p className="memberName">Faran Q</p>
                            </Col>
                        </Row>
                    </Col>

                    <Col lg={4} md={4} xs={6}>
                        <Row className="memberContainer">
                            <Col lg={4} md={12} xs={12}>
                                <Image className="memberImage" alt="profile icon" loading="lazy" fluid={true} src={Saad} />
                            </Col>
                            <Col lg={8} md={12} xs={12}>
                                <p className="memberDesignation">CMO</p>
                                <p className="memberName">S Bhatti</p>
                            </Col>
                        </Row>
                    </Col>

                    <Col lg={4} md={4} xs={6}>
                        <Row className="memberContainer">
                            <Col lg={4} md={12} xs={12}>
                                <Image className="memberImage" alt="profile icon" loading="lazy" fluid={true} src={Ars} />
                            </Col>
                            <Col lg={8} md={12} xs={12}>
                                <p className="memberDesignation">Game Dev</p>
                                <p className="memberName">Arslan Q</p>
                            </Col>
                        </Row>
                    </Col>

                    <Col lg={4} md={4} xs={6}>
                        <Row className="memberContainer">
                            <Col lg={4} md={12} xs={12}>
                                <Image className="memberImage" alt="profile icon" loading="lazy" fluid={true} src={Rao} />
                            </Col>
                            <Col lg={8} md={12} xs={12}>
                                <p className="memberDesignation">Art Director</p>
                                <p className="memberName">MS Rao</p>
                            </Col>
                        </Row>
                    </Col>

                    <Col lg={4} md={4} xs={6}>
                        <Row className="memberContainer">
                            <Col lg={4} md={12} xs={12}>
                                <Image className="memberImage" alt="profile icon" loading="lazy" fluid={true} src={Ahmed} />
                            </Col>
                            <Col lg={8} md={12} xs={12}>
                                <p className="memberDesignation">Junior Dev</p>
                                <p className="memberName">Ahmed Q</p>
                            </Col>
                        </Row>
                    </Col>

                    <Col lg={4} md={4} xs={6}>
                        <Row className="memberContainer">
                            <Col lg={4} md={12} xs={12}>
                                <Image className="memberImage" alt="profile icon" loading="lazy" fluid={true} src={Ann} />
                            </Col>
                            <Col lg={8} md={12} xs={12}>
                                <p className="memberDesignation">SMM</p>
                                <p className="memberName">Anne</p>
                            </Col>
                        </Row>
                    </Col>

                    <Col lg={4} md={4} xs={6}>
                        <Row className="memberContainer">
                            <Col lg={4} md={12} xs={12}>
                                <Image className="memberImage" alt="profile icon" loading="lazy" fluid={true} src={Shahroz} />
                            </Col>
                            <Col lg={8} md={12} xs={12}>
                                <p className="memberDesignation">Front-End Dev</p>
                                <p className="memberName">Shahroz</p>
                            </Col>
                        </Row>
                    </Col>

                    <Col lg={4} md={4} xs={6}>
                        <Row className="memberContainer">
                            <Col lg={4} md={12} xs={12}>
                                <Image className="memberImage" alt="profile icon" loading="lazy" fluid={true} src={Waleed} />
                            </Col>
                            <Col lg={8} md={12} xs={12}>
                                <p className="memberDesignation">Back-End Dev</p>
                                <p className="memberName">Waleed K</p>
                            </Col>
                        </Row>
                    </Col>

                    <Col lg={4} md={4} xs={6} className="memberContainer ">
                        <Row className="moreMemberContainer">
                            <Col lg={12}>

                            </Col>
                            
                        </Row>
                    </Col>

                    <Col lg={4} md={4} xs={6} className="memberContainer ">
                        <Row className="moreMemberContainer">
                            <Col lg={12}>
                                <p className="moreMemberNumber">+5</p>
                                <p className="moreMemberText">Other Metal Roars <br /> Smart Team Member</p>
                            </Col>
                            
                        </Row>
                    </Col>
                </Row>
            </Container>

        </>
    )

}