import { json } from 'express'
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

async crearCart(carrito) {
    const cart = JSON.parse(await fs.readFile(this.path , 'utf-8'))

    if(true){
        carrito.id = CartManager.aumentoId()
        cart.push(carrito)
        await fs.writeFile(this.path,JSON.stringify(cart))
    }
    }

    async cartById(id) {
    const cart = JSON.parse(await fs.readFile(this.path , 'utf-8'))
    const existe = cart.find(existe => existe.id === id)

    if(!existe){
     throw new Error("Producto no encontrado")
    }

    return existe}

async addProductToCart(prod){
const cart = JSON.parse(await fs.readFile(this.path , 'utf-8'))
const addCart = cart.find(add => add.id != id)

if(addCart){
    throw new Error("Producto no encontrado")
} else{
    prod.id = CartManager.aumentoId()
    addCart.productos.push(prod)
    const cantidad = productos.find(c => c.pid === prod.id)
    if (cantidad){
        return cart.reduce((acum , item ) => acum += item.cantidad + 1 , 0)
    }
    await fs.writeFile(this.path,JSON.stringify(cart))
}
}

    }

// async cartById(id) {
//     const products = JSON.parse(await fs.readFile(this.path , 'utf-8'))
//     const existe = products.find(existe => existe.id === id)

//     if(!existe){
//      throw new Error("Producto no encontrado")
//     }

//     return existe}

    // async addCart(prod) {
    //     const products = JSON.parse(await fs.readFile(this.path , 'utf-8'))
    //     const cart = products.find(c => c.productos === prod.productos)

    //     if(cart){
    //         throw new Error("Producto ya existente")
    //     }
    //     else{
    //         prod.id = CartManager.aumentoId()
    //         products.push(prod)
    //         await fs.writeFile(this.path , JSON.stringify(products))
    //     }}

