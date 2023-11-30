import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const endpoint = "http://localhost:3001/client";

export default function CreadedClients() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  async function buttonHandler(e) {
    e.preventDefault();
    try {
      const { data } = await axios.post(endpoint, {
        name,
        lastname,
        email,
        date,
        time,
      });
      console.log(data);
    } catch (error) {
      alert(error);
    }
  }
  function buttonHandler() {
    navigate(`/creaded/`);
  }

  return (
    <div id="deze">
      <div>
        <header className="imgg">
          <img src="https://i.pinimg.com/736x/63/1e/b6/631eb669e2f3d548cb278e280bde0ab6.jpg"></img>
          <div>
            <div className="nuoroda">
              <a className="nuoroda" href="/">
                Klientai
              </a>
              <a className="nuoroda" href="/creaded">
                Registracija
              </a>
            </div>
            <p>UAB"Mise"</p>
            <p>Kaunas, Petro.16</p>
            <p>Tel. 865444959</p>
          </div>
        </header>
      </div>
      <div className="registracija">
        <form className="registracija, h1" onSubmit={buttonHandler}>
          <label htmlFor="nameInput">Vardas</label>
          <input
            type="text"
            id="nameInput"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label htmlFor="lastnameInput">Pavarde</label>
          <input
            type="text"
            id="lastnameInput"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
          <br />
          <label htmlFor="emailInput">Email</label>
          <input
            type="text"
            id="emailInput"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />{" "}
          <br />
          <label htmlFor="dateInput">Data</label>
          <input
            type="date"
            id="dateInput"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <br />
          <label htmlFor="timeInput">Laikas</label>
          <input
            type="text"
            id="timeInput"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <br />
          <button className="button" type="submit">
            Issaugoti
          </button>
        </form>
      </div>
      <footer className="footer">
        <p>UAB"Mise"</p>
      </footer>
    </div>
  );
}
