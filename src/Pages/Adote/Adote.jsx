import { useEffect, useState } from "react";
import './ListaDeUsuarios.css';
// import { useNavigate } from "react-router-dom";
import Card from '../../Components/Card/CardsAnimal/CardsAnimal'

function ListaAnimais() {
    // const navigate = useNavigate();
    useEffect(() => {
        fetch("https://localhost:44340/api/usuario", {
            method: "GET",
        })
            .then((response) => response.json())
            .then((json) => {
                setAnimais(json);
            })
            .catch((error) => {
                console.log(error);
                alert("Erro ao buscar usuários");
            });
    }, []);

    const [animais, setAnimais] = useState([]);

    // function mudarDePagina() {
    //     navigate("/cadastrar");
    // }

    return (



      
        <div>
            <div className="card-container">
                {
                    animais.map((card, index) => (
                        <Card usuario={card} key={index} />
                    ))
                }
            </div>
            {/* <button onClick={mudarDePagina}>Adicionar usuário</button> */}
        </div>

    )
}

export default ListaAnimais;

