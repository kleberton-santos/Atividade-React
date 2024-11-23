import { useState } from "react";

function Atv3ListaTarefas() {
    const [tarefas, setTarefas] = useState([]); 
    const [novaTarefa, setNovaTarefa] = useState(''); 
    const [filtro, setFiltro] = useState('todas');

    // Atualizar o valor do input
    const handleInputChange = (event) => {
        setNovaTarefa(event.target.value);
    };

    // Adicionar uma nova tarefa
    const handleAddTask = () => {
        if (novaTarefa.trim() === '') {
            return;
        }

        const nova = {
            texto: novaTarefa,
            concluida: false,
        };

        setTarefas([...tarefas, nova]);
        setNovaTarefa('');
    };

    
    const handleRemoveTask = (index) => {
        const updatedTasks = tarefas.filter((_, i) => i !== index);
        setTarefas(updatedTasks);
    };

  
    const handleToggleComplete = (index) => {
        const updatedTasks = tarefas.map((tarefa, i) =>
            i === index ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
        );
        setTarefas(updatedTasks);
    };

    const tarefasFiltradas = tarefas.filter((tarefa) => {
        if (filtro === 'pendentes') {
            return !tarefa.concluida;
        }
        if (filtro === 'concluidas') {
            return tarefa.concluida;
        }
        return true;
    });

    return (
        <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
            <h1 className="text-bg-primary mb-3">Lista de Tarefas</h1>
            
            <input
                type="text"
                value={novaTarefa}
                onChange={handleInputChange}
                placeholder="Digite uma nova tarefa"
                style={{ padding: '5px', width: '100%', marginBottom: '10px' }}
            />
            <button onClick={handleAddTask} className="btn btn-primary" style={{ marginBottom: '10px' }}>
                Adicionar Tarefa
            </button>

            <div>
                <button onClick={() => setFiltro('todas')} className="btn btn-primary" style={{ margin: '0 5px' }}>
                    Todas
                </button>
                <button onClick={() => setFiltro('pendentes')} className="btn btn-primary" style={{ margin: '0 5px' }}>
                    Pendentes
                </button>
                <button onClick={() => setFiltro('concluidas')} className="btn btn-primary" style={{ margin: '0 5px' }}>
                    Concluídas
                </button>
            </div>

            <ul>
                {tarefasFiltradas.map((tarefa, index) => (
                    <li key={index} style={{ marginBottom: '10px' }}>
                        <span
                            style={{
                                textDecoration: tarefa.concluida ? 'line-through' : 'none',
                                marginRight: '10px',
                                cursor: 'pointer',
                            }}
                            onClick={() => handleToggleComplete(index)}
                        >
                            {tarefa.texto}
                        </span>
                        <button onClick={() => handleRemoveTask(index)}>Remover</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Atv3ListaTarefas;
