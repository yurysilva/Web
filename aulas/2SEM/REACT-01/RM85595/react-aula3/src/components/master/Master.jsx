import React from 'react'
import Header from '../header/Header'

export default function Master() {

    const cor = "#bcbcbc"

    return (
        <div className="container">
            <Header corAttrib={cor}>
                <li><a href="#">Imagens</a></li>
                <li><a href="#">Contato</a></li>
            </Header>
        </div>
    )
}