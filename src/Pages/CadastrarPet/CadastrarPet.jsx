import React, { useEffect, useState } from 'react';
import './CadastroAnimal.css';
import axios from 'axios';
import DateTimePicker from 'react-datetime-picker';
import Datetime from 'react-datetime';
import { useLocation } from "react-router-dom";
import { AuthContextFunctions } from "../../AuthContext";

const CadastroAnimal = () => {

    const [Nome_Pet, setNome_Pet] = useState("");
    const [Porte_Pet, setPorte_Pet] = useState("");
    const [Sexo_Pet, setSexo_Pet] = useState("");
    const [Idade_Pet, setIdade_Pet] = useState("");
    const [Descricao_Pet, setDescricao_Pet] = useState("");
    const [Status_Pet, setStatus_Pet] = useState("");
    const [Castrado, setCastrado] = useState("");
    const [Nome_Foto, setNome_Foto] = useState("");
    const [Foto_Pet, setFoto_Pet] = useState("");
    const [Base64, setBase64] = useState(null);
    const [Cod_Usuario, setCod_Usuario] = useState("");
    const [Especie, setEspecie] = useState({
        Nome_Especie: '',
    })

    const [Raca, setRaca] = useState({
        Nome_Raca: '',
    });

    const [Animal, setAnimal] = useState({
        Nome_Animal: '',
    });

    const [Vacina, setVacina] = useState({
        data_vacina: '',
        status: 'Selecione a opção',
        descricao: '',
    });

    const [errors, setErrors] = useState({});

    const idade_Pet = ['Entre 0 e 1', 'Entre 1 e 4', 'Entre 4 e 10', 'Mais de 10'];
    const porte_Pet = ['Pequeno Porte', 'Médio Porte', 'Grande Porte'];
    const sexo_Pet = ['M', 'F'];
    const castrado = ['Sim', 'Não'];
    const status_Pet = ['Disponivel'];
    const status = ['Valido', 'Vencido'];

    const validateForm = async () => {
        return {};
    };

    useEffect(() => {
        const usuarioLogado = AuthContextFunctions.CheckUserLogin();

        if (usuarioLogado) {
            const userData = JSON.parse(AuthContextFunctions.GetUserData());
            const userId = userData.Cod_Usuario;
            setCod_Usuario(userId);
        } else {
            alert("nenhum usuario logado")
        }
    }, []);

    function handleDateChange(date) {
        setVacina({ ...Vacina, data_vacina: date });
    }

    function handleFileChange(event) {
        const selectedFile = event.target.files[0];

        if (selectedFile) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const base64 = e.target.result.split(',')[1];
                setBase64(base64);

            };
            reader.readAsDataURL(selectedFile);
        } else {
            setBase64(null);
        }
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const validationErrors = await validateForm();
        setErrors(validationErrors);

        if (Base64) {

            const body = {
                Vacina, Animal, Raca, Especie, Nome_Pet, Porte_Pet, Sexo_Pet, Idade_Pet, Descricao_Pet, Status_Pet, Castrado, Nome_Foto, Foto_Pet, Base64, Cod_Usuario
            }
            

            if (!AuthContextFunctions.CheckUserLogin()) {
                console.log("Usuário não logado. Redirecionando para a página de login.");
                return;
            }

            const token = AuthContextFunctions.GenerateHeader().get("Authorization");

            try {

                const response = await axios.post('https://petfeliz.azurewebsites.net/api/PetFeliz/CadastrarPet', body, {
                    headers: {
                        Authorization: token,
                        'Content-Type': 'application/json',
                    },
                });

                if (response.status === 200) {
                    alert('Cadastro realizado com sucesso');
                }
            } catch (error) {
                console.error('Erro ao fazer a solicitação:', error);
                alert('teste');
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
                onChange={(e) => setNome_Pet(e.target.value)}
                value={Nome_Pet}
            />
            {errors.Nome_Pet && <p className="labelError">{errors.Nome_Pet}</p>}

            <input
                type="text"
                placeholder="Especie do animal"
                className="input"
                onChange={(e) => setEspecie({ ...Especie, Nome_Especie: e.target.value })}
                value={Especie.Nome_Especie}
            />
            {errors.Nome_Pet && <p className="labelError">{errors.Nome_Pet}</p>}

            <input
                type="text"
                placeholder="Raça"
                className="input"
                onChange={(e) => setRaca({ ...Raca, Nome_Raca: e.target.value })}
                value={Raca.Nome_Raca}
            />
            {errors.Nome_Raca && <p className="labelError">{errors.Nome_Raca}</p>}

            <input
                type="text"
                placeholder="Tipo"
                className="input"
                onChange={(e) => setAnimal({ ...Animal, Nome_Animal: e.target.value })}
                value={Animal.Nome_Animal}
            />
            {errors.Nome_Animal && <p className="labelError">{errors.Nome_Animal}</p>}

            <select
                value={Idade_Pet}
                onChange={(e) => setIdade_Pet(e.target.value)}
                className="dropdown"
            >
                <option value="Selecione a Idade">Idade</option>
                {idade_Pet.map((option) => (
                    <option value={option} key={option}>
                        {option}
                    </option>
                ))}
            </select>

            <select
                value={Porte_Pet}
                onChange={(e) => setPorte_Pet(e.target.value)}
                className="dropdown"
            >
                <option value="Selecione o Porte">Porte</option>
                {porte_Pet.map((option) => (
                    <option value={option} key={option}>
                        {option}
                    </option>
                ))}
            </select>

            <select
                value={Castrado}
                onChange={(e) => setCastrado(e.target.value)}
                className="dropdown"
            >
                <option value="Selecione a opção">Animal Castrado?</option>
                {castrado.map((option) => (
                    <option value={option} key={option}>
                        {option}
                    </option>
                ))}
            </select>

            <select
                value={Sexo_Pet}
                onChange={(e) => setSexo_Pet(e.target.value)}
                className="dropdown"
            >
                <option value="Selecione o Sexo">Sexo do animal?</option>
                {sexo_Pet.map((option) => (
                    <option value={option} key={option}>
                        {option}
                    </option>
                ))}
            </select>

            <select
                value={Status_Pet}
                onChange={(e) => setStatus_Pet(e.target.value)}
                className="dropdown"
            >
                <option value="Selecione uma opção">Status?</option>
                {status_Pet.map((option) => (
                    <option value={option} key={option}>
                        {option}
                    </option>
                ))}
            </select>

            <select
                value={Vacina.status}
                onChange={(e) => setVacina({ ...Vacina, status: e.target.value })}
                className="dropdown"
            >
                <option value="Selecione uma opção">Valido?</option>
                {status.map((option) => (
                    <option value={option} key={option}>
                        {option}
                    </option>
                ))}
            </select>

            <input
                onChange={(e) => setVacina({ ...Vacina, data_vacina: e.target.value })}
                value={Vacina.data_vacina}
                type="date"
                className="dropdown"
                placeholder='Data Vacina'
            >

            </input>

            <input
                type="text"
                placeholder="Tipo da vacinas"
                className="input"
                onChange={(e) => setVacina({ ...Vacina, descricao: e.target.value })}
                value={Vacina.descricao}
            />

            <input
                type="text"
                placeholder="Descrição"
                className="input"
                onChange={(e) => setDescricao_Pet(e.target.value)}
                value={Descricao_Pet}
            />

            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Nome da Imagem' value={Nome_Foto} onChange={(e) => setNome_Foto(e.target.value)} />

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
