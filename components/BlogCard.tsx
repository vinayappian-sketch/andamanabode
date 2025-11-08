import React from 'react';
import type { BlogPost } from '../types';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <div className="bg-white rounded-3xl border-4 border-[#0B7CC1] shadow-lg p-5 group transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl flex flex-col">
      <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 border-2 border-[#16B6A1]">
        <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      </div>
      <div className="flex-grow">
        <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
          <span>{post.date}</span>
          <span className="bg-[#FFC145] text-white font-semibold px-2 py-0.5 rounded-full">{post.category}</span>
        </div>
        <h3 className="text-2xl font-bold text-[#0B7CC1] leading-tight mb-2">{post.title}</h3>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
      </div>
      <div className="mt-auto">
        <Link to={`/blog/${post.id}`} className="inline-block w-full text-center bg-[#FF6F61] text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 hover:bg-[#0FA3E2]">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;