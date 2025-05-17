import { useState } from "react";
import './App.css'

function App() {
    const [texto, setTexto] = useState('');

    const handleTexto = (event) => {
        setTexto(event.target.value);
    }

    return (
        <div className="container">
            <div>Capture su texto</div>
            <input 
                type="text" 
                value={texto} 
                onChange={handleTexto} 
                className="input-texto" 
            />
            <h3>Su texto</h3>
            <div className="texto-mostrado">
                {texto}
            </div>
        </div>
    );
}

export default App