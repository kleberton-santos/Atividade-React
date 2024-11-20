import React, { useState } from 'react';

// Componente para exibir a mensagem de boas-vindas
function BoasVindas({ nome }) {
    return <h2>Bem-vindo, {nome}!</h2>;
}

function Atv6Formulario() {
    // Estado para armazenar os valores dos campos
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    // Estado para armazenar a mensagem de erro (se houver)
    const [erro, setErro] = useState('');

    // Estado para verificar se o formulário foi enviado com sucesso
    const [formEnviado, setFormEnviado] = useState(false);

    // Função para lidar com a mudança no campo de nome
    const handleNomeChange = (e) => setNome(e.target.value);

    // Função para lidar com a mudança no campo de e-mail
    const handleEmailChange = (e) => setEmail(e.target.value);

    // Função para lidar com a mudança no campo de senha
    const handleSenhaChange = (e) => setSenha(e.target.value);

    // Função para validar e enviar o formulário
    const handleSubmit = (e) => {
        e.preventDefault(); // Previne o comportamento padrão de recarregar a página

        // Verifica se todos os campos estão preenchidos
        if (!nome || !email || !senha) {
            setErro('Todos os campos são obrigatórios!');
            setFormEnviado(false);
            return;
        }

        // Limpa a mensagem de erro se os campos estiverem preenchidos
        setErro('');
        setFormEnviado(true);
    };

    return (
        <div>
            {/* Exibe a mensagem de boas-vindas se o formulário foi enviado */}
            {formEnviado && <BoasVindas nome={nome} />}

            {/* Exibe a mensagem de erro se houver */}
            {erro && <p style={{ color: 'red' }}>{erro}</p>}

            {/* Formulário de cadastro */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nome:</label>
                    <input
                        type="text"
                        value={nome}
                        onChange={handleNomeChange}
                        placeholder="Digite seu nome"
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Digite seu e-mail"
                    />
                </div>
                <div>
                    <label>Senha:</label>
                    <input
                        type="password"
                        value={senha}
                        onChange={handleSenhaChange}
                        placeholder="Digite sua senha"
                    />
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default Atv6Formulario;
