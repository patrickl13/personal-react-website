import React, {useState, useEffect} from 'react';
import BlogCard from './BlogCard';
import '../../style/main.scss';

const BlogList = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://public-api.wordpress.com/rest/v1/sites/patrickstewartleduc.wordpress.com/posts")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setPosts(result.posts);
                    console.log(result.posts);
                    console.log(posts);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    return(
        <div>
            <h2 className='title'> Blog List </h2>
            {
                posts.map( post => (
                    <BlogCard/>
                ))
            }
        </div> 
    );
};

export default BlogList;