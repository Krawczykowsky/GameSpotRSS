import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'


export default function PostListing(props) {
    const [post, setPosts] = useState(props)
    useEffect(() => {
        setPosts(props)
    }, [props])

    const imgUrl = post.post.mediaContent[0]["$"].url
    const postId = post.post.guid
    // console.log(post.post.)
    // const contentTxt = new String(post.post.content)
    const postTxt = post.post.content
    return (
        <div className="post-item">
            <div className="post-wrapper">
                <div className="post-item__image">
                    <img src={imgUrl} alt="imgpost" />
                </div>
                <div className="post-item__content ">
                    <h3>{post.post.title}</h3>

                    <p>Posted on {post.post.pubDate.slice(5,16)}</p>
                    
                    <div className="btn">
                        <Link to={{ pathname: '/post/' + postId, state: { post } }} >Read more</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}
