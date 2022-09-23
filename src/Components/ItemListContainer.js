import { films } from "../assets/films"
import { customFetch } from "../utils/customFetch"
import { useState, useEffect } from "react"
import { ItemList } from "./ItemList"
import { Spinner } from '@chakra-ui/react'

export const ItemListContainer = () => {
    const [listFilms, setListFilms] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        customFetch(films)
        .then(res => {
            setLoading(false)
            setListFilms(res)
        })
        
    }, [])
    console.log(listFilms);
    
    
    return(
        <>
        {loading ?
        <Spinner />
        :
        <ItemList listFilms = {listFilms}/>}
        </>
    )}

export const Slogan = () => {
    return(
        <>
        <h1>Un lugar, miles de emociones</h1>
        </>
    )
}
