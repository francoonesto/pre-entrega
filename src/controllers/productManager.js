import { promises as fs } from  'fs'
import { v4 as uuidv4 } from 'uuid'


export  class ProductManager {
    constructor(path) {
     this.products = []
     this.path = path
    }

async addProduct(prod) {
    const products = JSON.parse(await fs.readFile(this.path , 'utf-8'))
    const existe = products.find(producto => producto.code === prod.code)
    try{
    if(existe)
        return false}
    catch{
        prod.id = ProductManager.aumentoId()
        products.push(producto)
        await fs.writeFile(this.path , JSON.stringify(products))
        return true
    }}

async getProducts() {
const products = JSON.parse(await fs.readFile(this.path , 'utf-8'))

return products
}
async getProductById (id) {
    const products = JSON.parse(await fs.readFile(...this.path))
    const prod = products.find(producto => producto.id === id)
    try {
    if (!prod)
        throw Error(`Producto no existe`)
    }
    catch{
    `Producto existente`
    return prod}}

static aumentoId(){
//     if(this.aumentarId){
// this.aumentarId++
//     }else{this.aumentarId = 1}
    return uuidv4()
// retorna un numero random?
}

}

const productManager = new ProductManager()
// async getProductById (id) {
//     const products = JSON.parse(await fs.readFile(...this.path))
//     const prod = products.find(producto => producto.id === id)
//     if (!prod) {
//         throw Error("Producto no existe")
//     }
//     return prod
//     }
// async updateProduct (id, { title }){
//     const products = JSON.parse(await fs.readFile(...this.path))
//     const indice = products.findIndex(product => product.id === id)

//     if (indice != -1) {
//         products[indice].title = title
//         await fs.writeFile(this.path[0] , JSON.stringify(products))
//         console.log(products)
//     } else {
//         alert ("Producto no encontrado")
//     }

//  return indice
// }

// async deleteProduct(id) {
//     const products = JSON.parse(await fs.readFile(...this.path))
//     const prods = products.filter(pro => pro.id != id)
//     await fs.writeFile(this.path[0] , JSON.stringify(prods))

//     return prods
// }


// try {
//     await getProductById("ProductoID")
//  }catch(error){
//      ("Producto no existente")
//  console.error(error.message)
//  }