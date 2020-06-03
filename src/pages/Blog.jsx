import React from 'react';
import '../style/main.scss';
import BlogList from '../components/Blog/BlogList';

const Blog = () => {
    
    return (
        <div className='blog'>
            <h2 className='title'> Blog </h2>
            <div className='container'>
                <div className='item'>
                    <div className='text-format content readable'>
                        <p> There is a lot more to me even though I am a quiet person. I hope to use this blog to write about my experiences, what I am thinking about and or working on.</p>
                    </div>
                </div>
            </div>
            
            <BlogList />
        </div>

    );
}

export default Blog;