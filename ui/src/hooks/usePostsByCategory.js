import { useEffect, useState } from 'react';

const usePostsByCategory = (categoryId) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await fetch(`http://localhost:3000/post?categoryId=${categoryId}`).then(
        (res) => res.json()
      );
      setPosts(fetchedPosts);
    };

    fetchPosts();
  }, [categoryId]);

  return posts;
};

export default usePostsByCategory;
