import { films } from "../assets/films"
import { customFetch } from "../utils/customFetch"
import { useState, useEffect } from "react"
import  ItemDetail  from "./ItemDetail"
import { Spinner } from '@chakra-ui/react'

export const ItemDetailContainer = () => {
    const [Films, setFilms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    
    useEffect(() => {
    const getItem = async () =>{
        try {
            setLoading(true)
            let res = await customFetch(films)
            setFilms(res[0]);
        }
        catch(err){
            console.error("Ocurrió un error", err)
            setError(true);
        }
        finally {
            setLoading(false)
        }
    };
    getItem();  
    }, [])
  
    return(
        <>
        {loading ?
        <Spinner />
        :
        <ItemDetail Item={Films}/>}
        </>
    )}

    export default ItemDetailContainer;