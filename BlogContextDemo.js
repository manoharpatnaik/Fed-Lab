import React from 'react';
import { useBlog } from './BlogContext';

function BlogContextDemo() {
  const { post, author } = useBlog();

  return (
    <div>
      <h1>Blog Post</h1>
      <p>Topic: {post}</p>
      <p>Author: {author}</p>
    </div>
  );
}

export default BlogContextDemo;
