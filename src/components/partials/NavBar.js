import React from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Image from 'react-bootstrap/Image'
import Logo from '../../assets/images/nav/header-logo.png'
import WMedium from '../../assets/images/nav/navSocial/medium.png'
import WTwitter from '../../assets/images/nav/navSocial/Twitter.png'
import WYoutube from '../../assets/images/nav/navSocial/youtube.png'
import WTelegram from '../../assets/images/nav/navSocial/telegramWhite.png'
import WDiscord from '../../assets/images/nav/navSocial/discordWhite.png'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Scroll from "react-scroll";

// import {Link} from 'react-router-dom';

export default function NavBar({ history }) {
	return (
		<>

			<Navbar expand="lg" variant="dark">
			<Image className="nav-logo" loading="lazy" src={Logo} alt="metal roar logo" fluid={true} />
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Container fluid>
						<Row className="upperNav">
							<Col lg={12}>
								<Container>
									<Row>
										<Col lg={4} className="followContainer">
											<span>Follow Us:</span>
											<a target="_blank" rel="noreferrer" href="https://medium.com/@metalroars"><Image className="navIcons" src={WMedium} /></a>
											<a target="_blank" rel="noreferrer" href="https://twitter.com/Metal_Roars"><Image className="navIcons" src={WTwitter} /></a>
											<a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCNHnVkj0RBT32MG7W6Op_9Q"><Image className="navIcons" src={WYoutube} /></a>
											<a target="_blank" rel="noreferrer" href="https://t.me/metalroars"><Image className="navIcons" src={WTelegram} /></a>
											<a target="_blank" rel="noreferrer" href="/#"><Image className="navIcons" src={WDiscord} /></a>
										</Col>
										<Col lg={4} className="imageContainer">
											<Image className="nav-logo" loading="lazy" src={Logo} width="200px" alt="metal roar logo" fluid={true} />
										</Col>
										<Col lg={4}>
											
										</Col>
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
												<Scroll.Link to="home" spy={true} smooth={false} offset={-70} href="#home" className="nav-link">Home</Scroll.Link>
												<Scroll.Link to="gameplay" spy={true} smooth={false} offset={-70}  href="#gameplay" className="nav-link">GamePlay</Scroll.Link>
												<Scroll.Link to="nft" spy={true} smooth={false} offset={-70}  href="#nft" className="nav-link">NFT Trucks</Scroll.Link>
											</Nav>
										</Col>
										<Col lg={4}></Col>
										<Col lg={4}>
											<Nav className="navbar-right">
												<Scroll.Link to="tokenomics" spy={true} smooth={false} offset={-70}  href="#tokenomics" className="nav-link">Tokenomics</Scroll.Link>
												<Scroll.Link to="roadmap" spy={true} smooth={false} offset={-70}  href="#roadmap" className="nav-link">RoadMap</Scroll.Link>
												<Scroll.Link to="marketplace" spy={true} smooth={false} offset={-70}  href="#marketplace" className="nav-link">Marketplace</Scroll.Link>
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