import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

function DetailsPage() {
  const selectedCategoryId = useSelector((state) => state.selectedCategoryId);
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

  const selectedCategory = categories.find((category) => category.mal_id === selectedCategoryId);

  return (
    <div>
      {selectedCategory && (
        <ul key={selectedCategory.mal_id}>
          <li>{selectedCategory.mal_id}</li>
          <li>{selectedCategory.title}</li>
          <li>{selectedCategory.season}</li>
          <li>{selectedCategory.episodes}</li>
          <li>{selectedCategory.favorites}</li>
          <li>{selectedCategory.status}</li>
          <li>{selectedCategory.popularity}</li>
          <li>{selectedCategory.members}</li>
          <li>{selectedCategory.duration}</li>
          <li>{selectedCategory.rank}</li>
          <li>{selectedCategory.rating}</li>
          <li>{selectedCategory.score}</li>
          <li>{selectedCategory.scored_by}</li>
          <li>{selectedCategory.year}</li>
          <li>{selectedCategory.synopsis}</li>
        </ul>
      )}
    </div>
  );
}

export default DetailsPage;
