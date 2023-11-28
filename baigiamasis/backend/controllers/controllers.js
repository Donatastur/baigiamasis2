import Client from "../models/Clients.js";

export async function addNewClient(req, res) {
  const { name, lastname, email, date, time } = req.body;
  if (!name || !lastname || !email || !date || !time) {
    return res.json({ message: "netinkamai uzpildyta" });
  }
  try {
    const client = new Client({
      name,
      lastname,
      email,
      date,
      time,
    });
    await Client.save();

    res.json(client);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function getAllClient(req, res) {
  try {
    const client = await Client.find({}, { _v: 0 });
    res.json(client);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function getClientById(req, res) {
  const { id } = req.params;
  try {
    const client = await Client.findById(id);
    res.json(client);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function deleteClient(req, res) {
  const { id } = req.params;
  try {
    const client = await Client.findById(id);
    if (!client) {
      return res.status(404), json({ message: "client not found" });
    }
    await Client.findByIdAndDelete(id);

    res.status(204).json({ message: "Client deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function updateClient(req, res) {
  const { id } = req.params;
  const { name, lastname, email, date, time } = req.body;
  if (!name || !lastname || !email || !date || !time) {
    return res.status(404), json({ message: "Client not found" });
  }
  try {
    const client = await Client.findById(id);
    if (!client) {
      return res.status(404), json({ message: "Client not found" });
    }
    client.name = name;
    client.lastname = lastname;
    client.email = email;
    client.date = date;
    client.time = time;
    await client.save();
    res.json(client);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
