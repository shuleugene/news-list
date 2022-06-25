import { useEffect, useState } from 'react';

const useCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const fetchedCategories = await fetch('http://localhost:3000/category').then((res) =>
        res.json()
      );
      setCategories(fetchedCategories);
    };

    fetchCategories();
  }, []);

  return categories;
};

export default useCategories;
