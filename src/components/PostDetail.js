import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

export default function PostDetail(props) {
  const [posts, setPost] = useState([]);
  const [postsUrl, setPostUrl] = useState();
  // const [postTxt, setPostTxt] = useState({});

  useEffect(() => {
    setPost(props.location.state.post.post);
    setPostUrl(props.location.state.post.post.mediaContent[0]["$"].url)
  }, [props]);
  // setPostTxt(posts.content)

  // setPostTxt(test)
  // console.log()

  // postTxt.innerHTML = {test}
  return (
    <Container>
      <div className="post-detail">
        <h1>{posts.title}</h1>
        <div className="post-detail-image">
          <img src={postsUrl} />
        </div>
        <div id="teast">

        </div>
        {/* {postTxt} */}
        {/* {posts.content} */}
      </div>
    </Container>

  );
}
