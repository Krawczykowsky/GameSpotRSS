import React, { useEffect, useState } from "react";

export default function PostDetail(props) {
  const [posts, setPost] = useState([]);
  const [postsUrl, setPostUrl] = useState();


  useEffect(() => {
    setPost(props.location.state.post.post);
    setPostUrl(props.location.state.post.post.mediaContent[0]["$"].url)
  }, [props]);
  
  return (
    <div className="listing-container-item">
      <img src={postsUrl}/>
      <p>{posts.title}</p>
      {/* {posts.forEach(q => <p>{q.title}</p>)} */}
    </div>
  );
}
