import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";


export default function PostDetail(props) {
    const [posts, setPost] = useState([]);
    const [postId, setPostID] = useState([]);

    useEffect(()=>{
        console.log(posts.useHistory())
      setPost(props.posts)
      setPostID(props)
    },[props])
    // console.log(posts.map(q => q.guid))
    // console.log(posts.filter(q => q.guid))
    return (
        <div className="listing-container-item">
            <p>test123</p>
        </div>
    )
}