import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_BLOG_POSTS } from '../data/blog';

const BlogPostPage: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const post = MOCK_BLOG_POSTS.find(p => p.id === postId);

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6 py-16">
        <div className="bg-white rounded-3xl border-4 border-dashed border-[#FF6F61] p-12 shadow-lg max-w-2xl">
          <div className="text-6xl text-[#FFC145]">🤔</div>
          <h1 className="text-4xl font-extrabold text-[#0B7CC1] mt-4">Post Not Found!</h1>
          <p className="mt-2 text-lg text-gray-500">Looks like this page swam away. Let's get you back to shore.</p>
          <Link to="/blog" className="mt-8 inline-block bg-[#16B6A1] text-white font-bold text-lg px-8 py-3 rounded-full shadow-lg transition-transform hover:scale-105">
            Back to All Posts
          </Link>
        </div>
      </div>
    );
  }

  // A simple way to add styling to HTML content from a string
  const styledContent = post.content
    .replace(/<h3>/g, '<h3 class="text-3xl font-bold text-[#0B7CC1] mt-8 mb-4">')
    .replace(/<ul>/g, '<ul class="list-disc list-inside space-y-2 pl-4">')
    .replace(/<p>/g, '<p class="mb-4">');

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <article>
          <header className="text-center">
            <span className="bg-[#FFC145] text-white font-semibold px-3 py-1 rounded-full text-sm">{post.category}</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#0B7CC1] mt-4">{post.title}</h1>
            <p className="text-gray-500 mt-4">By {post.author} on {post.date}</p>
          </header>

          <div className="my-8 rounded-3xl overflow-hidden border-4 border-[#16B6A1] shadow-lg">
            <img src={post.imageUrl} alt={post.title} className="w-full h-auto object-cover" />
          </div>

          <div 
            className="text-lg text-gray-700 leading-relaxed" 
            dangerouslySetInnerHTML={{ __html: styledContent }} 
          />
          
          <div className="mt-12 text-center">
            <Link to="/blog" className="bg-[#16B6A1] text-white font-bold text-lg px-8 py-3 rounded-full shadow-lg transition-transform hover:scale-105">
              ← Back to All Posts
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPostPage;