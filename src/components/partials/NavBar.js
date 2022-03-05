import React from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from 'react-bootstrap/Image'
import Logo from '../../assets/images/header-logo.png'
import fb from '../../assets/images/social/Facebook.png'
import yt from '../../assets/images/social/youtube.png'
import ins from '../../assets/images/social/insta.png'
import tw from '../../assets/images/social/Twitter.png'
import em from '../../assets/images/social/Email.png'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function NavBar({ history }) {
	return (
		<>

			<Navbar expand="lg" variant="dark">
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Container fluid>
						<Row className="upperNav">
							<Col lg={12}>
								<Container>
									<Row>
										<Col lg={4} className="followContainer">
											<span>Follow Us:</span>
											<a target="_blank" rel="noreferrer" href="/#"><Image className="navIcons" src={fb} /></a>
											<a target="_blank" rel="noreferrer" href="https://twitter.com/Metal_Roars"><Image className="navIcons" src={tw} /></a>
											<a target="_blank" rel="noreferrer" href="/#"><Image className="navIcons" src={ins} /></a>
											<a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCNHnVkj0RBT32MG7W6Op_9Q"><Image className="navIcons" src={yt} /></a>
											<a target="_blank" rel="noreferrer" href="/#"><Image className="navIcons" src={em} /></a>
										</Col>
										<Col lg={4} className="imageContainer">
											<Image className="nav-logo" loading="lazy" src={Logo} width="200px" alt="metal roar logo" fluid={true} />
										</Col>
										<Col lg={4}></Col>
									</Row>
								</Container>
							</Col>
						</Row>
						<Row className="nav-line">
						</Row>
						<Row className="lowerNav">
							<Col lg={12}>
								<Container>
									<Row>
										<Col lg={4} >
											<Nav className="navbar-left">
												<Nav.Link href="#home">Home</Nav.Link>
												<Nav.Link href="#road-map">GamePlay</Nav.Link>
												<Nav.Link href="#whitepaper">RoadMap</Nav.Link>
											</Nav>
										</Col>
										<Col lg={4}></Col>
										<Col lg={4}>
											<Nav className="navbar-right">
												<Nav.Link href="#tokonomic">Tokonomic</Nav.Link>
												<Nav.Link href="#team">Team</Nav.Link>
												<Nav.Link href="#faqs">FAQS</Nav.Link>
											</Nav>
										</Col>
									</Row>
								</Container>
							</Col>
						</Row>
					</Container>
				</Navbar.Collapse>
			</Navbar>
		</>
	)
}