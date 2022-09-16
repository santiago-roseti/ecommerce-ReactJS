import { useState, useEffect } from "react"
import { films } from "../assets/films"
import { customFetch } from "./customFetch"

const [listFilms, setListFilms] = useState([])
useEffect(() => {
    customFetch(films)
    .then(res => setListFilms(res))
}, [])

console.log(listFilms)
