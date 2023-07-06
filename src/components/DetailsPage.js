import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

function DetailsPage() {
  const details = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get('https://api.jikan.moe/v4/anime?q=&sfw')
      .then((res) => {
        const { data } = res.data;
        dispatch({ type: 'SET_CATEGORIES', payload: data });
      });
  }, [dispatch]);
  console.log('shoe me the details', details);
  return (
    <div>
      {details.map((myanime) => (
        <ul key={myanime.mal_id}>
          <li>{myanime.mal_id}</li>
          <li>{myanime.title}</li>
          <li>{myanime.season}</li>
          <li>{myanime.episodes}</li>
          <li>{myanime.favorites}</li>
          <li>{myanime.status}</li>
          <li>{myanime.popularity}</li>
          <li>{myanime.members}</li>
          <li>{myanime.duration}</li>
          <li>{myanime.rank}</li>
          <li>{myanime.rating}</li>
          <li>{myanime.score}</li>
          <li>{myanime.scored_by}</li>
          <li>{myanime.year}</li>
          <li>{myanime.synopsis}</li>
        </ul>
      ))}
    </div>
  );
}
export default DetailsPage;
