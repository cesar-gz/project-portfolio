import React from 'react';
import { useParams } from 'react-router-dom';
import "./index.scss";

const BlogPost = () => {
  const { slug } = useParams();

  // in a real application I would fetch the blog post data based on the slug
  // for now we'll just display the slug
  return (
    <div className='blog-post'>
      <h1>Blog Post: {slug}</h1>
      <p>This is a placeholder for the blog post content.</p>
    </div>
  );
};

export default BlogPost;
