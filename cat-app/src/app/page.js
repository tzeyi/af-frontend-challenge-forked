'use client'

import { useState } from 'react';

export default function Home() {
  const [catImg, setCatImg] = useState([]);
  const [newCatIndex, setNewCatIndex] = useState(0);
  // This is used to account for double click in fetchCat
  const [loading, setLoading] = useState(false); 
  
  const fetchCat = async () => {
    if (loading) return;
    setLoading(true);

    // Generate a unique URL with timestamp 
    const timestamp = new Date().getTime();
    const catUrl = `https://cataas.com/cat?${timestamp}`;
    
    setCatImg(prevImg => [...prevImg, catUrl]);
    
    setNewCatIndex(prevIndex => {
      const updatedIndex = prevIndex + 1;
      
      setTimeout(() => {
        window.location.hash = `slide${updatedIndex}`;
        setLoading(false);
      }, 500);
      
      return updatedIndex;
    });
  }

  const clearCat = () => {
    setCatImg([])
    setNewCatIndex(0)
    window.location.hash = '';
  }

  return (
    <>
      <main>
        <div className="mx-auto text-center">
          <h1 className="p-5"> Number of cats spawned: {newCatIndex} </h1>
          <button className="btn btn-info mr-10" onClick={fetchCat}>Spawn cats</button>
          <button className="btn btn-soft btn-error ml-10 " onClick={clearCat}>Clear cats</button>
        </div>

        <section className="w-1/2 h-1/2 mx-auto flex justify-center pt-8">
          {
            // Case 1: catImg is empty
            catImg.length === 0 ? (
              <div className="skeleton w-80 h-80"></div>
            ) : (
            // Case 2: user has spawned cats
              <div className="carousel w-80 h-80">
                {catImg.map((catImg, index) => {
                  const displayIndex = index + 1;

                  return (
                    <div id={`slide${displayIndex}`} key={displayIndex} className="carousel-item relative w-full">
                      <img src={catImg} className="size-full" alt={displayIndex}/>
                      
                      <div className="absolute top-2 right-2 bg-black text-white px-2 py-1 rounded">
                        {displayIndex} / {newCatIndex}
                      </div>
                      
                      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between">
                        <a href={`#slide${displayIndex === 1 ? 1 : displayIndex - 1}`} className="btn btn-circle"> ❮ </a>
                        <a href={`#slide${displayIndex === newCatIndex ? newCatIndex : displayIndex + 1}`} className="btn btn-circle"> ❯ </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            )
          }
        </section>

      </main>
    </>
  )
}