import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import Header from '../../components/Header';
import api from '../../services/api';

import './styles.css';

export default function Register(){
    
    const [nomeCategoria, setNome] = useState([]);
   
    async function handleRegister(e){
        e.preventDefault();

        const dados = {
            nomeCategoria,
        };
        try{
            const response = await api.post('/filmes/categorias', dados);
            alert(`Categoria ${dados.nomeCategoria} Cadastrada`);
            resetar();
            
        }catch(err){
            alert("Erro ao cadastrar");
        }

       
    } 
    function resetar(){
     
    }
    return(
        <div className="profile-container">
            <Header/>
            <div className="register-container">
                <div className="content">
                    <form onSubmit={handleRegister}>
                        <h2>Cadastre uma nova categoria</h2>
                        <input 
                            placeholder="Nome da Categoria" 
                            value={nomeCategoria}
                            onChange={e => setNome(e.target.value)}
                            >
                            
                        </input>
                       
                        <button type="submit">Cadastrar</button>
                        <Link to="/filmes"><button className="voltar">Voltar</button></Link>
                    </form>
                </div>
            </div>
        </div>
    );
}