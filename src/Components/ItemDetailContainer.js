import { products } from "../assets/products"
import { customFetch } from "../utils/customFetch"
import { useState, useEffect } from "react"
import  ItemDetail  from "./ItemDetail"
import { Spinner } from '@chakra-ui/react'
import { useParams } from "react-router-dom"

export const ItemDetailContainer = () => {
    const [listProducts, setListProducts] = useState([]);
    const [loading, setLoading] = useState([true]);

    const { DetalleId } = useParams();
    console.log(DetalleId);

    useEffect(() => {
        customFetch (products)
        .then (res =>{
            setListProducts(res[parseInt(DetalleId)])
            setLoading(false)
        })
}, [DetalleId]);

    return(
        <>
        {loading ?
        <Spinner />
        :
        <ItemDetail Item={listProducts}/>
        }
        </>
    )}

    export default ItemDetailContainer;