import React from "react";
// import Carousel from 'react-bootstrap/Carousel';
import Tokenomics1 from '../../assets/images/tokenomics/tokenomicsImg.png'
import Tokenomics2 from '../../assets/images/tokenomics/tokenomicsImg2.png'
import Image from 'react-bootstrap/Image'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
// import Container from "react-bootstrap/Container";
export default function TokenomicsDistribution({ history }) {
    return (
        <>
            <Container>
                <Row className="sectionRow tokenomicsRow">
                    <Col lg={6}>
                        <Image className="sectionImage tokenomicsImg-lg" loading="lazy" src={Tokenomics1} alt="free to play image" fluid={true} />
                    </Col>
                    <Col lg={6}>
                        <h1 className="sectionHeading tokenomicsHeading">TOKENOMICS <br /> DISTRIBUTION</h1>
                        <Image className="sectionImage tokenomicsImg-sm" loading="lazy" src={Tokenomics1} alt="free to play image" fluid={true} />
                        <Image className="sectionImage tokenomicsImg2" loading="lazy" src={Tokenomics2} alt="free to play image" fluid={true} />
                    </Col>
                </Row>
            </Container>

        </>
    )

}