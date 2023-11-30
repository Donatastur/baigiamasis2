import styles from "./App.css";
import { Routes, Route } from "react-router-dom";
import ClientList from "./components/ClientList/ClientList";
import React from "react";
import EditClients from "./components/EditClients/EditClients";
import CreadedClients from "./components/CreadedClients/CreadedClients";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/creaded" element={<CreadedClients />} />
        <Route path="/" element={<ClientList />} />
        <Route path="/edit/:id" element={<EditClients />} />
      </Routes>
    </div>
  );
}

export default App;
