import React, { useState, useEffect } from 'react';

function Atv9TimerIntervalo() {
    
    const [tempo, setTempo] = useState(0);  
    const [tempoInicial, setTempoInicial] = useState(0);  
    const [emExecucao, setEmExecucao] = useState(false);  
    const [intervalo, setIntervalo] = useState(null);  

    // Função para iniciar a contagem regressiva
    const iniciarTimer = () => {
        setTempoInicial(tempo);  // Armazenar o tempo inicial para reiniciar mais tarde
        setEmExecucao(true);
    };

    // Função para pausar o timer
    const pausarTimer = () => {
        clearInterval(intervalo);  // Limpar o intervalo para pausar a contagem
        setEmExecucao(false);
    };

    // Função para reiniciar o timer
    const reiniciarTimer = () => {
        setTempo(tempoInicial);  // Resetar o tempo para o valor inicial
        setEmExecucao(false);
        clearInterval(intervalo);  // Limpar o intervalo caso esteja em execução
    };

    // useEffect para lidar com a contagem regressiva
    useEffect(() => {
        if (emExecucao && tempo > 0) {
            const idIntervalo = setInterval(() => {
                setTempo((prevTempo) => {
                    if (prevTempo - 1 <= 0) {
                        clearInterval(idIntervalo);  // Parar o intervalo quando o tempo chegar a zero
                        alert('O tempo acabou!');
                        return 0;
                    }
                    return prevTempo - 1;  // Decrementar o tempo
                });
            }, 1000);

            setIntervalo(idIntervalo);  // Armazenar o id do intervalo para controle

            return () => clearInterval(idIntervalo);  // Limpar o intervalo quando o componente for desmontado ou reexecutado
        }
    }, [emExecucao, tempo]);

    return (
        <div>
            <h1>Timer de Contagem Regressiva</h1>
            <input
                type="number"
                value={tempo}
                onChange={(e) => setTempo(Number(e.target.value))}
                min="1"
                placeholder="Digite o tempo em segundos"
            />
            <div>
                <button onClick={iniciarTimer} disabled={emExecucao || tempo === 0} className='btn btn-warning'>Iniciar</button>
                <button onClick={pausarTimer} disabled={!emExecucao} className='btn btn-info'>Pausar</button>
                <button onClick={reiniciarTimer} disabled={tempo === 0} className='btn btn-secondary'>Reiniciar</button>
            </div>
            <h2>{tempo} segundos restantes</h2>
        </div>
    );
}

export default Atv9TimerIntervalo;
