import React from 'react'
import './App.css'

export default function App() {

    const paragrafo = {
        backgroundColor: '#ff0000',
        padding: '5%',
        textAlign: 'justify',
        fontFamily: 'Verdana'
    }
    return (
        <div className="container">
            <h1 className="font-s">Conteúdo de App.jsx</h1>
            <p className="font-s">Exemplo de aplicação de Classes no JSX!</p>
            <p style={{ fontSize: '1em', textAlign: 'center'}}>E falavam que o CSS INLINE era o Black-Sheep!!</p>
            <p style={paragrafo}>Renascido das Cinzas</p>
        </div>
    )
}