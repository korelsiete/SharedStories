import express from "express";
import cors from "cors";
import multer from "multer";

const app = express();
app.use(cors());
const port = process.env.PORT ?? 3000;

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
let userData: Array<Record<string, string>> = [];

app.post('/api/files', upload.array('file'), async (req, res) => {
    // upload.array espera un array, no una imagen unica
    // 1. desestructuramos el req.body
    const { title, description, file, userData } = req.body;
    // 2. realizamos validaciones necesarias de cada uno de los datos
    // 3. asgignamos los datos al usuario correspondiente
    // 4. guardamos la publicacion en la base de datos
    // 5. retornamos la publicacion con el id correspondiente y el mensaje de exito
    return res.status(200).json({ Data: [], Message: 'File uploaded successfully' });
})
app.get('/api/users', async (req, res) => {

})
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})