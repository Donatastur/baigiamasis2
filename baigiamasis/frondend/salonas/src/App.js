import "./App.css";
import { Routes, Route } from "react-router-dom";
import ClientList from "./components/ClientList/ClientList";
import React from "react";
import EditClients from "./components/EditClients/EditClients";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ClientList />} />
        <Route path="/edit/:id" element={<EditClients />} />
        <Route path="/create" />
      </Routes>
    </div>
  );
}

export default App;
