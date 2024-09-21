import React from 'react';

function Projetos() {
    return (
        
        <div id='Projetos' className='portifolio'>
           
            <div className='card'>
                <img src='./imgs/Logo-BlushGlamour.png' alt='Projeto 1' />
                <div className='card-text'>
                    <h3>Projeto BlushGlamour</h3>
                    <p>O Projeto BlushGlamour é um site fictício de vendas de produtos de beleza.</p>
                    <a href='https://github.com/Everaldo-ifrn/Projeto-BlushGlamour/blob/main/static/imagens/Pagina_principal/Logo-BlushGlamour.png' target='_blank' rel='noopener noreferrer'>
                    Veja o projeto
                </a>
                </div>
            </div>
            <div className='card'>
                <img src='./imgs/logoLoreta.png' alt='Projeto 2' />
                <div id='loreta' className='card-text'>
                    <h3>Projeto Desenvolvido Sobre professor</h3>
                    <p>O Projeto foi criado com intuito de aprendizado Sobre Responsividade </p>
                    <a href='https://github.com/giiingrid20/projeto_site-prof'>
                    Veja o projeto
                    </a>
                </div>
            </div>
            <div className='card'>
                <img id='imagemcafe' src='./imgs/logoCafe.jpg' alt='Projeto 3' />
                <div className='card-text'>
                    <h3>Projeto Café</h3>
                    <p>Projeto Desenvolvido em aula de Autoria web</p>
                    <a href='https://github.com/giiingrid20/aweb/tree/main/Blog-ch%C3%A1'>
                    Veja o projeto
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Projetos;

