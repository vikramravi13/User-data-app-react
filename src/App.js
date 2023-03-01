import React, { useState } from 'react';
import Data from './components/Data'
import DetailList from './components/DetailList';
import './App.css';


export default function App() {

  const [selectedItem, setSelectedItem] = useState(null);

  console.log(selectedItem)


  return (
    <div className='container'>
      <Data onSelect={(selected) => setSelectedItem(selected)} />
      <DetailList data={selectedItem} />
    </div>

  )
}



