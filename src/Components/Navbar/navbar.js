import React from "react"
import Logo from "../../assets/logo-cine.jpg"
import CartWidget from "../CartWiew/CartWidget"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
    <header style={styles.container}> 
        <img style={styles.imagen} src={Logo} alt="Logo de mi página"></img>
        <h1 style={styles.title}>TopCinema</h1>
        <nav>
            <Link style={styles.links} to="/">Inicio</Link>
            <Link style={styles.links} to="/category/Catálogo">Catálogo</Link>
            <Link style={styles.links} to="/category/Combos">Combos</Link>
        </nav>
            <Link to="/cart"><CartWidget style={styles.cart} /></Link>
    </header>
    )
}

const styles = {
    container : {
        display: "flex",
        justifyContent: "space-between",
        alignContent: "center",
        paddingTop: "20px",
        backgroundColor: "#2b2b2b"
    },
    imagen :{ 
        width: "75px",
        height: "75px",
        paddingLeft: "20px"
    },
    title : {
        paddingBottom: "20px",
        color: "white"
    },
    links: {
        padding: 50,
        alignItems: "center",
        color: "white",
        textDecoration: "none",
        fontSize: "1.2rem"
    },
    cart: {
        marginRight: 20,
        color: "white"
    }

}

export default Navbar