import React from 'react';
import '../style/main.scss';
import BlogList from '../components/Blog/BlogList';

const Blog = () => {
    
    return (
        <div>
            <h2 className='title'> Blog </h2>
            
            <BlogList />
        </div>

    );
}

export default Blog;