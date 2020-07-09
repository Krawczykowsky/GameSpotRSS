import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

export default function PostDetail(props) {
  const [posts, setPost] = useState([]);
  const [postsUrl, setPostUrl] = useState();
  const [history, setHistory] = useState();

  useEffect(() => {
    setPost(props.location.state.post.post);
    setPostUrl(props.location.state.post.post.mediaContent[0]["$"].url);
    setHistory(props.history);
  }, [props]);
  // setPostTxt(posts.content)

  // setPostTxt(test)
  // console.log()
  const createMarkup = () => {
    return { __html: posts.content };
  };
  const MyComponent = () => {
    return (
      <div className="post-text" dangerouslySetInnerHTML={createMarkup()} />
    );
  };
  return (
    <Container>
      <div className="post-detail">
        <div className="back-btn" onClick={() => history.goBack()}>
          <div className="back-btn__wrapper">
            <i class="fa fa-chevron-left" aria-hidden="true"></i> Back
          </div>
        </div>

        <h1>{posts.title}</h1>
        <div className="post-image">
          <img src={postsUrl} />
        </div>
        {MyComponent()}
      </div>
    </Container>
  );
}
