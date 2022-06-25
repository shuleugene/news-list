import { useEffect, useState } from 'react';

const usePostById = (id) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const fetchedPosts = await fetch(`http://localhost:3000/post/${id}`).then((res) =>
        res.json()
      );
      setPost(fetchedPosts);
    };

    fetchPost();
  }, [id]);

  return post;
};

export default usePostById;
