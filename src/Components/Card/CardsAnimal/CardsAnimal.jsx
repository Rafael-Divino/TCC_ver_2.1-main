

import { useNavigate } from "react-router-dom";

function Card({ card }) {

    const navigate = useNavigate();
    function navegarEditar() {
        navigate("/editar", { state: { id: card.id } });
    }
    return (
        <div>
            <h1>{card.nome}</h1>
            <h3>CPF: {card.cpf}</h3>
            <h3>Email: {card.email}</h3>
            <h3>Celular: {card.celular}</h3>
            <label>
                <img src={card.imagem} style={{ width: 200, height: 200 }} />
            </label>
            <button onClick={navegarEditar}>Editar</button>
        </div>
    )
}

export default Card;


