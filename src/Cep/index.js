import React from 'react';
import api from '../services/api';
import { useState } from 'react';


function Cep(){
    const [pesquisa, setPesquisa] = useState('');
    const [codigo, setCodigo] = useState([]);

    async function HandleCep(e){
        e.preventDefault();

        const response = await api.get(`/cep/${pesquisa}`);

        console.log(response);

        setCodigo(response.data);

    }

    return(
        <div className="container">

            <form onSubmit={HandleCep}>
                <input type="text" placeholder="Informe um cep" value={pesquisa} onChange={e => setPesquisa(e.target.value)} />
                <input className="submit" type="submit" value="Buscar" />
            </form>

            {
                codigo && (
                    <div>
                        <p>{}</p>
                        <p>{codigo.bairro}</p>
                        <p>{codigo.cidade}</p>
                        <p>{codigo.logradouro}</p>
                        <p>{codigo.cep}</p>
                        <p>{codigo.estado}</p>
                    </div>
                )
            }
        </div>
    )
}

export default Cep;