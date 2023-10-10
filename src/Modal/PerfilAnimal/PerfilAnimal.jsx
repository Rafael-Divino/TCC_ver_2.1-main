import { Button } from '@mui/material'
import FileUpload from '../../Components/UploadFiles/UploadFiles'
import "../PerfilAnimal/PerfilAnimal.css"
import { useState } from 'react';

export default function PerfilAnimal() {

    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        const value = event.target.value;
        // Verifica se o valor inserido excede o limite de 50 caracteres
        if (value.length <= 200) {
            setInputValue(value);
        }
    };

    return (
        <div className="perfil-animal-body">
            <div className="perfil-animal-container">
                <div className="perfil-title">
                    <h1>Perfil Animal </h1>
                </div>

                <form className="dados-animal-perfil">
                    <div className="question">

                        <input type="text" required placeholder='Nome' />
                    </div>
                    <div className="question">
                        <input type="text" required placeholder='Raça' />

                    </div>
                    <div className="question">
                        <input type="text" required placeholder='Porte' />
                    </div>

                    <div className="question">
                        <input type="text" required placeholder='Sexo' />
                    </div>

                    <div className="question">
                        <input type="text" required placeholder='Idade' />
                    </div>

                    <div className="question">
                        <input type="text" required placeholder='Espécie' />
                    </div>
                    <div className="question">
                        <input type="text" required placeholder='Castrado(a)' />
                    </div>
                    <div className="question">
                        <input type="text" required placeholder='Vermifugado(a)' />
                    </div>
                    <div className="question">
                        <input type="text" required placeholder='Vacinado(a)' />
                    </div>
                </form>
                <div className="img-animal-perfil">
                    <FileUpload></FileUpload>
                </div>

                <div className='textos-sobre-animal-perfil'>

                    <textarea
                        id="limite-input"
                        value={inputValue}
                        onChange={handleChange}
                        placeholder='Escreva em até 200 caracteres sobre o animal.'
                        maxLength={200}
                        rows={3} // Defina o número de linhas que deseja exibir
                        style={{
                            width: '25rem',
                            height: '8rem',
                            resize: 'none', // Impede o redimensionamento
                        }}
                    />
                </div>
                <div className='bnt-perfil-animal'>
                </div>
                <div className="salvar-perfil-animal">
                    <Button>SALVAR ALTERAÇÕES</Button>
                </div>
                <div className="cancelar-animal-editar">
                    <Button>CANCELAR</Button>
                </div>
            </div>
        </div>

    )
}
