import react from "react";
import './ItemListContainer.css';

export default function ItemListContainer( {greeting} ) {
    return  (
        <section className="repro__container">
            <div className="repro__about">
                <h2 className="repro__title">¿Que es el {greeting}?</h2>
                <p className="repro__paragraph">El {greeting} es una base de datos diseñada para poder registrar a aquellas personas que cuenten con las condiciones para acceder a un cultivo controlado de la planta de Cannabis, con fines de tratamiento medicinal, terapéutico y/o paliativo del dolor.</p>
                <a href="reprocann.html" className="btn__repro">Quiero registrarme</a>
            </div>
        </section>
    )
}