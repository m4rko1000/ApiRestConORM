import {Categorias} from '../models/Categoria.js'
import { Productos } from '../models/Producto.js';


export const getCategorias = async (req,res ) => {
    try {
        const categorias = await Categorias.findAll({
          atributes: ["id", "nombre"],
        });
        res.json(categorias);
      } catch (error) {
        res.status(500).json({
          message: error.message,
        });
      }
    }

export const createCategorias = async (req,res ) => {
    const {nombre} = req.body;
    try {
        const newCategorias = await Categorias.create({
            nombre
        })
    
        res.json(newCategorias);
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
};

export const updateCategoria = async (req,res) => {
try {
    const {id}= req.params;
    const {nombre} = req.body;
    const categorias = await Categorias.findByPk(id)
    categorias.nombre = nombre
    await Categorias.save()

    res.json(categorias)
} catch (error) {
    return res.status(500).json({message:error.message});
}

};

export const deleteCategoria = async (req,res) => {
  try {
    const {id} = req.params
    await Categorias.destroy({
    where:{
        id,
    },
   });
    res.sendStatus(204)
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};

export const getCategoria = async (req,res) => {
    try {
        const {id} = req.params
    const categoria = await Categorias.findOne({
        where:{
            id
        }
    });
    if(!categoria) return res.status(404).json({message : 'No exista dicha categoria'})
    res.json(categoria)
    } catch (error) {
        return res.status(500).json({message: error.message});
      
    }
}
/*Permite ver la categoria y los productos de dicha categoria*/

export async function getCategoriaProductos(req, res) {
    const { id } = req.params;
    try {
      const productos = await Productos.findAll({
        attributes: ["id", "id_categoria", "nombre", "precio"],
        where: { id_categoria: id },
      });
      res.json(productos);
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
}