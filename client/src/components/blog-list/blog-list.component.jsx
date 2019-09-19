import React from 'react';
import { Blog_Post } from '../blog/blog.component';

export const Blog = props => (

        <div className="text-left">
            {props.posts.map(post => (
                <Blog_Post
                    key={post.items.id}
                    post={post} />
            ))}
        </div>
        );
        