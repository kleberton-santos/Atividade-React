import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//import Atv1Contador from './Components/Atv1Contador.jsx'
//import Atv2CorFundo from './Components/Atv2CorFundo.jsx'
//import Atv3ListaTarefas from './Components/Atv3ListaTarefas.jsx'
import Atv4Temporizador from './Components/Atv4Temporizador.jsx'
import Atv5FiltroLista from './Components/Atv5FiltroLista.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <Atv5FiltroLista/>
  </StrictMode>,
)
