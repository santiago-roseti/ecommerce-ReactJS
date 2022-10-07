import { films } from "../assets/films"
import { customFetch } from "../utils/customFetch"
import { useState, useEffect } from "react"
import  ItemDetail  from "./ItemDetail"
import { Spinner } from '@chakra-ui/react'
import { useParams } from "react-router-dom"

export const ItemDetailContainer = () => {
    const [Films, setFilms] = useState([]);
    const [loading, setLoading] = useState([true]);

    const { DetalleId } = useParams();
    console.log(DetalleId);

    useEffect(() => {
        customFetch (films)
        .then (res =>{
            setFilms(res[parseInt(DetalleId)])
        })
        setLoading(false)
}, [DetalleId]);
    return(
        <>
        {loading ?
        <Spinner />
        :
        <ItemDetail Item={Films}/>
        }
        </>
    )}

    export default ItemDetailContainer;