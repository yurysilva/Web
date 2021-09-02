import React from 'react'
import Header from '../header/Header'

export default function Master() {

    const valor = "Serviço"

    return (
        <div className="container">
            <Header valorAttrib={valor}/>
        </div>
    )
}