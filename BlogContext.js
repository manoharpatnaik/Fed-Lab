import React, { createContext, useContext } from 'react';

const BlogContext = createContext();

const blogData = {
  post: "Learn useContext Hooks",
  author: "Varun K",
};

export const BlogProvider = ({ children }) => {
  return (
    <BlogContext.Provider value={blogData}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = () => {
  return useContext(BlogContext);
};
