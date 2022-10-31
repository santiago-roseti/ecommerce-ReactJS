import { useState, useEffect } from "react"
import { ItemList } from "./ItemList"
import { CircularProgress } from '@chakra-ui/react'
import { useParams } from "react-router-dom"
import { db } from "../firebase/Firebase"
import { getDocs, collection, query, where } from "firebase/firestore"

export const ItemListContainer = () => {

    let { idCategory } = useParams();

    const [listProducts, setListProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        const productsCollection = collection (db,"products")
        const q = query(productsCollection, where ("category", "==", "peliculas"))
        /* const filterProducts = (idCategory === undefined ? productsCollection : q)*/
        getDocs(q)
        .then((data)=>{
            const list = data.docs.map((products)=>{
                return {
                    ...products.data(),
                    id: products.id
                }
            })
            setListProducts(list)
        })
        .finally(()=>{
            setLoading(false)
        })
}, [idCategory])

    return(
        <>
        <div className="container">
        <div className="row d-flex justify-content-evenly">
        {loading ?
                <div style={{
                    width:"100%",
                    height: "60vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <CircularProgress color='red.300' />
                </div>
        :
        <ItemList listProducts = {listProducts}/>}
        </div>
        </div>
        </>
    )}
