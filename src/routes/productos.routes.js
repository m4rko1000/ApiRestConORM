import { Router } from "express";

import {createProductos, deleteProductos, updateProductos, getProductos, getProducto} from '../controllers/producto.controller.js';

const router = Router();

router.get('/productos', getProductos);
router.post('/productos', createProductos);
router.put('/productos/:id', updateProductos);
router.delete('/productos/:id', deleteProductos);
router.get('/productos/:id', getProducto);

export default router;

