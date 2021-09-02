import React from 'react'

export default function Header(props) {
    return (
        <header>
            <nav>
                <ul>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">{props.valorAttrib}</a></li>
                </ul>
            </nav>
        </header>
    )
}