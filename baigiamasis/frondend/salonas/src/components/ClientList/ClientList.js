import React, { useState, useEffect } from "react";
import axios from "axios";
import Clients from "../Clients/Clients";

const endpoint = "http://localhost:3001/clients";

export default function ClientList() {
  const [clients, setClients] = useState([]);
  useEffect(() => {
    axios
      .get(endpoint)
      .then(({ data }) => setClients(data))
      .catch(() => alert("Klaida"));
  }, []);
  return (
    <div>
      <table>
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
  );
}
