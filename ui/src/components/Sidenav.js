import React from 'react';
import classNames from 'classnames';
import useCategories from '../hooks/useCategories';
import { Link, useParams } from 'react-router-dom';

const Sidenav = () => {
  const { categoryId } = useParams();
  const categories = useCategories();

  return (
    <div className="flex flex-col min-w-[270px] px-8 min-h-screen bg-gray-600 shadow-lg">
      <div className="my-4 border-2 border-gray-400 p-3">
        <span>Red Carlos Test</span>
      </div>

      {categories.map((category) => {
        return (
          <Link
            className={classNames('cursor-pointer hover:bg-gray-400 p-2', {
              'bg-gray-400': categoryId === category.id.toString()
            })}
            key={category.id}
            to={`/${category.id}`}>
            {category.name}
          </Link>
        );
      })}
    </div>
  );
};

export default Sidenav;
