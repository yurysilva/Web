import React from 'react';
import logo from './logo.svg';
import Carros from './componetes/Carros';
export default function cabecalho(){

    return(
        <div>
        <header className="App-header">
          
            <h1>
                Primeira parte do exercício
                <p>implementando o paragrafo</p>
            </h1>
            <Carros/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      </div>
    );
}