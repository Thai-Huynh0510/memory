import { useEffect, useState } from 'react';
import './App.css';
import Card from './Card'

const cardValues = [{ "name": "Card1", status: false  },
    { "name": "Card2", status: false },
    { "name": "Card3", status: false },
    { "name": "Card4", status: false }];

function App() {
    const [cards, setCards] = useState([])
    const doublecards = [...cardValues, ...cardValues]
    const [Card1, setCard1] = useState(null)
    const [Card2, setCard2] = useState(null)
    const [disable, setdisable] = useState(false)
    // shuffel the cards 
    const shuffel = () => {
        const shuffed = doublecards.sort(() => Math.random() - 0.5).map((card) => ({ ...card, id: Math.random() }))
        setCards(shuffed)
    }
    // handle choice for card 1 and card 2
    const handleChoice = (card) => {
        Card1 ? setCard2(card) : setCard1(card)
    }
    //compare
    useEffect(() => {
        if (Card1 && Card2) {
            setdisable(true)
            if (Card1.name === Card2.name) {
                setCards(prevCard => {
                    return prevCard.map(card => {
                        if (card.name === Card1.name) {
                            return ({ ...card, status: true })
                        } else {
                            return card
                        }
                    })
                })
                resetCard()
            } else {
                setTimeout(() =>
                resetCard(), 1000)
            }
        }
    }, [Card1, Card2])
    //reset card
    const resetCard = () => {
        setCard1(null)
        setCard2(null)
        setdisable(false)
    }
    return (
        <div className="App">
            <button onClick={shuffel}> New Game </button>
            <div className="Cards">
                {cards.map(cardValues => (<Card key={cardValues.id} cardText={cardValues} handleChoice={handleChoice}
                    flipped={cardValues === Card1 || cardValues === Card2 || cardValues.status}
                    disable={disable}/>))}
            </div>
        </div>
    );
}

export default App;
