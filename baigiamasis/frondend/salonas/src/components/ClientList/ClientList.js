import React, { useState, useEffect } from "react";
import axios from "axios";
import Clients from "../Clients/Clients";

const endpoint = "http://localhost:3001/client";

export default function ClientList() {
  const [clients, setClients] = useState([]);
  useEffect(() => {
    axios
      .get(endpoint)
      .then(({ data }) => setClients(data))
      .catch(() => alert("Klaida"));
  }, []);
  return (
    <div id="deze">
      <div>
        <header className="imgg">
          <img src="https://i.pinimg.com/736x/63/1e/b6/631eb669e2f3d548cb278e280bde0ab6.jpg"></img>
          <div>
            <div>
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
      <div className="h1">
        <h1>Klientų rodmenys</h1>
        <table className="lentele">
          <thead>
            <tr>
              <th>Vardas</th>
              <th>Pavarde</th>
              <th>Epastas</th>
              <th>Data</th>
              <th>Laikas</th>
              <th>Istrinti</th>
              <th>Atnaujinti</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((clients) => {
              return (
                <Clients
                  setClients={setClients}
                  clients={clients}
                  key={clients._id}
                />
              );
            })}
          </tbody>
        </table>
      </div>

      <footer className="footer">
        <p>UAB"Mise"</p>
      </footer>
    </div>
  );
}
