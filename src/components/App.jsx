import Card from "./Card";
import React from "react";
import { charactersArray } from "../assets/database/characters";
import SearchInput from "./SearchInput";
import FullBody from "./FullBody";
import Quote from "./Quote";
import Forms from "./Forms";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="header__logo-box">
          <img
            className="header__logo"
            src="/image/logo-tatazzo.png"
            alt="Logo"
          />
        </div>
      </header>
      <main>
        <section className="section-characters" id="section-characters">
          <div
            className="background"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(20, 20, 20)  , rgba(237, 233, 222, 0.15)), url(/image/Kate_Eliot_BW.png)`,
            }}
          ></div>
          <SearchInput />
          <div className="card-container">
            {charactersArray.map((card, index) => (
              <Card key={index} character={card} />
            ))}
          </div>
        </section>
        <section className="section-fullbody" id="section-fullbody">
          <p className="p-gradient">Os protagonistas</p>
          <div className="fullbody-container">
            {charactersArray.map((card, index) => (
              <FullBody
                key={index}
                fullbody={card.fullbody}
                style={card.styling}
              />
            ))}
          </div>
        </section>
        <section className="section-info" id="section-info">
          <Quote />
        </section>
        <section className="section-forms" id="section-forms">
          <Forms />
        </section>
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
