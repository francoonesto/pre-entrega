import { Router } from 'express'
import { CartManager } from '../controllers/cartManager.js'

const cartManager = new CartManager('src/models/carrito.json')

const routerCart = Router()

routerCart.post('/' , async (req,res) =>{
        await cartManager.crearCart(req.body)
        res.status(200).send("cart creado")})
routerCart.get('/:cid' , async (req,res) => {
    const {cid} = req.params

    try{
        const cart = await cartManager.cartById(cid)
        res.status(200).send(cart)
    }
    catch(error){res.status(400).send(error.message)}
})
routerCart.post('/:cid/product/:pid' , async (req,res) =>{
const {cid} = req.params
const {product} = req.body
const {pid} = req.params

    try{
        await cartManager.addProductToCart(cid , product , pid)
        res.status(200).send("Producto agregado correctamente")
    }
    catch(error){res.status(400).send(error.message)}
})

export default routerCart