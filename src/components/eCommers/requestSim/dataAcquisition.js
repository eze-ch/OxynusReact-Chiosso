import products from '../../../data/products.json'
import { collection, getDocs, getDoc, doc, query, where } from 'firebase/firestore'
import { db } from '../../../firebase/config'

// METODO POR FIREBASE

//datos iniciales para el cargue de libros 
export const allProducts = () => {
    return new Promise((resolve, reject) => {
        const productsRef = collection(db,"products");

        getDocs(productsRef)
            .then((res) => {
                const datos = res.docs.map((doc) => {
                    return {
                        ...doc.data(),
                        id: doc.id
                    };
                });
                resolve(datos);
            })
            .catch((error) => {
                reject(error);
            });
    });
};


//filtrado por categoria desde FireBase
export const productsByCategory = (category) => {
    return new Promise((resolve, reject) => {

        const productsRef = collection(db, "products");
        const q = query(productsRef, where("category", "==", category));
        getDocs(q)
            .then((res) => {
                const datos = res.docs.map((doc) => {
                    return {
                        ...doc.data(),
                        id: doc.id
                    };
                });
                resolve(datos)
            })
            .catch((error) => {
                reject(error);
            });
    });
};


//productos por id para el detalle
 export const productById = (id) => {
    return new Promise((resolve, reject) => {
        const productsRef = doc(db, "products", id);
        getDoc(productsRef)
            .then((doc) => {
                const datos = {
                    id: doc.id,
                    ...doc.data()
                };
                resolve(datos)
            })
            .catch((error) => {
                reject(error);
            });
    });
};

//cargue del dropdown para generos en el navbar
export const categoriesMenu = () => {
    return new Promise((resolve, reject) => {
        resolve(products)
    })
}