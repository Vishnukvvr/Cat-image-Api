import React, { useState, useEffect } from 'react';
import './App.css'

const Api = () => {
  const [user, setUser] = useState([]);

  const fetchCats = async () => {
    const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
    const data = await response.json();
    setUser(data);

};

  useEffect(() => {


    fetchCats();
  }, []);

  return (
    <div className='image'>
      {user.map(e => (
        <div key={e.id}>
          <img src={e.url} alt="Cat" />
        </div>
      ))}
    </div>
  );
}

export default Api;
