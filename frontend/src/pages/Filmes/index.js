import React, {useState, useEffect} from 'react';
import Header from '../../components/Header';

import api from '../../services/api'

import deletar from '../../assets/delete.png';

import './styles.css';

export default function Filmes(){

    const [filmes, setFilmes] = useState([]);
    const usuarioId = localStorage.getItem('usuarioId');
    const usuarioNome = localStorage.getItem('usuarioNome');
    
    
    useEffect(() =>{
        api.get('filmes', {
            headers:{
                Authorization: usuarioId,
            }
        }).then(response => {
            setFilmes(response.data);
        })
    }, [usuarioId]);
    return(
        <div className="profile-container">
            <Header/>
    <h1>Filmes listados por você, {usuarioNome}</h1>
            <ul>
                {filmes.map(filme => (
                    <li key={filme.id}>
                    <img className="imagem-filme" src={filme.imagem} ></img>
                    <strong>{filme.nome}</strong>
                    <p>{filme.descricao}</p>
                    <p>{filme.nomeCategoria}</p>
                    <button type="button">
                        <img src={deletar} />
                    </button>
                </li>
                ))}               
            </ul>
        </div>
    )
}