import React, {useState} from 'react';
import './style.css'
import api from '../services/api';

function Encomenda () {
    const [trackCode, setTrackCode] = useState ('')
    const [search, setSearch] = useState ('')
    
    async function searchEncomenda (){ 
             
        const response = await api.get(`/rastreio/ect/${search}`)
        
        console.log(response.data.historico[0])
        setTrackCode(response.data)
    }

    return (
        <div className="container">
            <form onSubmit={searchEncomenda}>
            <input 
            placeholder="Código de Rastreio"
            type="text" 
            value = {search}
            onChange = { e => setSearch(e.target.value)} 
            />
            <input type="submit" value="buscar" className="button" placeholder="vai"/>
            </form>
            <div>
                {trackCode && (
                    <div>
                        Código:
                        <p>{trackCode.codigo}</p>
                        <br></br>
                        Serviço:
                        <p>{trackCode.servico}</p>
                        <br></br>

                        Histórico:
                        Local:
                        <p>{trackCode.historico[0].local}</p>
                        Data:
                        <p>{trackCode.historico[0].data}</p>
                        Situação:
                        <p>{trackCode.historico[0].situacao}</p>
                        Detalhes:
                        <p>{trackCode.historico[0].detalhes}</p>
                    </div>
                )} 
            </div>

        </div>
    )
}
export default Encomenda;


