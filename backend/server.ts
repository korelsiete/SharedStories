import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes";
import * as dotenv from 'dotenv';

// Configurar dotenv para cargar variables de entorno
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json()); // Middleware para manejar datos JSON

const port = process.env.PORT ?? 3000;

// Usar las rutas de autenticación
app.use("/api/auth", authRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});