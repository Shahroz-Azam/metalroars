import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
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
                <MDBFooter bgColor='none'  className='text-center text-lg-start text-white'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='https://twitter.com/Metal_Roars' className='me-4 text-reset'>
            <i className='fab fa-twitter'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-instagram'></i>
          </a>
          <a href='https://www.youtube.com/channel/UCNHnVkj0RBT32MG7W6Op_9Q' className='me-4 text-reset'>
            <i className='fab fa-youtube'></i>
          </a>
          <a href='https://t.me/metalroars' className='me-4 text-reset'>
            <i className='fab fa-telegram'></i>
          </a>

        </div>
      </section>

      <section className=''>
        <div className='container text-center text-md-start mt-5'>
          <div className='row mt-3'>
            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
              <h1 className='text-uppercase fw-bold mb-4'>
             < Image className="sectionImage roadMapImg" src={Logo} alt="game play image" />
             
              
              </h1>
              <p>
              </p>
            </div>

            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>MAJOR LINK</h6>
              <p>
                <a href='#!' className='text-reset'>
                  WHITEPAPER
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  INVESTMENTS DECK
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  NFT GRAPHICS
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  MARKETPLACE
                </a>
              </p>
            </div>

            <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>MENU</h6>
              <p>
                <a href='#!' className='text-reset'>
                  HOME
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  MARKETPLACE
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  STAKING
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  VESTING
                </a>
              </p>
            </div>

            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact us</h6>
              <p>
                <i className='fas fa-home me-3'></i> Address: M9B 4L5 CA
              </p>
              <p>
                <i className='fas fa-envelope me-3'></i>
                contact@metalroars.com
              </p>
              
             
            </div>
          </div>
        </div>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.10)' }}>
        © 2022 Copyright:
        <a className='text-reset fw-bold' href='https://metalroars.com/'>
           metalroars
        </a>
      </div>
    </MDBFooter>
                </Row>

            </Container>
        </footer>
    )
}
