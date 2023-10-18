import React, { useState } from 'react';
import './CadastroAnimal.css';
import axios from 'axios';

const CadastroAnimal = () => {
    const [Pet, setPet] = useState({
        Nome_Pet: '',
        Sexo_Pet: 'Selecione o Sexo',
        Descricao_Pet: '',
        Idade_Pet: 'Selecione a Idade',
        Porte_Pet: 'Selecione o Porte',
        Status_Pet: 'Selecione uma opção',
        Castrado: 'Selecione a opção',
        Nome_Foto: '',
        Base64: null,
        Especie: {
            Nome_Especie: '',
        },
        Raca: {
            Nome_Raca: '',
        },
        Animal: {
            Nome_Animal: '',
        },
    });

    const [errors, setErrors] = useState({});

    const Idade_Pet = ['Entre 0 e 1', 'Entre 1 e 4', 'Entre 4 e 10', 'Mais de 10'];
    const Porte_Pet = ['Pequeno Porte', 'Médio Porte', 'Grande Porte'];
    const Sexo_Pet = ['M', 'F'];
    const Castrado = ['Sim', 'Não'];
    const Status_Pet = ['Disponivel'];

    const validateForm = async () => {
        return {};
    };

    function handleFileChange(event) {
        const selectedFile = event.target.files[0];

        if (selectedFile) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const base64 = e.target.result.split(',')[1];
                setPet({ ...Pet, Base64: base64 });
            };
            reader.readAsDataURL(selectedFile);
        } else {
            setPet({ ...Pet, Base64: null });
        }
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const validationErrors = await validateForm();
        setErrors(validationErrors);

        if (Pet.Base64) {
            if (Object.keys(validationErrors).length === 0) {
                try {
                    const response = await axios.post('https://localhost:44302/api/PetFeliz/CadastrarPet', Pet);

                    if (response.status === 200) {
                        alert('Cadastro realizado com sucesso');
                    }
                } catch (error) {
                    console.error('Erro ao fazer a solicitação:', error);
                    alert('teste');
                }
            }
        }
    }

    return (
        <div className="container">
            <h1 className="topo">Informações do Pet</h1>

            <input
                type="text"
                placeholder="Nome do animal"
                className="input"
                onChange={(e) => setPet({ ...Pet, Nome_Pet: e.target.value })}
                value={Pet.Nome_Pet}
            />
            {errors.Nome_Pet && <p className="labelError">{errors.Nome_Pet}</p>}

            <input
                type="text"
                placeholder="Especie do animal"
                className="input"
                onChange={(e) => setPet({ ...Pet, Especie: { Nome_Especie: e.target.value } })}
                value={Pet.Especie.Nome_Especie}
            />
            {errors.Nome_Pet && <p className="labelError">{errors.Nome_Pet}</p>}

            <input
                type="text"
                placeholder="Raça"
                className="input"
                onChange={(e) => setPet({ ...Pet, Raca: { Nome_Raca: e.target.value } })}
                value={Pet.Raca.Nome_Raca}
            />
            {errors.Nome_Raca && <p className="labelError">{errors.Nome_Raca}</p>}

            <input
                type="text"
                placeholder="Tipo"
                className="input"
                onChange={(e) => setPet({ ...Pet, Animal: { Nome_Animal: e.target.value } })}
                value={Pet.Animal.Nome_Animal}
            />
            {errors.Nome_Animal && <p className="labelError">{errors.Nome_Animal}</p>}

            <select
                value={Pet.Idade_Pet}
                onChange={(e) => setPet({ ...Pet, Idade_Pet: e.target.value })}
                className="dropdown"
            >
                <option value="Selecione a Idade">Idade</option>
                {Idade_Pet.map((option) => (
                    <option value={option} key={option}>
                        {option}
                    </option>
                ))}
            </select>

            <select
                value={Pet.Porte_Pet}
                onChange={(e) => setPet({ ...Pet, Porte_Pet: e.target.value })}
                className="dropdown"
            >
                <option value="Selecione o Porte">Porte</option>
                {Porte_Pet.map((option) => (
                    <option value={option} key={option}>
                        {option}
                    </option>
                ))}
            </select>

            <select
                value={Pet.Castrado}
                onChange={(e) => setPet({ ...Pet, Castrado: e.target.value })}
                className="dropdown"
            >
                <option value="Selecione a opção">Animal Castrado?</option>
                {Castrado.map((option) => (
                    <option value={option} key={option}>
                        {option}
                    </option>
                ))}
            </select>

            <select
                value={Pet.Sexo_Pet}
                onChange={(e) => setPet({ ...Pet, Sexo_Pet: e.target.value })}
                className="dropdown"
            >
                <option value="Selecione o Sexo">Sexo do animal?</option>
                {Sexo_Pet.map((option) => (
                    <option value={option} key={option}>
                        {option}
                    </option>
                ))}
            </select>

            <select
                value={Pet.Status_Pet}
                onChange={(e) => setPet({ ...Pet, Status_Pet: e.target.value })}
                className="dropdown"
            >
                <option value="Selecione uma opção">Status?</option>
                {Status_Pet.map((option) => (
                    <option value={option} key={option}>
                        {option}
                    </option>
                ))}
            </select>

            <input
                type="text"
                placeholder="Descrição"
                className="input"
                onChange={(e) => setPet({ ...Pet, Descricao_Pet: e.target.value })}
                value={Pet.Descricao_Pet}
            />

            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Nome da Imagem' value={Pet.Nome_Foto} onChange={(e) => setPet({ ...Pet, Nome_Foto: e.target.value})} />
                
                <input type="file" accept="image/jpeg" onChange={handleFileChange} />
                <br></br>
                <button type="submit" className="cadastrar">
                    Cadastrar pet
                </button>
            </form>
        </div>
    );
};

export default CadastroAnimal;
