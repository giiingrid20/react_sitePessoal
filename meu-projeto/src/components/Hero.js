import React from 'react';

function Hero() {
    return (
        <section id="home" className="hero">
            <div className="heroTransparencia">
                <div className="heroEsquerda">
                    <h1>Giovanna Ingrid</h1>
                    <div className="butaohero">
                        <a href="#sobreMim">Sobre mim</a>
                    </div>
                </div>
                <div className="heroDireita">
                    <img src="./imgs/heroimg.jpg" alt=""></img>
                </div>
            </div>
        </section>
    );
}

export default Hero;