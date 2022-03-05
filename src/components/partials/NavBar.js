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
					<Row>
						<Col lg={12}>
							<Container className="upperNav">
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
					<Row>
						<Col lg={12}>
							<Container fluid>
								<Row className="nav-line"></Row>
							</Container>
						</Col>
					</Row>
					<Row>
						<Col lg={12}>
							<Container>
								<Row>
									<Col lg={4}>1 of 3</Col>
									<Col lg={4}>2 of 3</Col>
									<Col lg={4}>3 of 3</Col>
								</Row>
							</Container>
						</Col>

					</Row>
					</Container>

					{/* <div id="topbar-follow-us">
						<Row className="topbar-follow-us-title-row">
							<Col lg={{ span: 4, offset: 0 }} md={{ span: 2, offset: 0 }} xs={{ span: 2, offset: 0 }}>
								<p>Follow Us : </p>
							</Col>
							<Col lg={{ span: 2, offset: 0 }} md={{ span: 2, offset: 0 }} xs={{ span: 2, offset: 0 }}>

								<a target="_blank" rel="noreferrer" href="https://twitter.com/Metal_Roars"><Image width={20} height={20} src={tw} alt="twitter icon" /></a>
							</Col>

							<Col lg={{ span: 2, offset: 0 }} md={{ span: 2, offset: 0 }} xs={{ span: 2, offset: 0 }}>
								<a target="_blank" rel="noreferrer" href="/#"><Image width={20} height={20} src={ins} alt="instagram icon" /></a>
							</Col>
							<Col lg={{ span: 2, offset: 0 }} md={{ span: 2, offset: 0 }} xs={{ span: 2, offset: 0 }}>
								<a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCNHnVkj0RBT32MG7W6Op_9Q"><Image width={20} height={20} src={yt} alt="youtube icon" /></a>
							</Col>
							<Col lg={{ span: 2, offset: 0 }} md={{ span: 2, offset: 0 }} xs={{ span: 2, offset: 0 }}>
								<a target="_blank" rel="noreferrer" href="/#"><Image width={20} height={20} src={em} alt="email icon" /></a>
							</Col>
						</Row>
					</div>
					<Nav className="navbar-left">
						<Nav.Link href="#home" className="home-link">Home</Nav.Link>
						<Nav.Link href="#road-map">Road Map</Nav.Link>
						<Nav.Link href="#whitepaper">Whitepaper</Nav.Link>
					</Nav>
					<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
					<Image className="header-logo" loading="lazy" src={Logo} width="200px" alt="metal roar logo" fluid={true} />
					<Nav className="navbar-right">
						<Nav.Link href="#tokonomic">Tokonomic</Nav.Link>
						<Nav.Link href="#team">Team</Nav.Link>
						<Nav.Link href="#ido">Ido</Nav.Link>
					</Nav> */}
				</Navbar.Collapse>
			</Navbar>

			{/* <Navbar expand="lg" variant="dark">
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <div id="topbar-follow-us">
                            <Row className="topbar-follow-us-title-row">
                                <Col lg={{ span: 12, offset: 0 }} md={{ span: 12, offset: 0 }} xs={{span: 12, offset: 0}}>
                                    <p>Follow Us : </p>
                                </Col>
                            </Row>
                        </div>
                        <div id="topbar-follow-us-icon">
                            <Row className="topbar-follow-us-image-row">

                                <Col lg={{ span: 2, offset: 0 }} md={{ span: 2, offset: 0 }} xs={{span: 2, offset: 0}}>
                                    <a target="_blank" rel="noreferrer" href="https://twitter.com/Metal_Roars"><Image width={20} height={20} src={tw} alt="twitter icon"/></a>
                                </Col>
                                <Col lg={{ span: 2, offset: 0 }} md={{ span: 2, offset: 0 }} xs={{span: 2, offset: 0}}>
                                    <a target="_blank" rel="noreferrer" href="/#"><Image width={20} height={20} src={ins} alt="instagram icon"/></a>
                                </Col>
                                <Col lg={{ span: 2, offset: 0 }} md={{ span: 2, offset: 0 }} xs={{span: 2, offset: 0}}>
                                    <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCNHnVkj0RBT32MG7W6Op_9Q"><Image width={20} height={20} src={yt} alt="youtube icon"/></a>
                                </Col>
                                <Col lg={{ span: 2, offset: 0 }} md={{ span: 2, offset: 0 }} xs={{span: 2, offset: 0}}>
                                    <a target="_blank" rel="noreferrer" href="/#"><Image width={20} height={20} src={em} alt="email icon"/></a>
                                </Col>
                            </Row>
                        </div>
                        <Nav className="navbar-left">
                            <Nav.Link href="#home" className="home-link">Home</Nav.Link>
                            <Nav.Link href="#road-map">Road Map</Nav.Link>
                            <Nav.Link href="#whitepaper">Whitepaper</Nav.Link>
                        </Nav>
                        <Image className="header-logo" loading="lazy" src={Logo} width="200px" alt="metal roar logo" fluid={true} />
                        <Nav className="navbar-right">
                            <Nav.Link href="#tokonomic">Tokonomic</Nav.Link>
                            <Nav.Link href="#team">Team</Nav.Link>
                            <Nav.Link href="#ido">Ido</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar> */}
		</>
	)
}