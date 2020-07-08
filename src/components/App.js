import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom'


import Search from './Search';
import PostListing from './PostListing';
import PostDetail from "./PostDetail";


function App(props) {

  const [query, setQuery] = useState([]);
  const [showAll, setShowAll] = useState(true);
  const [showAllQuery, setShowAllQuery] = useState(false)

  const [error, setError] = useState(props);
  const [posts, setPost] = useState([]);

  

  useEffect(()=>{
    setError(props.error);
    setPost(props.posts)
  },[props])
  const getInputValue = (queries) => {
    setQuery(queries)
    if (queries.length > 0) {
      setShowAll(false)
      setShowAllQuery(false)
    } else {
      setShowAllQuery(true)
    }
  }

  if (false) {
    return <div>Error..</div>
  }
  else {
    return (
      <div>
        <Search posts={posts} getInputValue={() => getInputValue} />
        <div className="listing-container">
          {showAll ? posts.map(post => <PostListing post={post} />) : query.map(post => <PostListing post={post} />)}
        </div>
        {showAllQuery ? <p>Brak wyników</p> : null}
      </div>
    )
  }
}
export default App;