import products from '../../../data/products.json'

//datos iniciales para el cargue de libros 
export const allProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve(products)
        }, 1400)
    })
}

//cargue del dropdown para generos en el navbar
/* export const generosMenu = () => {
    return new Promise((resolve, reject) => {
        resolve(products)
    })
} */

//productos por id para el detalle
export const pedirProductoxId = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.find(product => product.id === id))
        }, 1400)
    })
}


/* export const generosFiltro = (genero) => {
    return new Promise((resolve, reject) => {
        resolve(products.filter(lib => lib.genero === genero))
    })
} */
