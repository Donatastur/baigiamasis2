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
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <br />
        <label htmlFor="">Lastname</label>
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
        <label htmlFor="">Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />{" "}
        <br />
        <label htmlFor="">Time</label>
        <input
          type="text"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />{" "}
        <br />
        <button type="submit">Issaugoti</button>
      </form>
    </div>
  );
}
