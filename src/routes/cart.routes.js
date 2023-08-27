import { Router } from 'express'
import { CartManager } from '../controllers/cartManager.js'

const cartManager = new CartManager('src/models/carrito.json')

const routerCart = Router()

routerCart.post('/' , async (req,res) =>{
    try{
        await cartManager.addCart(req.body)
        res.status(200).send("Producto creado correctamente")
    }
    catch(error){res.status(400).send(error.message)}
})

// routerCart.post('/' , async (req,res) =>{
//     try{
//         await cartManager.addCart(req.body)
//         res.status(200).send("Producto creado correctamente")
//     }
//     catch(error){res.status(400).send(error.message)}
// })

routerCart.get('/:cid' , async (req,res) => {
    const {cid} = req.params

    try{
        const cart = await cartManager.cartById(cid)
        res.status(200).send(cart)
    }
    catch(error){res.status(400).send(error.message)}
})

export default routerCart