import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

const HomePage = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get('https://api.jikan.moe/v4/anime?q=&sfw')
      .then((res) => {
        const { data } = res.data;
        console.log('show data', data);
        dispatch({ type: 'SET_CATEGORIES', payload: data });
      });
  }, [dispatch]);

  return (
    <div>
      {categories.map((category) => (
        <Link to={`/details/${category.mal_id}`} key={category.mal_id}>
          <ul>
            <li>{category.title}</li>
            <li>
              <img src={category.images.jpg.image_url} alt={category.image_url} />
            </li>
          </ul>
        </Link>
      ))}
    </div>
  );
};

export default HomePage;
