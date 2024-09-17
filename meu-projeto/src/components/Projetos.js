import React from 'react';

function Projetos() {
    return (
        <div id='Projetos' className='portifolio'>
            <h1>Meus Projetos</h1>
            <div className='card'>
                <img src='https://via.placeholder.com/300x200' alt='Projeto 1' />
                <div className='card-text'>
                    <h3>Projeto 1</h3>
                    <p>Descrição do projeto 1.</p>
                </div>
            </div>
            <div className='card'>
                <img src='https://via.placeholder.com/300x200' alt='Projeto 2' />
                <div className='card-text'>
                    <h3>Projeto 2</h3>
                    <p>Descrição do projeto 2.</p>
                </div>
            </div>
            <div className='card'>
                <img src='https://via.placeholder.com/300x200' alt='Projeto 3' />
                <div className='card-text'>
                    <h3>Projeto 3</h3>
                    <p>Descrição do projeto 3.</p>
                </div>
            </div>
        </div>
    );
}

export default Projetos;

