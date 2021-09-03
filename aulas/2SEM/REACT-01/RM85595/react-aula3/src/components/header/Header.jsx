import React from 'react'

export default function Header(props) {

    const horas = new Date().getHours();

    return (
        <header>
            <nav>
                <ul style={{ backgroundColor: horas > 7 ? props.corAttrib: '#0000ff'}}>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Serviço</a></li>
                </ul>
            </nav>
        </header>
    )
}