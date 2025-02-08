import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/Templates/Navbar';
import Footer from '@/Templates/Footer';
import Blogs from '@/layouts/Blog/Blogs';

const BlogPage = () => {
  return (
    <div>
      <Helmet>
        <title>Ridoana - Blog</title>
        <meta name="description" content="Stay updated with the latest news and articles on Ridoana's blog." />
      </Helmet>
      <Navbar />
      <Blogs />
      <Footer />
    </div>
  );
};

export default BlogPage;
