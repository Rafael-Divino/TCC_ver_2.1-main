import { useEffect, useState } from "react";

export const usePorte = () => {
  const [porte, setPorte] = useState([]);

  useEffect(() => {
    fetch("https://petfeliz.azurewebsites.net/api/PetFeliz/ListarPet")
      .then((response) => response.json())
      .then((data) => {
        const porteValues = [...new Set(data.map((item) => item.Porte_Pet))];
        setPorte(porteValues);
      });
  }, []);

  return {
    porte
  };
};
