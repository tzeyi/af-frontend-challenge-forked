'use client'

import { useState } from 'react';

export default function Home() {
  const [catImg, setCatImg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchCat = async () => {
    setIsLoading(true);
    
    // Generate a unique URL with timestamp to prevent caching
    const timestamp = new Date().getTime();
    const catUrl = `https://cataas.com/cat?${timestamp}`;
    
    // Update the cat image URL
    setCatImg(catUrl);
    setIsLoading(false);
  }

  return (
    <>
      <main>
        <div className="mx-auto text-center">
          <h1> Cats Frenzy!</h1>
          <button className="btn btn-info" onClick={fetchCat}>Spawn cats</button>
        </div>

        <div className="mx-auto">
          <div className="card">
            {catImg === "" ? (
              <h1> Click the button !</h1>
            ) : isLoading ? (
              <h1> Loading...</h1>
            ) : (
              <figure>
                <img src={catImg} alt="Cat" />
              </figure>
            )}
          </div>
        </div>

      </main>
    </>
  )
}