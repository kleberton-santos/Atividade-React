import React, { useState } from 'react';

function Atv8GaleriaImagens() {
    // Lista de imagens para a galeria
    const imagens = [
        'https://m.media-amazon.com/images/S/pv-target-images/bb6167717c7a918c1db2bac52234f191024624dcdb41e382a2041959898d789c.jpg',
        'https://br.web.img3.acsta.net/pictures/210/571/21057125_20131112201221324.jpg',
        'https://br.web.img3.acsta.net/medias/nmedia/18/92/91/32/20224832.jpg',
        'https://br.web.img2.acsta.net/medias/nmedia/18/92/34/89/20194741.jpg',
        'https://upload.wikimedia.org/wikipedia/pt/0/0d/EsdlaIII.jpg'
    ];

    // Estado para armazenar a imagem selecionada para visualização ampliada
    const [imagemSelecionada, setImagemSelecionada] = useState(null);

    // Função para abrir o modal e selecionar a imagem
    const abrirModal = (imagem) => {
        setImagemSelecionada(imagem);
    };

    // Função para fechar o modal
    const fecharModal = () => {
        setImagemSelecionada(null);
    };

    // Função para navegar entre as imagens
    const navegarImagem = (direcao) => {
        if (imagemSelecionada) {
            const indiceAtual = imagens.indexOf(imagemSelecionada);
            const novoIndice = (indiceAtual + direcao + imagens.length) % imagens.length; // garante que o índice seja cíclico
            setImagemSelecionada(imagens[novoIndice]);
        }
    };

    return (
        <div>
            <h1>Galeria de Imagens</h1>

            {/* Exibição das imagens na galeria */}
            <div style={{ display: 'flex', gap: '10px' }}>
                {imagens.map((imagem, index) => (
                    <img
                        key={index}
                        src={imagem}
                        alt={`Imagem ${index + 1}`}
                        style={{ width: '200px', cursor: 'pointer' }}
                        onClick={() => abrirModal(imagem)}
                    />
                ))}
            </div>

            {/* Modal para visualização ampliada da imagem */}
            {imagemSelecionada && (
                <div style={modalStyles.overlay}>
                    <div style={modalStyles.modal}>
                        <button onClick={fecharModal} style={modalStyles.closeButton}>Fechar</button>
                        <button onClick={() => navegarImagem(-1)} style={modalStyles.navButton}>←</button>
                        <img
                            src={imagemSelecionada}
                            alt="Imagem Ampliada"
                            style={modalStyles.imagemAmpliada}
                        />
                        <button onClick={() => navegarImagem(1)} style={modalStyles.navButton}>→</button>
                    </div>
                </div>
            )}
        </div>
    );
}

// Estilos para o modal
const modalStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000
    },
    modal: {
        position: 'relative',
        backgroundColor: '#fff',
        padding: '20px',
        maxWidth: '90%',
        maxHeight: '90%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    imagemAmpliada: {
        maxWidth: '100%',
        maxHeight: '80vh',
        marginBottom: '20px'
    },
    closeButton: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        backgroundColor: 'red',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        padding: '10px',
        borderRadius: '5px'
    },
    navButton: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        padding: '10px',
        borderRadius: '5px',
        margin: '10px'
    }
};

export default Atv8GaleriaImagens;
