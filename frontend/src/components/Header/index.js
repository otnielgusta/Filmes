import React from 'react';
import { Link } from 'react-router-dom';
import exit from '../../assets/exit.png';

import './styles.css';


export default function Header(){
    const usuarioNome = localStorage.getItem('usuarioNome');
    return(          
            <header id="main-header">
                <h4>Filmes para assistir</h4>
                <span>Bem vindo {usuarioNome}</span>
                <div className="acoes">
                    <Link to="/filmes/cadastro" className="comestilo">+ Filme</Link>
                    <Link to="/filmes/categorias" className="comestilo">+ Categoria</Link>
                    <Link className="naomexe" to="/login"></Link>
                </div>

            </header>
     
    )
}