import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const NFTAsNavFor = React.lazy(() => import('../partials/NFTAsNavFor'));


export default function NftCollection({ history }) {



    return (
        <>
            <Container>
                <Row className="sectionRow nftCollectionRow">
                    <Col lg={12}>
                        <h1 className="sectionHeading nftCollectionHeading">NFT <span className="nftCollectionHeadingPart">TRUCK</span> COLLECTION</h1>
                    </Col>
                    <Col lg={12}>
                        <NFTAsNavFor/>
                    </Col>
                </Row>
            </Container>

        </>
    )

}