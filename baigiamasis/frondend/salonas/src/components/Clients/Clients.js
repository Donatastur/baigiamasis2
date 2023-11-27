import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const endpoint = "http://localhost:3001/clients";

export default function Clients({ clients, setClients }) {
  const navigate = useNavigate();

  function handleDelete() {
    axios
      .delete("${endpoint}/${clients._id}")
      .then(() => {
        setClients((prev) => prev.filter((p) => p._id !== clients._id));
      })
      .catch((err) => {
        console.log(err);
        alert("Nepavyko istrinti");
      });
  }

  function handleUpdate() {
    navigate("/edit/${clients._id}");
  }

  return (
    <tr>
      <td>{clients.name}</td>;<td>{clients.lastname}</td>;
      <td>{clients.email}</td>;<td>{clients.date}</td>;<td>{clients.time}</td>;
      <td>
        <button onClick={handleDelete}>Istrinti</button>
      </td>
      <td>
        <button onClick={handleUpdate}>Atnaujinti</button>
      </td>
    </tr>
  );
}
