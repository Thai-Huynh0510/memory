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
    const [Card1, setCard1] = useState(null)
    const [Card2, setCard2] = useState(null)
    const resetGame = () => {
        window.location.reload(true)
    }
    // shuffel the cards 
    const shuffel = () => {
        const shuffed = doublecards.sort(() => Math.random() - 0.5).map((card) => ({ ...card, id: Math.random() }))
        setCards(shuffed)
    }
    // handle choice for card 1 and card 2
    const handleChoice = (card) => {
        Card1 ? setCard2(card) : setCard2(card)
    }
    return (
        <div className="App">
            <button onClick={shuffel}> New Game </button>
            <div className="Cards">
                {cards.map(cardValues => (<Card key={cardValues.id} cardText={cardValues} handleChoice={handleChoice }/>))}
            </div>
        </div>
    );
}

export default App;
