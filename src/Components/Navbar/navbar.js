import React from "react"
import Logo from "../imagenes/logo-cine.jpg"
import CartWidget from "../CartWidget"
import { grey } from "@mui/material/colors"
const Navbar = () => {
    return (
    <header style={styles.container}> 
        <img style={styles.imagen} src={Logo} alt="Logo de mi página"></img>
        <h1 style={styles.title}>TopCinema</h1>
        <nav>
            <a style={styles.links} href="#">Inicio</a>
            <a style={styles.links} href="#">Catálogo</a>
            <a style={styles.links} href="#">Promociones</a>
            <a style={styles.links} href="#">Combos</a>
            <a style={styles.links} href="#">Nosotros</a>
        </nav>
        <CartWidget style={styles.cart} />
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