import React, { useEffect, useState } from "react";
import Search from "./Search";
import PostListing from "./PostListing";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function App(props) {
  const [query, setQuery] = useState([]);
  const [showAll, setShowAll] = useState(true);
  const [showAllQuery, setShowAllQuery] = useState(false);
  const [error, setError] = useState(props);
  const [posts, setPost] = useState([]);
  const [reload, setReload] = useState(props);

  useEffect(() => {
    setError(props.error);
    setPost(props.posts);
    setReload(props.reload);
  }, [props]);
  const getInputValue = (queries) => {
    setQuery(queries);
    if (queries.length > 0) {
      setShowAll(false);
      setShowAllQuery(false);
    } else {
      setShowAllQuery(true);
    }
  };
  const reloadHandler = () => {
    reload();
  };
  if (error) {
    return (
      <div>
        Error..
        <button onClick={reloadHandler}>Reload</button>
      </div>
    );
  } else {
    return (
      <div>
        <Container>
          <Row>
            <Search posts={posts} getInputValue={() => getInputValue} />
              {showAll
                ? posts.map((post) => (
                    <Col md={6}>
                      <PostListing post={post} key={post.guid} />
                    </Col>
                  ))
                : query.map((post) => (
                    <PostListing post={post} key={post.guid} />
                  ))}
            {showAllQuery ? <p>Brak wyników</p> : null}
          </Row>
        </Container>
      </div>
    );
  }
}
export default App;
