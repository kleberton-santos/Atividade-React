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
      <div className="container mt-5">
        <h1 className="text-center mb-4 btn btn-secondary">Menu de Atividades</h1>

        {/* Menu com Botões */}
        <div className="row g-3">
          <div className="col-md-2">
            <Link to="/atividade1" className="btn btn-success btn-block w-100">
              Atividade 1
            </Link>
          </div>
          <div className="col-md-2">
            <Link to="/atividade2" className="btn btn-success btn-block w-100">
              Atividade 2
            </Link>
          </div>
          <div className="col-md-2">
            <Link to="/atividade3" className="btn btn-success btn-block w-100">
              Atividade 3
            </Link>
          </div>
          <div className="col-md-2">
            <Link to="/atividade4" className="btn btn-success btn-block w-100">
              Atividade 4
            </Link>
          </div>
          
          <div className="col-md-2">
            <Link to="/atividade5" className="btn btn-success btn-block w-100">
              Atividade 5
            </Link>
          </div>
          
          <div className="col-md-2">
            <Link to="/atividade6" className="btn btn-success btn-block w-100">
              Atividade 6
            </Link>
          </div>
          <div className="col-md-2">
            <Link to="/atividade7" className="btn btn-success btn-block w-100">
              Atividade 7
            </Link>
          </div>
          <div className="col-md-2">
            <Link to="/atividade8" className="btn btn-success btn-block w-100">
              Atividade 8
            </Link>
          </div>
          <div className="col-md-2">
            <Link to="/atividade9" className="btn btn-success btn-block w-100">
              Atividade 9
            </Link>
          </div>
          <div className="col-md-2">
            <Link to="/atividade10" className="btn btn-success btn-block w-100">
              Atividade 10
            </Link>
          </div>
        </div>

        {/* Conteúdo Principal */}
        <div className="mt-5">
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
            <Route
              path="/"
              element={
                <div className="text-center">
                  <p>Bem-vindo! Clique em um botão acima para acessar uma atividade.</p>
                </div>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
