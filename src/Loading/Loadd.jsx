import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import HomePage from '../HomePage';

function Loadd() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // Simulate a delay
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      {isLoading ? <Loading/> : <HomePage/>}
    </div>
  );
}

export default Loadd;