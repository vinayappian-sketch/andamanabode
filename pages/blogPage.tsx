import React from 'react';
import BlogCard from '../components/BlogCard';
import { MOCK_BLOG_POSTS } from '../data/blog';

const BlogPage: React.FC = () => {
  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-extrabold text-center text-[#0B7CC1]">Andaman Adventures Blog</h1>
        <p className="text-center text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
          Your daily dose of island inspiration, travel tips, and stories from the sunny side of India!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-12">
          {MOCK_BLOG_POSTS.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;