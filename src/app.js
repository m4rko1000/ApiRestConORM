import express from 'express';

const app = express();

import categoriasRoutes from "./routes/categorias.routes.js";
import productosRoutes from "./routes/productos.routes.js";

app.use(express.json());
app.use(categoriasRoutes);
app.use(productosRoutes);

export default app;
