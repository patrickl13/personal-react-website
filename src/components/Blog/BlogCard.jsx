import React from 'react';
import '../../style/main.scss';

import { Link } from 'react-router-dom';

const BlogCard = (props) => {

    const {ID, excerpt, title} = props.post;

    
    return(
        <div className='blog-card'>
            <h3 className='title'> {title} </h3>
            <div className='blog-excerpt'dangerouslySetInnerHTML={{ __html: excerpt }}/> 
            <div className='blog-button'>
                <Link style={{ textDecoration: 'none' }} to={"/blog/" + ID}>
                    <div className="button-v1"> 
                    Read More 
                    </div>
                </Link>
            </div>
        </div>
        
        
    );

};

export default BlogCard;