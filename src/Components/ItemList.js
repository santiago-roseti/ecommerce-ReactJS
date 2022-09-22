import { films } from "../assets/films"
import Item from "./Item"

const ItemList = (listFilms) => {
console.log(listFilms)
return(
    <>
    id={films.id}
    {listFilms.map((prod, i) => <Item key={`${prod.name}-${i}`} films = {prod}/>)}
    </>
)
}

export { ItemList }