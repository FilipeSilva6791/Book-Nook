import React, { useState } from "react";
import HelloWorld from "./components/HelloWorld";
import InputField from "./components/InputField";
import './App.css';

function App() {
    const [inputValue, setInputValue] = useState("");

    return (
        <div className="App">
            <div className="App-header">
                <HelloWorld />
                <InputField label="Digite algo:" placeholder="Escreva aqui..." onChange={setInputValue} />
            </div>
        </div>
    );
}

export default App;
