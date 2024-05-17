import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes";
import * as dotenv from 'dotenv';
import bodyParser from "body-parser";
import { getSession } from "@auth/express"
import { authSession } from "./middlewares/authSession";

dotenv.config();

// Instancias de la aplicación
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(authSession)

// Configuración de puerto
const port = process.env.PORT ?? 3000;

// Rutas de la aplicación
app.use("/api/auth", authRoutes);

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});