import React, {useState, useEffect} from 'react';
import axios from "axios";
import './App.css';

const url = "https://randomuser.me/api/"

function App() {
const [card, setCard] = useState(true)

useEffect(() => {
  axios.get(url).then((response) => {
    setCard(response.data.results[0]);
  });
}, []);

if(!card) return null;

  return (
    <div className="App">
      <h1>{card.gender}</h1>
      <h2>{card.email}</h2>
    </div>
  );
}

export default App;
