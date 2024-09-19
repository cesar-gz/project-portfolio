import React from 'react';
import { Link } from 'react-router-dom';
import "./index.scss";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' });
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
};

const Blog = () => {
  const blogPosts = [
    { id: 1, title: "Getting Started with React", date: "2024-03-15", slug: "getting-started-with-react" },
    { id: 2, title: "CSS Grid Layout Explained", date: "2024-02-28", slug: "css-grid-layout-explained" },
    { id: 3, title: "JavaScript ES6 Features", date: "2024-01-10", slug: "javascript-es6-features" },
    // ...
  ];

  // Sort blog posts by date (most recent first)
  const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className='blog-page'>
      <h1 className='page-title'>Blog Posts</h1>
      <table className='blog-table'>
        <tbody>
          {sortedPosts.map(post => (
            <tr key={post.id} className='blog-post-row'>
              <td className='post-date'>{formatDate(post.date)}</td>
              <td className='post-title'>
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Blog;
