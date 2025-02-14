import { useState, FormEvent } from "react";
import "./App.css";

import Card from "./components/Card";
import { BsEnvelopeHeart } from "react-icons/bs";
import Back from "./assets/Back.jpg";

const App = () => {
  const [name, setName] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="app-container">
      <div
        className="background"
        style={{ backgroundImage: `url(${Back})` }}
      ></div>
      <div className="app">
        <h1>L❤️VE LETTER</h1>
        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Para..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <button type="submit">
              <BsEnvelopeHeart size={20} />
            </button>
          </form>
        ) : (
          <div className="button-container">
            <Card name={name} />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
