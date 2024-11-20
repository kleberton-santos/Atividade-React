import React, { useState } from 'react';

function Atv5FiltroLista() {
    // Lista de nomes para exibir
    const nomes = ['Ana', 'João', 'Carlos', 'Maria', 'Pedro', 'Lucas', 'Fernanda', 'Beatriz'];

    // Estado para controlar o filtro
    const [filtro, setFiltro] = useState('');

    // Função para lidar com a mudança no campo de entrada
    const handleChange = (event) => {
        setFiltro(event.target.value); // Atualiza o estado com o valor do campo de entrada
    };

    // Filtra os nomes com base no valor do filtro, ignorando maiúsculas/minúsculas
    const nomesFiltrados = nomes.filter(nome => 
        nome.toLowerCase().includes(filtro.toLowerCase()) // Ignora a diferença entre maiúsculas e minúsculas
    );

    return (
        <div>
            <h1>Lista de Nomes</h1>
            
            <input
                type="text"
                placeholder="Digite para filtrar"
                value={filtro} // O valor do campo é controlado pelo estado
                onChange={handleChange} // Atualiza o estado sempre que o usuário digitar algo
            />
            
            <ul>
                {nomesFiltrados.map((nome, index) => (
                    <li key={index}>{nome}</li> // Exibe os nomes filtrados
                ))}
            </ul>
        </div>
    );
}

export default Atv5FiltroLista;
