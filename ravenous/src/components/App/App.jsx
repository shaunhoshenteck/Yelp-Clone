import React from 'react';
import './App.css';
// import Business from '../Business/Business';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

function App() {
  return (
    <div class="App">
      <h1>ravenous</h1>
      <SearchBar></SearchBar>
      <BusinessList></BusinessList>
    </div>
  );
}

export default App;
