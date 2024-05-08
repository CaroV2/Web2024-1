import React from 'react';
import { Search } from './components/search/Search';
import { Gif } from './components/gif/Gif';

export function App() {
  return(
      <>
      <h1>WELCOME TO GIF SEARCH</h1>
      <Search/>
      <Gif/>
      </>
  )
}