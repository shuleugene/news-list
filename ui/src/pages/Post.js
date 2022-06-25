import React from 'react';
import usePostById from '../hooks/usePostbyId';
import { useParams } from 'react-router-dom';

const Post = () => {
  const { postId } = useParams();
  const post = usePostById(postId);

  if (!post) return null;

  return (
    <div className="flex flex-col items-center">
      <span className="my-4 text-3xl font-bold text-center">{post.title}</span>

      <img className="w-full h-[200px] object-cover" src={post.image} />

      <span className="my-4 text-2xl text-left">{post.description}</span>
    </div>
  );
};

export default Post;
