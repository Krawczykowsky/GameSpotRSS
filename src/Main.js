import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import "./App.css";
import App from './components/App';
import PostDetail from "./components/PostDetail";
let Parser = require("rss-parser");

function Main() {
  const [error, setError] = useState(null);
  const [posts, setPost] = useState([]);
  let parser = new Parser({
    customFields: {
      item: [
        ['media:content', 'mediaContent', { keepArray: true }],
      ]
    }
  });
  
  const rssUrl =
    "https://fathomless-earth-31568.herokuapp.com/https://www.gamespot.com/feeds/mashup/";
  useEffect(() => {

    parser.parseURL(rssUrl, function (err, res) {
      if (err) {
        setError(true)
      };
      setPost(res.items)
    });

  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={()=><App posts={posts} error={error}/>} />
        <Route path="/post/:id" exact component={()=> <PostDetail posts={posts} />} />

      </Switch>
    </BrowserRouter>

  )

}
export default Main;