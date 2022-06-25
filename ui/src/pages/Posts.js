import React from 'react';
import { useParams } from 'react-router-dom';
import Sidenav from '../components/Sidenav';
import usePostsByCategory from '../hooks/usePostsByCategory';
import PostCard from '../components/PostCard';

const Posts = () => {
  const { categoryId } = useParams();
  const posts = usePostsByCategory(categoryId);

  return (
    <div className="flex min-h-screen">
      <Sidenav />
      <div className="grid grid-cols-6 gap-4">
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>

      {posts.length === 0 && (
        <span className="text-center w-full text-2xl">No post in this category found</span>
      )}
    </div>
  );
};

export default Posts;
