import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Atv1Contador from './Components/Atv1Contador.jsx';
import Atv2CorFundo from './Components/Atv2CorFundo.jsx';
import Atv3ListaTarefas from './Components/Atv3ListaTarefas.jsx';
import Atv4Temporizador from './Components/Atv4Temporizador.jsx';
import Atv5FiltroLista from './Components/Atv5FiltroLista.jsx';
import Atv6Formulario from './Components/Atv6Formulario.jsx';
import Atv7AplicacaoRequisicao from './Components/Atv7AplicacaoRequisicao.jsx';
import Atv8GaleriaImagens from './Components/Atv8GaleriaImagens.jsx';
import Atv9TimerIntervalo from './Components/Atv9TimerIntervalo.jsx';
import Atv10ComponentesTab from './Components/Atv10ComponentesTab.jsx';

function App() {
  return (
    <Router>
      <div>
        <h1>Menu de Atividades</h1>
        <nav>
          <ul>
            <li><Link to="/atividade1">Atividade 1: Contador</Link></li>
            <li><Link to="/atividade2">Atividade 2: Cor de Fundo</Link></li>
            <li><Link to="/atividade3">Atividade 3: Lista de Tarefas</Link></li>
            <li><Link to="/atividade4">Atividade 4: Temporizador</Link></li>
            <li><Link to="/atividade5">Atividade 5: Filtro de Lista</Link></li>
            <li><Link to="/atividade6">Atividade 6: Formulário</Link></li>
            <li><Link to="/atividade7">Atividade 7: Requisição</Link></li>
            <li><Link to="/atividade8">Atividade 8: Galeria de Imagens</Link></li>
            <li><Link to="/atividade9">Atividade 9: Timer de Intervalo</Link></li>
            <li><Link to="/atividade10">Atividade 10: Componentes de Abas</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/atividade1" element={<Atv1Contador />} />
          <Route path="/atividade2" element={<Atv2CorFundo />} />
          <Route path="/atividade3" element={<Atv3ListaTarefas />} />
          <Route path="/atividade4" element={<Atv4Temporizador />} />
          <Route path="/atividade5" element={<Atv5FiltroLista />} />
          <Route path="/atividade6" element={<Atv6Formulario />} />
          <Route path="/atividade7" element={<Atv7AplicacaoRequisicao />} />
          <Route path="/atividade8" element={<Atv8GaleriaImagens />} />
          <Route path="/atividade9" element={<Atv9TimerIntervalo />} />
          <Route path="/atividade10" element={<Atv10ComponentesTab />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
