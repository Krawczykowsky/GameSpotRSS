import React, { useEffect, useState } from 'react';
import { Link} from 'react-router-dom'


export default function PostListing(props) {
    const [post, setPosts] = useState(props)
    useEffect(() => {
        setPosts(props)
    }, [props])

    const imgUrl = post.post.mediaContent[0]["$"].url
    const postId = post.post.guid
    return (
        <div className="listing-container-item">
            {/* <img src={imgUrl} /> */}
            <br></br>
            <p>{post.post.title}</p>
            <Link to={{pathname:'/post/'+postId, state:{post}}} >Read more</Link>
        </div>
    )
}
