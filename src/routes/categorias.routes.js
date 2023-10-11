import { Router } from "express";

import {createCategorias, deleteCategoria, getCategorias, updateCategoria, getCategoria, getCategoriaProductos} from '../controllers/categoria.controller.js';

const router = Router();

router.get('/categorias', getCategorias);
router.post('/categorias', createCategorias);
router.put('/categorias/:id', updateCategoria);
router.delete('/categorias/:id', deleteCategoria);
router.get('/categorias/:id', getCategoria);
router.get('/categorias/:id/Productos', getCategoriaProductos);

export default router;

