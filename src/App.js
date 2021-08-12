import React from 'react';
import Header from './components/Header';
import AnimeCard from './components/AnimeCard';
import zurag from './images/pic.jpg';

let dummyData = [
  {
    img: zurag,
    title: 'What if...?'
  },
  {
    img: zurag,
    title: 'What if...?'
  },
  {
    img: zurag,
    title: 'What if...?'
  },
  {
    img: zurag,
    title: 'What if...?'
  },
  {
    img: zurag,
    title: 'What if...?'
  },
  {
    img: zurag,
    title: 'What if...?'
  },
  {
    img: zurag,
    title: 'What if...?'
  },
  {
    img: zurag,
    title: 'What if...?'
  },
  {
    img: zurag,
    title: 'What if...?'
  },
  {
    img: zurag,
    title: 'What if...?'
  },
  {
    img: zurag,
    title: 'What if...?'
  },
  {
    img: zurag,
    title: 'What if...?'
  }
]

const App = () => {
  return (
    <>
      <Header />
      <div className="container my-4 mx-auto">
        <div className="grid grid-cols-4 gap-4">
          {
            dummyData.map(anime => (
              <AnimeCard img={anime.img} blajfkdlsgjl={anime.title} />
            ))
          }
        </div>
      </div>
    </>
  );
}

export default App;