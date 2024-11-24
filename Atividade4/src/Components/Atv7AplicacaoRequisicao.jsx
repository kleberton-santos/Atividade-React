import React, { useState, useEffect } from 'react';

function Atv7AplicacaoRequisicao() {
    // Estado para armazenar a lista de posts
    const [posts, setPosts] = useState([]);
    // Estado para controlar o carregamento
    const [loading, setLoading] = useState(false);

    // Função para carregar os posts da API
    const fetchPosts = async () => {
        setLoading(true); // Inicia o indicador de carregamento
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            setPosts(data); // Armazena os dados obtidos
        } catch (error) {
            console.error('Erro ao carregar os posts:', error);
        } finally {
            setLoading(false); // Finaliza o indicador de carregamento
        }
    };

    // Carregar os posts ao montar o componente
    useEffect(() => {
        fetchPosts();
    }, []); // Dependência vazia: executa apenas uma vez

    return (
        <div>
        <h1>Lista de Posts</h1>
        {/* Indicador de carregamento */}
        {loading ? (
            <p>Carregando...</p>
        ) : (
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {posts.map(post => (
                    <li key={post.id} style={{ marginBottom: '20px' }}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        )}
        {/* Botão para recarregar os dados */}
        <button onClick={fetchPosts} className="btn btn-primary">Recarregar Posts</button>
    </div>
    );
}

export default Atv7AplicacaoRequisicao;
