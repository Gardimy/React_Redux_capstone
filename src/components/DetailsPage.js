import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import '../styles/Detailspage.css';

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
    <div className="details_container">
      {selectedCategory && (
      <>
        <img className="images" src={selectedCategory.images.jpg.image_url} alt={selectedCategory.image_url} />
        <table className="details_table" key={selectedCategory.mal_id}>
          <tbody>
            <tr>
              <td>mal_id</td>
              <td>{selectedCategory.mal_id}</td>
            </tr>
            <tr>
              <td>title</td>
              <td>{selectedCategory.title}</td>
            </tr>
            <tr>
              <td>season</td>
              <td>{selectedCategory.season}</td>
            </tr>
            <tr>
              <td>episodes</td>
              <td>{selectedCategory.episodes}</td>
            </tr>
            <tr>
              <td>favorites</td>
              <td>{selectedCategory.favorites}</td>
            </tr>
            <tr>
              <td>status</td>
              <td>{selectedCategory.status}</td>
            </tr>
            <tr>
              <td>popularity</td>
              <td>{selectedCategory.popularity}</td>
            </tr>
            <tr>
              <td>members</td>
              <td>{selectedCategory.members}</td>
            </tr>
            <tr>
              <td>duration</td>
              <td>{selectedCategory.duration}</td>
            </tr>
            <tr>
              <td>rank</td>
              <td>{selectedCategory.rank}</td>
            </tr>
            <tr>
              <td>rating</td>
              <td>{selectedCategory.rating}</td>
            </tr>
            <tr>
              <td>score</td>
              <td>{selectedCategory.score}</td>
            </tr>
            <tr>
              <td>scored_by</td>
              <td>{selectedCategory.scored_by}</td>
            </tr>
            <tr>
              <td>year</td>
              <td>{selectedCategory.year}</td>
            </tr>
          </tbody>
        </table>
      </>
      )}
    </div>
  );
}

export default DetailsPage;
