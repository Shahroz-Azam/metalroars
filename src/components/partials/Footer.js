import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Logo from "../../assets/images/logo.svg";
import OMedium from '../../assets/images/footer/footerNav/OrangeMedium.svg'
import OTelegram from '../../assets/images/footer/footerNav/OrangeTelegram.svg'
import OTwitter from '../../assets/images/footer/footerNav/OrangeTwitter.svg'
import OYoutube from '../../assets/images/footer/footerNav/OrangeYoutube.svg'
import ODiscord from '../../assets/images/footer/footerNav/OrangeDiscord.svg'
import scroll from '../../assets/images/social/scoral up.svg'
export default function Footer({ history }) {
    function scrollToTop(){
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return(
        <footer className="footer">
            <Container fluid className="footerContainer">
                <Row className="footerRow d-flex justify-content-center">
                    <Col className="footerLogo-col text-center" lg={{ span: 4, offset: 0 }} md={{ span: 4, offset: 0 }} xs={{span: 12, offset: 0}}>
                        <Image className="footerLogo" src={Logo} alt="metal roar logo" />
                    </Col>
                </Row>
                <Row className="footerRow2 d-flex justify-content-center">
                    <Col lg={2} xs={2}>
                        <a target="_blank" rel="noreferrer" href="https://medium.com/@metalroars"><Image className="footerSocialImage" src={OMedium} alt="medium logo" /></a>
                        {/*<h4 className="footer-social-link">@metalroars</h4>*/}
                    </Col>
                    <Col lg={2} xs={2}>
                        <a target="_blank" rel="noreferrer" href="https://t.me/metalroars"><Image className="footerSocialImage" src={OTelegram} alt="tele logo" /></a>
                        {/*<h4 className="footer-social-link">@metalroars</h4>*/}
                    </Col>
                    <Col lg={2} xs={2}>
                        <a target="_blank" rel="noreferrer" href="https://twitter.com/Metal_Roars"><Image className="footerSocialImage" src={OTwitter} alt="twitter logo" /></a>
                        {/*<h4 className="footer-social-link">@metalroars</h4>*/}
                    </Col>
                    <Col lg={2} xs={2}>
                        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCNHnVkj0RBT32MG7W6Op_9Q"><Image className="footerSocialImage" src={OYoutube} alt="instagram logo" /></a>
                        {/*<h4 className="footer-social-link">@metalroars</h4>*/}
                    </Col>
                    <Col lg={2} xs={2}>
                        <a target="_blank" rel="noreferrer" href="/#"><Image className="footerSocialImage" src={ODiscord} alt="linkdin logo" /></a>
                        {/*<h4 className="footer-social-link">@metalroars</h4>*/}
                    </Col>
                </Row>
                <Row className="footerBtns d-flex justify-content-center">
                    <Col xl={2} lg={3} xs={4} className="footerBtn">
                       <a href="https://metal-roars.gitbook.io/metal-roars-whitepaper-v.1-1/" className="footerLink text-center">WHITEPAPER</a>
                    </Col>
                    <Col xl={2} lg={3} xs={4} className="footerBtn">
                        <a href="/#" className="footerLink marketplaceButton text-center">Market Place</a>
                    </Col>
                    <Col xl={2} lg={3} xs={4} className="footerBtn">
                        <a href="https://drive.google.com/file/d/1zAJJ5V9jcmE1bO8azyP8Dqv3mqKsPn83/view?usp=sharing" className="footerLink text-center">Pitch Deck</a>
                    </Col>
                </Row>
                <Row className="footerRow4 d-flex justify-content-center">
                    <Col lg={{ span: 12, offset: 0 }} md={{ span: 12, offset: 0 }} xs={{span: 12, offset: 0}}>
                        <a href="#top" onClick={scrollToTop}>
                            <Image className="footerSocialImage" src={scroll} alt="scroll logo" />
                            <h4 className="footerScrollText">Scroll To Top</h4>
                        </a>
                    </Col>
                </Row>

            </Container>
            <Container className="footerRow4 d-flex justify-content-center">
                <p>Address: M9B 4L5 CA</p>
            </Container>

        </footer>
    )
}