import { films } from "../assets/films"
import { customFetch } from "../utils/customFetch"
import { useState, useEffect } from "react"
import { ItemList } from "./ItemList"

export const ItemListContainer = () => {
    const [listFilms, setListFilms] = useState([])
    
    useEffect(() => {
        customFetch(films)
        .then(resolve => setListFilms(resolve))
        
    }, [])
    
    console.log(listFilms);
    
    
    return(
        <>
        <ItemList listFilms = {listFilms}/>
        </>
    )}

export const Slogan = () => {
    return(
        <>
        <h1>Un lugar, miles de emociones</h1>
        </>
    )
}
