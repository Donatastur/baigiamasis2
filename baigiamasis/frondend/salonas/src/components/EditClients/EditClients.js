import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const endpoint = "http://localhost:3001/client";

export default function EditClients() {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${endpoint}/${id}`).then(({ data }) => {
      console.log(data.date);
      setName(data.name);
      setLastname(data.lastname);
      setEmail(data.email);
      setDate(data.date.split("T")[0]);
      setTime(data.time);
    });
  }, [id]);

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .put(`${endpoint}/${id}`, {
        name,
        lastname,
        email,
        date,
        time,
      })
      .then(() => {
        navigate("/");
      })
      .catch(() => alert("Ivyko klaida"));
  }

  return (
    <div id="deze">
      <div>
        <header className="imgg">
          <img src="https://i.pinimg.com/736x/63/1e/b6/631eb669e2f3d548cb278e280bde0ab6.jpg"></img>
          <div>
            <div className="nuoroda">
              <a href="/">Klientai</a>
              <a href="/creaded">Registracija</a>
            </div>
            <p>UAB"Mise"</p>
            <p>Kaunas, Petro.16</p>
            <p>Tel. 865444959</p>
          </div>
        </header>
      </div>

      <div className="h1,registracija">
        <form className="registracija" onSubmit={handleSubmit}>
          <label htmlFor="">Vardas</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />{" "}
          <br />
          <label htmlFor="">Pavarde</label>
          <input
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />{" "}
          <br />
          <label htmlFor="">Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />{" "}
          <br />
          <label htmlFor="">Data</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />{" "}
          <br />
          <label htmlFor="">Laikas</label>
          <input
            type="text"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />{" "}
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
