import Item from "./Item/Item"

const ItemList = ({listFilms}) => {
console.log(listFilms)
return(
    <>
    {listFilms?.map((prod, i) => <Item key={`${prod.name}-${i}`} films = {prod}/>)}
    </>
)
}

export { ItemList };