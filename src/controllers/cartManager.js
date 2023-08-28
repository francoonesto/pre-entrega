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
    const existe = cart.find(e => e.id === cart.id)// hago esta validacion en el caso de querer varios cart
    // const existe = cart.find(e => e.cart === cart.id)//hago esta validacion para crear un solo carrito

    if(existe){ throw new Error ("Ya existe este carrito")}
    else{cart.push({id: CartManager.aumentoId() , products:[]})
         await fs.writeFile(this.path,JSON.stringify(cart))}
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

async addProductToCart(id){
const cart = JSON.parse(await fs.readFile(this.path , 'utf-8'))
const addCart = cart.findIndex(add => add.id === id)

if(addCart){
        const crear = cart[addCart].products.push({productid: CartManager.aumentoId() , quantity:1})
        return await fs.writeFile(this.path,JSON.stringify(crear))}
else{
       const buscar = cart[addCart].products.push({...quantity + 1 })
       return await fs.writeFile(this.path,JSON.stringify(buscar))}
    }

    }

