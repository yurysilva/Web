import React from 'react'
import camaro from '../img/camaro.jpeg'
import audi from '../img/audi.jpg'
import poscher from '../img/pocher.jpg'
import mcLaren from '../img/mclaren.jpg'
import fusca from '../img/fusca.jpg'
export default function Carros(){

    return(
        <div>
            <ul>
                <li>Lista de carros</li>
                <li>Camaro</li>
                <p><img src={camaro} width='20%'/></p>
                <li>Audi</li>
                <p><img src={audi} width='20%'/></p>
                <li>Poscher</li>
                <p><img src={poscher} width='20%'/></p>
                <li>McLaren</li>
                <p><img src={mcLaren} width='20%'/></p>
                <li>Fusca</li>
                <p><img src={fusca} width='20%'/></p>
            </ul>
        </div>
    );
}