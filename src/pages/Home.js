import React,{Suspense} from 'react';
import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
// import Header from "../partials/Header";
// import Footer from "../partials/Footer";
// import Banner from "./Banner";
// import GamePlay from "./GamePlay";
// import FreePlay from "./FreePlay";
// import RoadMap from "./RoadMap";
// import OurTeam from "./OurTeam";
// import Advisors from "./Advisors";
// import NftCollection from "./NftCollection";
// import NewsFeed from "./NewsFeed";
// import TokonomicsDistribution from "./TokonomicsDistribution";
import Spinner from "../components/spinner/spinner";
// const Header = React.lazy(() => import('../components/partials/Header'));
// const Footer = React.lazy(() => import('../components/partials/Footer'));
const Banner = React.lazy(() => import('../components/homepage/Banner'));
const GamePlay = React.lazy(() => import('../components/homepage/GamePlay'));
const FreePlay = React.lazy(() => import('../components/homepage/FreePlay'));
const RoadMap = React.lazy(() => import('../components/homepage/RoadMap'));
const OurTeam = React.lazy(() => import('../components/homepage/OurTeam'));
// const Advisors = React.lazy(() => import('./Advisors'));
const NftCollection = React.lazy(() => import('../components/homepage/NftCollection'));
const GameAssets = React.lazy(() => import('../components/homepage/GameAssets'));
const NewsFeed = React.lazy(() => import('../components/homepage/NewsFeed'));
const TokenomicsDistribution = React.lazy(() => import('../components/homepage/TokenomicsDistribution'));
const Technology = React.lazy(() => import('../components/homepage/Technology'));
const Faq = React.lazy(() => import('../components/homepage/Faq'));

export default function HomePage({ history }) {
    return(
        <>
            <Suspense fallback={<Spinner />}>
                {/* <Container fluid  className="headerContainer">
                    <Header />
                </Container> */}
                <Container fluid id="home" className="bannerContainer padding-zero">
                    <Banner />
                </Container>
                <Container fluid id="gameplay" className="gamePlayContainer">
                    <GamePlay/>
                </Container>
                <Container fluid className="freeToPlayContainer">
                    <FreePlay/>
                </Container>
                <Container fluid id="roadmap" className="roadMapContainer">
                    <RoadMap/>
                </Container>
                <Container fluid id="nft" className="nftCollectionContainer">
                    <NftCollection />
                </Container>
                <Container fluid className="gameAssetsContainer">
                    <GameAssets />
                </Container>
                <Container fluid className="newsFeedContainer">
                    <NewsFeed />
                </Container>
                <Container fluid id="tokenomics" className="tokenomicsContainer">
                    <TokenomicsDistribution />
                </Container>
                <Container fluid className="mrTeamContainer">
                    <OurTeam/>
                </Container>
                <Container fluid className="technologyContainer">
                    <Technology />
                </Container>
                <Container fluid className="faqContainer">
                    <Faq />
                </Container>
                {/* <Container fluid className="footerContainer">
                    <Footer/>
                </Container> */}

            </Suspense>

        </>

    )
}