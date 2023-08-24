import  { Router }  from 'express'
import  { ProductManager }  from '../controllers/productManager.js'

const prodManager = new ProductManager('src/models/productos.txt')

const routerProd = Router()

routerProd.get('/', async(req,res) => {
const {limit} = req.query

const prods = await prodManager.getProducts()
const productos = prods.slice(0 , limit)
res.status(200).send(productos)
} )
routerProd.get('/:id' , async(req,res) => {
    const {id} = req.params
    const prods = await prodManager.getProductsById(parseInt(id))
    if(prods)
    res.status(200).send(prods)
    else
    res.status(404).send("producto no existente")
})
routerProd.post('/' , async(req,res) => {
    const confirmacion = await prodManager.addProduct(req.body)
    if(confirmacion)
    res.status(200).send("Producto creado correctamente")
    else
    res.status(400).send("Producto ya existe")
})
routerProd.put('/:id' , async(req,res) => {
    const confirmacion = await prodManager.updateProduct(req.params.id , req.body)
    if(confirmacion)
    res.status(200).send("Producto actualizado correctamente")
    else
    res.status(404).send("Producto no encontrado")
})
routerProd.delete('/:id' , async(req,res) => {
    const confirmacion = await prodManager.deleteProduct(req.params.id)
    if(confirmacion)
    res.status(200).send("Producto eliminado correctamente")
    else
    res.status(400).send("Producto no encontrado")
})


export default routerProd