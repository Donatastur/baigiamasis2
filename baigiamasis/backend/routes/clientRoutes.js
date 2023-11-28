import express from "express";

import {
  addNewClient,
  deleteClient,
  getAllClient,
  getClientById,
  updateClient,
} from "../controllers/controllers.js";

const router = express.Router();

router.get("/client", getAllClient);

router.get("/client/:id", getClientById);

router.post("/client", addNewClient);

router.delete("/client/:id", deleteClient);

router.put("/client/:id", updateClient);

export default router;
