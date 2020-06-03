import React, { useState, useEffect } from 'react';
import '../../style/main.scss';

const BlogPage = (props) => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [post, setPost] = useState([]);

    useEffect(() => {
        fetch("https://public-api.wordpress.com/rest/v1/sites/patrickstewartleduc.wordpress.com/posts/" + props.match.params.id)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setPost(result);

                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    return (
        <div className='blog'>
            <div className='container'>
                <div className='item'>
                    <h3 className='title'> {post.title} </h3>
                    <div className='blog-excerpt' dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>
            </div>
        </div>
    );
};

export default BlogPage;