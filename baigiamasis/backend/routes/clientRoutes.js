import express from "express";

import {
  addNewClient,
  deleteClient,
  getAllClient,
  getClientById,
  updateClient,
} from "../controllers/controllers.js";

const router = express.Router();

router.get("/clients", getAllClient);

router.get("/clients/:id", getClientById);

router.post("/clients", addNewClient);

router.delete("/clients/:id", deleteClient);

router.put("/clients/:id", updateClient);

export default router;
