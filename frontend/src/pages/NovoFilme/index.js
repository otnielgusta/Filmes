import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import Header from '../../components/Header';
import api from '../../services/api';

import './styles.css';

export default function Register(){
    
    const [categorias, setCategoria] = useState([]);    
    
    const [nome, setNome] = useState([]);
    const [descricao, setDescricao] = useState([]);
    const [imagem, setImagem] = useState([]);
    const [idCategoria, setCategoriaInput] = useState([]);

    const idUsuario = localStorage.getItem('usuarioId');
    useEffect(() => {
        api.get('filmes/cadastro')
            .then(response => {
                
                setCategoria(response.data);
            })
    }, []);

    async function handleRegister(e){
        e.preventDefault();

        const dados = {
            nome,
            descricao,
            imagem,
            idCategoria,
            idUsuario,
        };
        try{
            const response = await api.post('filmes/cadastro', dados);
            alert(`Filme ${dados.nome} Cadastrado`);
        }catch(err){
            alert("Erro ao cadastrar");
        }

       
    } 
    return(
        <div className="profile-container">
            <Header/>
            <div className="register-container">
                <div className="content">
                    <form onSubmit={handleRegister}>
                        <h2>Cadastre um filme novo</h2>
                        <input 
                            placeholder="Nome do filme" 
                            value={nome}
                            onChange={e => setNome(e.target.value)}
                            >
                            
                        </input>
                        <input 
                            placeholder="Descrição do filme" 
                            value={descricao}
                            onChange={e => setDescricao(e.target.value)}    
                        >
                        </input>
                        <input 
                            placeholder="Imagem do filme" 
                            value={imagem}
                            onChange={e => setImagem(e.target.value)}
                        ></input>
                        <select 
                            className="select-categoria" 
                            value={idCategoria}
                            onChange={e=> setCategoriaInput(e.target.value)}>
                                <option>Selecione a Categoria</option>
                                { categorias.map(categoriaa => (
                                    <option 
                                        value={categoriaa.idCategoria} 
                                        >{categoriaa.nomeCategoria}</option>   

                                ))                        
                            }  
                                         
                        </select>
                        <button type="submit">Cadastrar</button>
                        <Link to="/filmes"><button className="voltar">Voltar</button></Link>
                    </form>
                </div>
            </div>
        </div>
    );
}