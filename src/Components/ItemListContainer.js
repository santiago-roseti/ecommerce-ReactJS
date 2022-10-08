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
        customFetch(products)
        .then(res => {
            setLoading(false)
            setListProducts(res)
        })
        
    }, [])
    console.log(listProducts);
    
    
    return(
        <>
        {loading ?
        <Spinner />
        :
        <ItemList listProducts = {listProducts}/>}
        </>
    )}

export const Slogan = () => {
    return(
        <>
        <h1>Un lugar, miles de emociones</h1>
        </>
    )
}
