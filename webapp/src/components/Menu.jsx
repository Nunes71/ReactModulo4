import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
    return (
        <nav>
            <Link to="/Home">Home</Link><br/>
            <Link to="/Destinos">Destinos</Link><br/>
            <Link to="/Promoção">Promoção</Link><br/>
            <Link to="/Contato">Contato</Link>
            <>
            </>
        </nav>
    );
}