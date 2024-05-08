import React from 'react';
import ItemsList from './components/ItemsList/ItemsList';
import { data } from '../src/data'


function App() {
  return (
    <>
      <ItemsList list={data}/>
      </>
  );
}

export default App;

