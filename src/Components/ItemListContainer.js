import { products } from "../assets/products"
import { customFetch } from "../utils/customFetch"
import { useState, useEffect } from "react"
import { ItemList } from "./ItemList"
import { Spinner } from '@chakra-ui/react'
import { useParams } from "react-router-dom"

export const ItemListContainer = () => {

    let { idCategory } = useParams();

    const [listProducts, setListProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const getProducts = customFetch(products);
        getProducts.then(res => {
            setLoading(false)
            setListProducts(res)
        })
        ;
    console.log(listProducts);
    /* if (idCategory) {
    getProducts.then(res => setListProducts(res.filter(peliculas => peliculas.category === idCategory)));
    }
     else {
        getProducts.then(res => {
            setLoading(false)
            setListProducts(res)
        })
        ; 
    }*/
}, [idCategory])
    return(
        <>
        <div className="container">
        <div className="row d-flex justify-content-evenly">
        {loading ?
        <Spinner />
        :
        <ItemList listProducts = {listProducts}/>}
        </div>
        </div>
        </>
    )}

export const Slogan = () => {
    return(
        <>
        <h1>Un lugar, miles de emociones</h1>
        </>
    )
}
 /*   getProducts.then(res => {
            setLoading(false)
            setListProducts(res)
        })
        ; */