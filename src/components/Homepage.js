import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/Homepage.css';

const HomePage = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get('https://api.jikan.moe/v4/anime?q=&sfw')
      .then((res) => {
        const { data } = res.data;
        dispatch({ type: 'SET_CATEGORIES', payload: data });
      });
  }, [dispatch]);

  return (
    <div className="grid-container">
      {categories.map((category) => (
        <Link to={`/details/${category.mal_id}`} key={category.mal_id} onClick={() => dispatch({ type: 'SET_SELECTED_CATEGORY', payload: category.mal_id })}>
          <div className="category-item">
            <div className="category-image-container">
              <img className="category-image" src={category.images.jpg.image_url} alt={category.image_url} />
              <div className="category-title">{category.title}</div>
              <div className="category-arrow-container">
                <div className="category-arrow">&#10148;</div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HomePage;
