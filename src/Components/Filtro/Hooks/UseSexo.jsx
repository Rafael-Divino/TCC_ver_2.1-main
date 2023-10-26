import { useEffect, useState } from "react";

export const useSexo = () => {
  const [sexo, setSexo] = useState([]);

  useEffect(() => {
    fetch("https://petfeliz.azurewebsites.net/api/PetFeliz/ListarPet")
      .then((response) => response.json())
      .then((data) => {
        const sexoValues = [...new Set(data.map((item) => item.Sexo_Pet))];
        setSexo(sexoValues);
      });
  }, []);

  return {
    sexo
  };
};
