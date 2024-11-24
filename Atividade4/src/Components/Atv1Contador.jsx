import React, { useState } from 'react'

function Atv1Contador() {
    const [contagem, setContagem] = useState(0)

    const incrementar = () => {
        setContagem(contagem + 1)
    }

    const decrementar = () => {
        if (contagem > 0) {
            setContagem(contagem -1)
        }
    }

    return (
        <div style={{textAlign: 'center', marginTop: '50px'}}>
            <h1 className='$font-family-Roboto'>Contador: {contagem}</h1>
            <button onClick={incrementar} className='btn btn-warning'>Incrementar</button>
            <button onClick={decrementar} className='btn btn-info'>Decrementar</button>
        </div>
    )

}

export default Atv1Contador