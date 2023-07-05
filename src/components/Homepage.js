import React, { useEffect, useState } from 'react';
import axios from 'axios';

function HomePage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.jikan.moe/v4/anime?q=&sfw')
      .then((res) => setData(res.data.data));
  }, []);

  return (
    <div>
      {data.map((myanime) => (
        <ul key={myanime.mal_id}>
          <li>{myanime.type}</li>
          <li>
            <img src={myanime.images.jpg.image_url} alt={myanime.image_url} />
          </li>
        </ul>
      ))}
    </div>
  );
}

export default HomePage;
