import '../Home/Home.css';
import { useEffect, useState } from 'react';
import CardsAnimal from "../../Components/Card/CardsAnimal/CardsAnimal";
import CustomSlider from "../../Components/Carousel/Carousel";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


export default function Home() {
  const [animal, setAnimal] = useState([]);
  const navigate = useNavigate();

  async function ListarPets() {
    try {
      const response = await axios.get('https://petfeliz.azurewebsites.net/api/PetFeliz/ListarPet');
      const json = response.data;
      setAnimal(json);
      console.log("retorno:", setAnimal)
    }
    catch { }
  }

  useEffect(() => {
    ListarPets();
  }, []);

  const handleClickadote = () => {
    navigate('/adote')
  }

  const handleClickdoe = () => {
    navigate('/doe')
  }

  return (
    <div className="home">
      <div className="body-home">
        <div className="box-carrousel">
          <CustomSlider></CustomSlider>
        </div>
        <div className="titulo-principal">
          <h1>Faça a diferença e Adote um amigo!</h1>
        </div>
        <div className="links-home">
          <button onClick={handleClickadote} className="button-64" role="button">
            <span className="text">ADOTE UM ANIMAL</span>
          </button>
          <button onClick={handleClickdoe} className="button-64" role="button">
            <span className="text">DOE UM ANIMAL</span>

          </button>
        </div>
        <div className="titulo-cards">
          <h2>Venha conhecer os recém chegados no Pet Feliz!</h2>
        </div>
        <div className="cards">
          {animal.map((animalData, index) => (
            <CardsAnimal key={index} cardanimal={animalData} />
          ))}
        </div>
      </div>
    </div>
  );
}
