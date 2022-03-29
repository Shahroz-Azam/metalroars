import React,{Suspense} from 'react';
import Container from 'react-bootstrap/Container'
import Spinner from "../components/spinner/spinner";

const NewsFeed = React.lazy(() => import('../components/homepage/NewsFeed'));

export default function HomePage({ history }) {
    return(
        <>
          <Suspense fallback={<Spinner />}>
              <Container fluid className="newsFeedContainer">
                  <NewsFeed />
              </Container>
          </Suspense>
        </>
    )
}