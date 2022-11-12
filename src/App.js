import { useState } from 'react';
import './App.css';
import Card from './Card'
const cardValues = [{ "name": "Card1" },
{ "name": "Card2" },
{ "name": "Card3" },
{ "name": "Card4" }];

function App() {
    const [cards, setCards] = useState([])
    const doublecards = [...cardValues, ...cardValues]
    function resetGame() {
        window.location.reload(false)
    }
    // shuffel the cards 
    const shuffel = () => {
        const shuffed = doublecards.sort(() => Math.random() - 0.5).map((card) => ({ ...card, id: Math.random() }))
        setCards(shuffed)
    }
    console.log(cards)
    return (
        <div className="App">
            <button onClick={resetGame}> New Game </button>
            {cardValues.map((item, idx) => (<Card key={idx} cardText={item} />))}
        </div>
    );
}

export default App;
