import { ItemList } from "./ItemList"
import { useState, useEffect } from "react"
import { CircularProgress } from '@chakra-ui/react'
import { useParams } from "react-router-dom"
import { db } from "../firebase/Firebase"
import { getDocs, collection, query, where } from "firebase/firestore"
import "./ILC.css"

export const ItemListContainer = ({greeting}) => {

    const { IdCategory } = useParams();
    const [listProducts, setListProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        const productsCollection = collection (db,"products");
        const productsCategory = query(productsCollection, where ("category", "==", `${IdCategory}`));
        let filterProducts = (IdCategory === undefined ? productsCollection : productsCategory);
        getDocs(filterProducts)
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
            setLoading(false);
        })
}, [IdCategory]) 

    return(
        <>
        <h1 className="title-slogan">{greeting}</h1>
        <div className="container-fluid">
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