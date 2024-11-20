import React, { useState } from 'react';

function Atv10ComponentesTab() {
    // Estado para controlar a aba ativa
    const [abaAtiva, setAbaAtiva] = useState('sobre');  // A primeira aba ativa será 'sobre'

    // Função para renderizar o conteúdo baseado na aba ativa
    const renderizarConteudo = () => {
        switch (abaAtiva) {
            case 'sobre':
                return <p>Este é o conteúdo da aba "Sobre". Aqui você encontra informações sobre nossa empresa.</p>;
            case 'contato':
                return <p>Este é o conteúdo da aba "Contato". Aqui você pode entrar em contato conosco.</p>;
            default:
                return null;
        }
    };

    // Função para mudar a aba ativa
    const mudarAba = (aba) => {
        setAbaAtiva(aba);
    };

    return (
        <div>
            <div style={{ display: 'flex', marginBottom: '20px' }}>
                {/* Abas */}
                <div
                    onClick={() => mudarAba('sobre')}
                    style={{
                        padding: '10px 20px',
                        cursor: 'pointer',
                        borderBottom: abaAtiva === 'sobre' ? '2px solid #007bff' : 'none',
                        fontWeight: abaAtiva === 'sobre' ? 'bold' : 'normal',
                    }}
                >
                    Sobre
                </div>
                <div
                    onClick={() => mudarAba('contato')}
                    style={{
                        padding: '10px 20px',
                        cursor: 'pointer',
                        borderBottom: abaAtiva === 'contato' ? '2px solid #007bff' : 'none',
                        fontWeight: abaAtiva === 'contato' ? 'bold' : 'normal',
                    }}
                >
                    Contato
                </div>
            </div>

            {/* Conteúdo da aba ativa */}
            <div>
                {renderizarConteudo()}
            </div>
        </div>
    );
}

export default Atv10ComponentesTab;

