import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import GameAssetsImage from '../../assets/images/gameAssets/gameAssetsImage.png'

// const AsNavFor = React.lazy(() => import('../partials/AsNavFor'));

export default function GameAssets({ history }) {

    return (
        <>
            <Container>
                <Row className="sectionRow gameAssetsRow">
                    
                    <Col lg={12}>
                        <h1 className="sectionHeading gameAssetsHeading">In Game Assets</h1>
                    </Col>
                    <Col lg={12} className="gameAssetsSlider">
                    <Image className="sectionImage gameAssetsImg" loading="lazy" src={GameAssetsImage} alt="game Assets Image" fluid={true} />
                    </Col>
                </Row>
            </Container>

        </>
    )

}
