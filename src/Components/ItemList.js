import Item from "./Item/Item"

const ItemList = ({listProducts}) => {
console.log(listProducts)
return(
    <>
    {listProducts?.map((prod, i) => <Item key={`${prod.name}-${i}`} products = {prod}/>)}
    </>
)
}

export { ItemList };