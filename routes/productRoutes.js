import express from 'express';
import { 
    getAllProducts,
    getProductById,
    updateProduct,
    createProduct,
    deleteProduct
 } from '../controllers/controller.js';

 const  router = express.Router();

 router.get('/', getAllProducts);
 router.get('/:id', getProductById);
 router.post('/', createProduct);
 router.put('/', updateProduct);
 router.delete('/:id',deleteProduct)

 export default router;