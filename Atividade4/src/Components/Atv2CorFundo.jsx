import React, { useState, useEffect } from 'react';
import '../styles/Atv2CorFundo.css';

function Atv2CorFundo() {
    // Estado para armazenar a cor atual
    const [corAtual, setCorAtual] = useState('#ffffff'); 

    useEffect(() => {
        document.body.style.backgroundColor = corAtual;
    }, [corAtual]); // Executa sempre que a cor atual muda

    // Função para gerar uma cor aleatória
    const gerarCorAleatoria = () => {
        const letras = '0123456789ABCDEF';
        let cor = '#';
        for (let i = 0; i < 6; i++) {
            cor += letras[Math.floor(Math.random() * 16)];
        }
        return cor;
    };

    // Função para mudar a cor
    const mudarCor = () => {
        const novaCor = gerarCorAleatoria();
        setCorAtual(novaCor);
    };

    return (
        <div className="container">
            <button onClick={mudarCor} className="button btn btn-secondary">Mudar Cor</button>
        </div>
    );
}

export default Atv2CorFundo;