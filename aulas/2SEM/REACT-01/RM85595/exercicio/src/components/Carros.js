import React from 'react'
import camaro from '../img/camaro.jpeg'
import audi from '../img/audi.jpg'
import poscher from '../img/pocher.jpg'
import mcLaren from '../img/mclaren.jpg'
import fusca from '../img/fusca.jpg'
export default function Carros(props){

    return(
        <div>
            <ul>
                <h2>Lista de carros:<span>{props.carrosAttribTitulo}</span></h2>
                <li>{props.carrosAttrib[0]}</li>
                <p><img src={camaro} width='20%'/></p>
                <li>{props.carrosAttrib[1]}</li>
                <p><img src={audi} width='20%'/></p>
                <li>{props.carrosAttrib[2]}</li>
                <p><img src={poscher} width='20%'/></p>
                <li>{props.carrosAttrib[3]}</li>
                <p><img src={mcLaren} width='20%'/></p>
                <li>{props.carrosAttrib[4]}</li>
                <p><img src={fusca} width='20%'/></p>
            </ul>
        </div>
    );
}