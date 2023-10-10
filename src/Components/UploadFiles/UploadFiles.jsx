import axios from 'axios';
import { useState } from 'react';

function FileUpload() {
    const [base64Data, setBase64Data] = useState(null);
    const [imageName, setImageName] = useState('');

    function handleFileChange(event) {
        const selectedFile = event.target.files[0];

        if (selectedFile) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const base64 = e.target.result.split(',')[1];
                setBase64Data(base64);
            };
            reader.readAsDataURL(selectedFile);
        } else {
            setBase64Data(null); // Limpa o base64 se nenhum arquivo estiver selecionado
        }
    }

    async function handleSubmit(event) {
        event.preventDefault();

        if (base64Data) {
            const body = {
                Name: imageName,
                Base64: base64Data
            }
            try {
                const response = await axios.post('https://localhost:44363/api/image', body);
                console.log('Resposta da API:', response.data);
            } catch (error) {
                console.error('Erro na solicitação:', error);
            }

        }
    }

    return (
        <div>
            <h1>Formulário de Upload de Arquivo</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nome da Imagem"
                    value={imageName}
                    onChange={(e) => setImageName(e.target.value)}
                />
                <input type="file" accept="image/jpeg" onChange={handleFileChange} />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default FileUpload;