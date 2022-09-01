import express from "express";
import { addUser, deleteUser, editUser, getUser, listUser } from "../controllers/user.js";
const api = express.Router();
api.get('/user',listUser);
api.get('/user/:id',getUser);
api.post('/user',addUser);
api.put('/user/:id',editUser);
api.delete('/user/:id',deleteUser);
export default api;