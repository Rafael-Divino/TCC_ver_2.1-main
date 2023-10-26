import { useState } from "react";

export default function Exemplo() {
    const [formData, setFormdata] = useState({
        Nome_Pet: "",
        Especie_Pet: "",
        Estado_Pet: "",
        Sexo_Pet: "",
    });
    const [seeUrl, setSeeUrl] = useState(null);

    function handleInput(name, value) {
        setFormdata({ ...formData, [name]: value });
    }

    function getDataFromApi(params) {
        const { Nome_Pet, Especie_Pet, Estado_Pet, Sexo_Pet } = params;
        setSeeUrl(`https://siteloko123&Nome_Pet=${Nome_Pet}&Especie_Pet=${Especie_Pet}&Estado_Pet=${Estado_Pet}&Sexo_Pet=${Sexo_Pet}`);
    }

    return (
        <div className="main">
            <div className="input-div">
                <label>Nome</label>
                <select
                    value={formData.Nome_Pet}
                    onChange={(x) => handleInput("Nome_pet", x.target.value)}
                >
                    <option value="">sexo</option>
                    <option value="macho">Macho</option>
                    <option value="femea">Femea</option>
                    {/* Adicione mais opções conforme necessário */}
                </select>
            </div>
            <div className="input-div">
                <label>Especie</label>
                <select
                    value={formData.Especie_Pet}
                    onChange={(x) => handleInput("Especie_Pet", x.target.value)}
                >
                    <option value="">Escolha o Sobrenome</option>
                    <option value="Silva">Silva</option>
                    <option value="Pereira">Pereira</option>
              
                </select>
            </div>
            <button onClick={() => getDataFromApi(formData)}>Pesquisar</button>

            {seeUrl && <span style={{ marginTop: 30 }}>Url:{seeUrl} </span>}
        </div>
    );
}
