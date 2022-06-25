import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import useCategories from '../hooks/useCategories';

const Home = () => {
  const categories = useCategories();

  const linkToFirstCategory = useMemo(() => {
    return `/${categories[0]?.id}`;
  }, [categories]);

  return (
    <div className="flex justify-center items-center min-h-screen w-full">
      <Link
        to={linkToFirstCategory}
        className="p-4 border-2 border-gray-400 rounded hover:opacity-80 cursor-pointer">
        Click to start
      </Link>
    </div>
  );
};

export default Home;
