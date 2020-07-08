import React, { useEffect, useState } from "react";
import Search from "./Search";
import PostListing from "./PostListing";
import { Container } from "react-bootstrap";

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
          <Search posts={posts} getInputValue={() => getInputValue} />
          <div className="post-container">
            {showAll
              ? posts.map((post) => (
                <PostListing post={post} key={post.guid} />
              ))
              : query.map((post) => (
                <PostListing post={post} key={post.guid} />
              ))}
            {showAllQuery ? <p>Brak wyników</p> : null}
          </div>


        </Container>
      </div>
    );
  }
}
export default App;
