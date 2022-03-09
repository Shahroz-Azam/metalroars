import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

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
                        <h2> - - Slider with background Section  - - </h2>

                        {/* <AsNavFor/> */}

                    </Col>
                </Row>
            </Container>

        </>
    )

}