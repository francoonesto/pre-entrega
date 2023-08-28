import { Router } from 'express'
import { CartManager } from '../controllers/cartManager.js'

const cartManager = new CartManager('src/models/carrito.json')

const routerCart = Router()

routerCart.post('/' , async (req,res) =>{

    try{
        await cartManager.crearCart()
        res.status(200).send("cart creado")}
    catch(error){res.status(400).send(error.message)}
})

routerCart.get('/' , async (req,res) => {

    const cart = await cartManager.cart()

    res.status(200).send(cart)

})

routerCart.get('/:cid' , async (req,res) => {
        const {cid} = req.params

        try{
            const cart = await cartManager.cartById(cid)
            res.status(200).send(cart)
        }
        catch(error){res.status(400).send(error.message)}
    })

    routerCart.post('/:cid/product/:pid' , async (req,res) =>{

 try{
     await cartManager.addProductToCart()
     res.status(200).send("Producto agregado correctamente")}
catch{
    res.status(400).send("Producto no encontrado")}})

export default routerCart