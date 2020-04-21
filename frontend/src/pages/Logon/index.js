import React, {useState} from 'react';
import { Link,useHistory } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

export default function Logon(){
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const history = useHistory();

    async function handlelogin(e){
        e.preventDefault();
       

        try{
            const response = await api.post('login', { nome, senha });
            localStorage.setItem('usuarioId', response.data.idUsuario);
            localStorage.setItem('usuarioNome', response.data.nomeUsuario);

            history.push('/filmes');
        }
        catch(err){
            alert('Falha no login');
        }
        
    }

    return(
        <div className="logon-container">
            <section className="form">
                <form onSubmit={handlelogin}>
                    <h1>Faça seu Login</h1>
                    <input 
                        type="text" 
                        placeholder="Usuário"
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                    ></input>
                    <input 
                        type="text"
                        placeholder="Senha"
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                        ></input>
                    <button type="submit">Entrar</button>
                </form>
            </section>
        </div>
    );
}