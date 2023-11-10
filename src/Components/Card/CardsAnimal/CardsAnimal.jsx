import React from 'react';
import PropTypes from 'prop-types'; // Importe PropTypes
import '../CardsAnimal/CardsAnimais.css';

function CardsAnimal({ cardanimal }) {
    console.log('Dados de card:', cardanimal)
    if (!cardanimal){
        return null;
    }
    return (
        <div>
            <div>{cardanimal.status_Pet}</div>
            <h1>{cardanimal.nome_Pet}</h1>
            <h3>{cardanimal.animal.nome_Animal}</h3>
            <h3>{cardanimal.porte_Pet}</h3>
            <h3>{cardanimal.sexo_Pet}</h3>
            <h3>CEP: {cardanimal.logradouro.cep}</h3>
            <label>
                <img src={cardanimal.foto_Pet} style={{ width: 200, height: 200 }} alt="Imagem do Card" />
            </label>
        </div>
    );
}

CardsAnimal.propTypes = {
    cardanimal: PropTypes.shape({
        nome_Pet: PropTypes.string.isRequired,
        cep: PropTypes.string.isRequired,
        foto_Pet: PropTypes.string.isRequired,
        status_Pet: PropTypes.string.isRequired,
    }).isRequired,
};

export default CardsAnimal;
