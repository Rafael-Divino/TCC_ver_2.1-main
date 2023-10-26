import { useEffect, useState } from "react";

export const useEstados = () => {
    const [estados, setEstados] = useState([]);

  useEffect(() => {
    fetch("https://brasilapi.com.br/api/ibge/uf/v1")
      .then((response) => response.json())
      .then((data) => setEstados(data));
  }, []);

  return {
    estados
  };
};
