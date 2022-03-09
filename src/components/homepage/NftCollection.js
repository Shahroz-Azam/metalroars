import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const AsNavFor = React.lazy(() => import('../partials/AsNavFor'));


export default function NftCollection({ history }) {



    return (
        <>
            <Container>
                <Row className="sectionRow nftCollectionRow">
                    <Col lg={12}>
                        <h1 className="sectionHeading nftCollectionHeading">NFT <span className="nftCollectionHeadingPart">Monster</span> Collection</h1>
                    </Col>
                    <Col lg={12}>
                        <AsNavFor/>
                    </Col>
                </Row>
            </Container>

        </>
    )

}