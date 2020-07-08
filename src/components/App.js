import React, { useEffect, useState } from "react";
import Search from "./Search";
import PostListing from "./PostListing";

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
    setReload(props.reload)
  }, [props]);
  const getInputValue = (queries) => {
    setQuery(queries);
    setIsLoaded(true);
    if (queries.length > 0) {
      setShowAll(false);
      setShowAllQuery(false);
    } else {
      setShowAllQuery(true);
    }
  };
  const reloadHandler = () => {
    reload()
  }
  if (error) {
    return (
    <div>
      Error..
      <button onClick={reloadHandler}>Reload</button>
    </div>);
  } else {
    return (
      <div>
        <Search posts={posts} getInputValue={() => getInputValue} />
        <div className="listing-container">
          {showAll
            ? posts.map((post) => <PostListing post={post} key={post.guid} />)
            : query.map((post) => <PostListing post={post} key={post.guid} />)}
        </div>
        {showAllQuery ? <p>Brak wyników</p> : null}
      </div>
    );
  }
}
export default App;
