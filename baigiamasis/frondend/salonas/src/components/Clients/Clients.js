import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const endpoint = "http://localhost:3001/client";

export default function Clients({ clients, setClients }) {
  const navigate = useNavigate();

  function handleDelete() {
    axios
      .delete(`${endpoint}/${clients._id}`)
      .then(() => {
        setClients((prev) => prev.filter((p) => p._id !== clients._id));
      })
      .catch((err) => {
        console.log(err);
        alert("Nepavyko istrinti");
      });
  }

  function handleUpdate() {
    navigate(`/edit/${clients._id}`);
  }

  return (
    <tr className="center">
      <td>{clients.name}</td>
      <td>{clients.lastname}</td>
      <td>{clients.email}</td>
      <td>{clients.date.split("T")[0]} </td>
      <td>{clients.time}</td>
      <td>
        <button className="button" onClick={handleDelete}>
          Istrinti
        </button>
      </td>
      <td>
        <button className="button" onClick={handleUpdate}>
          Atnaujinti
        </button>
      </td>
    </tr>
  );
}
