import React from 'react';

function Header() {
    return (
        <header className="headerParte1">
            <img className="img-header" src="/imgs/header.png" alt="oi" />
            <div className="links-header">
                <div className="link-header"><a href="#home">Home</a></div>
                <div className="link-header"><a href="#sobreMim">Sobre mim</a></div>
                <div className="link-header"><a href="#curiosidades">Curiosidades</a></div>
                <div className="link-header"><a href="#habilidade">Habilidades</a></div>
                <div className="link-header"><a href="#contatos">Contatos</a></div>
            </div>
        </header>
    );
}

export default Header;