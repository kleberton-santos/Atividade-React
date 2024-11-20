import { useState, useEffect } from "react";

function Atv4Temporizador() {
    const [temporizador, setTemporizador] = useState(0); 
    const [ativo, setAtivo] = useState(false); 

    useEffect(() => {
        let interval;
        if (ativo) {
            // Se o temporizador está ativo, inicia um intervalo de 1 segundo
            interval = setInterval(() => {
                setTemporizador((prev) => prev + 1); 
            }, 1000);
        } else if (!ativo && temporizador !== 0) {
            // Se o temporizador foi pausado, limpa o intervalo
            clearInterval(interval);
        }
        return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
    }, [ativo]); 

    // Função para iniciar/pausar o temporizador
    const toggleTemporizador = () => {
        setAtivo(!ativo); 
    };

    // Função para reiniciar o temporizador
    const resetTemporizador = () => {
        setTemporizador(0); 
        setAtivo(false); 
    };

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h1>Temporizador</h1>
            <p style={{ fontSize: "24px", fontWeight: "bold" }}>{temporizador} segundos</p>
            <button onClick={toggleTemporizador} style={{ marginRight: "10px" }}>
                {ativo ? "Pausar" : "Iniciar"}
            </button>
            <button onClick={resetTemporizador}>Reiniciar</button>
        </div>
    );
}

export default Atv4Temporizador;
