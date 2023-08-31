import { promises as fs } from  'fs'
import { v4 as uuidv4 } from 'uuid'

export class CartManager{
 constructor(path){
 this.prodsCart = []
 this.path = path
}

static aumentoId(){

    return uuidv4()
}

async crearCart() {
    const cart = JSON.parse(await fs.readFile(this.path , 'utf-8'))

   const crear = cart.push({id: CartManager.aumentoId() , products:[]})
         await fs.writeFile(this.path,JSON.stringify(cart))

    return crear
    }

    async cartById(id) {
    const cart = JSON.parse(await fs.readFile(this.path , 'utf-8'))
    const existe = cart.find(existe => existe.id === id)

    if(!existe){
     throw new Error("Producto no encontrado")
    }

    return existe}

    async cart(){
        const cart = JSON.parse(await fs.readFile(this.path , 'utf-8'))

        return cart
    }

async addProductToCart(cid , pid){
    const carts =JSON.parse(await fs.readFile(this.path , 'utf-8'))
    const carrito = carts.find(c => c.id === cid)
    const products = carrito.products
    const productCart = products.find(products => products.productid === pid)

    if(!productCart){
        products.push({productid:CartManager.aumentoId() , quantity : 1})
        await fs.writeFile(this.path , JSON.stringify(carts))
    }else{
        products[0].quantity++
        await fs.writeFile(this.path , JSON.stringify(carts))
    }
    }}


        // const carts = JSON.parse(await fs.readFile(this.path , 'utf-8'))
        // const carritoEncontrado = carts.find(c => c.id === cid)
        // const indiceCart = carts.findIndex(i => i.id === cid)
        // const products = carritoEncontrado.products
        // const productId = products.find(p => p.productid === pid)
        // const prodEncontrado = products.findIndex(p => p.productid === pid)


        // if(carritoEncontrado === cid && productId === pid){
        //     carts[prodEncontrado].products.quantity++
        //     await fs.writeFile(this.path , JSON.stringify(carts))
        // }else{
        //     carts[indiceCart].products.push({productid:CartManager.aumentoId() , quantity : 1})
        //     await fs.writeFile(this.path , JSON.stringify(carts))
        // }