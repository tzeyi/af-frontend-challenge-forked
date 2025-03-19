'use client'

import { useState } from 'react';

export default function Home() {
  const [catImg, setCatImg] = useState([]);
  const [newCatIndex, setNewCatIndex] = useState(0);

  const fetchCat = async () => {
    // Generate a unique URL with timestamp 
    const timestamp = new Date().getTime();
    const catUrl = `https://cataas.com/cat?${timestamp}`;
    
    setCatImg(prevImg => [...prevImg, catUrl]);
    setNewCatIndex(newCatIndex + 1);

    setTimeout(() => {
      window.location.hash = `slide${newCatIndex}`;
    }, 500);

    console.log(catImg)
  }

  const clearCat = () => {
    setCatImg([])
    setNewCatIndex(0)
    window.location.hash = `slide${newCatIndex}`
  }

  return (
    <>
      <main>
        <div className="mx-auto text-center">
          <h1 className="p-5"> Number of cats spawned: {newCatIndex} </h1>
          <button className="btn btn-info mr-10" onClick={fetchCat}>Spawn cats</button>
          <button className="btn btn-soft btn-error ml-10 " onClick={clearCat}>Clear cats</button>
        </div>

        <section className="w-1/2 h-1/2 mx-auto pt-15">
          <div className="carousel relative">
            {catImg.map((catImg, index) => (
              <div id={`slide${index}`} key={index} className="carousel-item relative w-full">
                <img src={catImg} className="w-max h-max object-contain" alt={index}/>

                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between">
                  <a href={`#slide${index === 0 ? catImg.length - 1 : index - 1}`} className="btn btn-circle"> ❮ </a>
                  <a href={`#slide${index === catImg.length - 1 ? 0 : index + 1}`} className="btn btn-circle"> ❯ </a>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
    </>
  )
}