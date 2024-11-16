import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Atv1Contador from './Components/Atv1Contador.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <Atv1Contador/>
  </StrictMode>,
)
