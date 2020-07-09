import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'


export default function PostListing(props) {
    const [post, setPosts] = useState(props)
    useEffect(() => {
        setPosts(props)
    }, [props])

    const imgUrl = post.post.mediaContent[0]["$"].url
    const {title,pubDate, guid} = post.post
    return (
        <div className="post-item">
            <Link to={{ pathname: '/post/' + guid, state: { post } }} >
            <div className="post-wrapper">
                <div className="post-wrapper__image">
                    <img src={imgUrl} alt="imgpost" />
                    <div className="post-wrapper__image--overlay"></div>
                </div>
                <div className="post-wrapper__content">
                    <h3>{title}</h3>
                    <p>Posted on {pubDate.slice(5,16)}</p>
                </div>
            </div>
            </Link>

        </div>
    )
}
