import { useState } from "react";
import "./App.css";

const cardImages = [
  { src: "/King_Chess.png" },
  { src: "/Queen_Chess.png" },
  { src: "/Rook_Chess.png" },
  { src: "/Bishop_Chess.png" },
  { src: "/Knight_Chess.png" },
  { src: "/Pawn_Chess.png" },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  return (
    <div className="App">
      <h1>Magic Memory Game</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map((card) => (
          <div key={card.id} className="card">
            <div>
              <img className="front" src={card.src} alt="card front" />
              <img className="back" src="/cover_card.jpg" alt="card back" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
