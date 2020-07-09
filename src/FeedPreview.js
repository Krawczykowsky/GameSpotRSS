import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import App from "./components/App";
import PostDetail from "./components/PostDetail";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import { Spinner } from "react-bootstrap";

let Parser = require("rss-parser");
let parser = new Parser({
  customFields: {
    item: [["media:content", "mediaContent", { keepArray: true }]],
  },
});
function FeedPreview(props) {
  const [error, setError] = useState(null);
  const [posts, setPost] = useState([]);
  const [reload, setReload] = useState(true);
  const [isLoad, setIsLoad] = useState(false);
  const rssUrl =
  "https://fathomless-earth-31568.herokuapp.com/" + props.url;
  useEffect(() => {
    async function feedData() {
      await parser.parseURL(rssUrl, function (err, res) {
        if (err) {
          setError(true);
          setIsLoad(true);
        } else {
          setPost(res.items);
          setIsLoad(true);
        }
      });
    }
    feedData();
    console.log("RELOAD")
  }, [reload]);

  const reloadHandler = () => {
    setReload(!reload);
  };
  if (error) {
    return (
      <div className="reload-container" onClick={reloadHandler}>
        <p>Connection error...</p><br></br>
        <div>
        Reload <i className="fa fa-refresh" aria-hidden="true"></i>
        </div>
        
      </div>
    );
  } else if (!isLoad) {
    return (
      <div className="load-container">
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );
  } else {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/"
            exact
            component={() => (
              <App posts={posts} error={error} reload={() => reloadHandler} />
            )}
          />
          <Route path="/post/:id" exact component={PostDetail} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default FeedPreview;
