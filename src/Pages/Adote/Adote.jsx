import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import CardsAnimal from '../../Components/Card/CardsAnimal/CardsAnimal'; // Importe CardsAnimal corretamente
import Filtro from "../../Components/Filtro/Filtro";
import '../Adote/Adote.css'
import axios from "axios";

function Adote() {

    const navigate = useNavigate();
    const [animais, setAnimais] = useState([]);

    /*useEffect(() => {
        fetch("https://petfeliz.azurewebsites.net/api/PetFeliz/ListarPet", {
            method: "GET",
        })
            .then((response) => response.json())
            .then((json) => {
                setAnimais(json);
            })
            .catch((error) => {
                console.log(error);
                alert("Erro ao buscar os animais");
            });
    }, []);*/

    async function ListarPets() {
        try {
            const response = await axios.get('https://petfeliz.azurewebsites.net/api/PetFeliz/ListarPet');
            const json = response.data;
            setAnimais(json);
            if(response.status === 200){
                navigate("");
            }
        }
        catch{}
    }

    useEffect(() => {
        ListarPets();
    }, []);

    return (
        <div className="body-adote">
            <div className="filtro-adote">
                <Filtro />
            </div>
            <div className="listar-cards-adote">
                {console.log('Array de Animais:', animais)}
                {
                    animais.map((animal, index) => (
                        <CardsAnimal cardanimal={animal} key={index} />
                    ))
                }
            </div>
        </div>
    )
}

export default Adote;
