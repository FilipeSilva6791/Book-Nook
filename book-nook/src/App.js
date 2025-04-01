import React, { useState } from "react";
import HelloWorld from "./components/HelloWorld";
import InputField from "./components/InputField";

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
      <div className="p-4">
        <HelloWorld />
        <InputField label="Digite algo:" placeholder="Escreva aqui..." onChange={setInputValue} />
        <p className="mt-2 text-lg">Valor digitado: {inputValue}</p>
      </div>
  );
}

export default App;
