import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const PostCard = ({ id, title, image }) => {
  return (
    <Link
      to={`/post/${id}`}
      className="p-4 flex justify-between flex-col shadow-lg cursor-pointer hover:shadow-2xl">
      <span className="text-center font-bold">{title}</span>
      <img className="w-full object-cover min-h-[200px]" src={image} />{' '}
    </Link>
  );
};

export default PostCard;
