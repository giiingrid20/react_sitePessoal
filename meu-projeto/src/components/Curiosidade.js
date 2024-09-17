import React from 'react';

function Curiosidade() {
    return (
        <section id="curiosidades" className="curiosidades">
            <div className="elementosCuriosidades">
                <div>
                    <h1>Top 6 curiosidades sobre mim</h1>
                </div>
                <div className="cardsCuriosidades">
                    <div className="card">
                        <div className="img-card">
                            <img src="./imgs/imgsobremim.jpg" alt=""></img>
                        </div>
                        <div>
                            <h2>maquiagem</h2>
                            <p>maquiagem é minha maior paixão desde meus 15 anos.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="img-card">
                            <img src="./imgs/praia.JPG" alt=""></img>
                        </div>
                        <div>
                            <h2>aventura</h2>
                            <p>gosto de aventuras e lugares novos.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="img-card">
                            <img src="./imgs/fotolagoa.jpg" alt=""></img>
                        </div>
                        <div>
                            <h2>natureza</h2>
                            <p>amo a natureza e amo apreciá-la.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="img-card">
                            <img src="./imgs/fotoespelho.jpeg" alt=""></img>
                        </div>
                        <div>
                            <h2>Música</h2>
                            <p>Gosto de vários estilos de música, do reggae ao rock.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="img-card">
                            <img src="./imgs/amo roxo.jpg" alt=""></img>
                        </div>
                        <div>
                            <h2>cor favorita</h2>
                            <p>Minha cor favorita é roxo(um tom de roxo claro), por causa de uma série que envolve música também.
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="img-card">
                            <img src="./imgs/mycat.jpg" alt=""></img>
                        </div>
                        <div>
                            <h2>Cats</h2>
                            <p>Adotei um gatinho de rua, só que minha mãe não gostou da ideia, a solução foi dividir a guarda dele com meu namorado rs.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Curiosidade;