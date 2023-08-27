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

async addCart(prod) {
    const products = JSON.parse(await fs.readFile(this.path , 'utf-8'))
    const cart = products.find(c => c.productos === prod.productos)

    if(cart){
        throw new Error("Producto ya existente")
    }
    else{
        prod.id = CartManager.aumentoId()
        products.push(prod)
        await fs.writeFile(this.path , JSON.stringify(products))
    }}

async cartById(id) {
    const products = JSON.parse(await fs.readFile(this.path , 'utf-8'))
    const existe = products.find(existe => existe.id === id)

    if(!existe){
     throw new Error("Producto no encontrado")
    }

    return existe}

// async cartProducts(prod , id) {

// }

}