import { useState, useEffect } from "react"
import  ItemDetail  from "./ItemDetail/ItemDetail"
import { Spinner } from '@chakra-ui/react'
import { useParams } from "react-router-dom"
import { db } from "../firebase/Firebase"
import { doc, getDoc, collection} from "firebase/firestore"

export const ItemDetailContainer = () => {
    const { id } = useParams();
    console.log(id)
    const [listProducts, setListProducts] = useState([]);
    const [loading, setLoading] = useState([true]);

    const { DetalleId } = useParams();
    console.log(DetalleId);

    useEffect(() => {
        const productCollection = collection(db, "products");
        const refDoc = doc(productCollection, DetalleId)
        getDoc(refDoc)
        .then((res) => {
            setListProducts({
                    id:res.id,
                    ...res.data()
                })
            })
            .finally(()=>{
                setLoading(false);
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
    )
}
    export default ItemDetailContainer;