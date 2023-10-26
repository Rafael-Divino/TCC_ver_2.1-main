import { useState } from "react";
import { SelectEstado } from "./Estado/SelectEstado";
import { SelectCidade } from "./Cidade/SelectCidade";
import { SelectPorte } from "./Porte/SelectPorte";
import { SelectSexo } from "./Sexo/SelectSexo";

export default function Filter() {
  const [selectedUf, setSelectedUf] = useState("");
  const [selectedporte, setSelectPorte] = useState(""); // Corrigido para 'selectedporte'
  const [selectedsexo, setSelectSexo] = useState(""); // Corrigido para 'selectedporte'

  return (
    <div className="App">
      <SelectEstado onChange={setSelectedUf} />
      <SelectPorte selectedPorte={selectedporte} onChange={setSelectPorte} /> {/* Corrigido para 'selectedPorte' */}
      <SelectSexo selectedSexo={selectedsexo} onChange={setSelectSexo} /> {/* Corrigido para 'selectedPorte' */}
      <SelectCidade uf={selectedUf} />
    </div>
  );
}
