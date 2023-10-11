import {Productos} from '../models/Producto.js'

export const getProductos = async (req,res) => {
    try {
        const productos = await Productos.findAll({
        attributes: ["id", "id_categoria", "nombre", "precio"],
        order: [["id", "DESC"]],
      });
    res.json(productos)
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
};

export const createProductos = async (req,res) => {
    const {nombre,precio, id_categoria} = req.body;
    try {
        const newProducto = await Productos.create({
          id_categoria,  
          nombre,
            precio,
        });
    
        res.json(newProducto);
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
};

export const getProducto = async (req,res) => {
    const { id } = req.params;
    try {
      const producto = await Productos.findOne({
        where: { id },
        attributes: ["id", "id_categoria", "nombre", "precio"],
      });
      res.json(producto);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
};

export const updateProductos = async (req,res) => {
    const { id } = req.params;
  try {
      const producto = await Productos.findOne({
      attributes: ["nombre", "id_categoria", "precio", "id"],
      where: { id },
    });
    producto.set(req.body);
    await producto.save();
    res.json(producto);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteProductos = async (req,res) => {
    const { id } = req.params;
    try {
      const producto = await Productos.destroy({
        where: { id },
      });
      res.json(producto);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }