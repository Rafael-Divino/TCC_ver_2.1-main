import { useEffect, useState } from "react";
import Select from "react-select";
import "./Adote.css";
import CardsAnimal from '../../Components/Card/CardsAnimal/CardsAnimal';
import { SelectEstado } from '../../Components/Filtro/Estado/SelectEstado';

function Adote() {
    const [data] = useState([]);
    const [seeUrl, setSeeUrl] = useState(null);
    const [selectedSexo, setSelectedSexo] = useState("");
    const [selectedPorte, setSelectedPorte] = useState("");
    const [selectedTipo, setSelectedTipo] = useState("");
    const [selectedUf, setSelectedUf] = useState(null);
    const [filteredData, setFilteredData] = useState([]); // Defina a função setFilteredData

    const [formData, setFormdata] = useState({
        
    });

    const porte_Pet = [
        { value: "anao", label: "Anão" },
        { value: "pequeno", label: "Pequeno Porte" },
        { value: "medio", label: "Médio Porte" },
        { value: "grande", label: "Grande Porte" },
        { value: "Molosso", label: "Molosso" },
    ];

    const sexo_Pet  = [
        { value: "F", label: "F" },
        { value: "M", label: "M" },
    ];

    const tipo = [
        { value: "gato", label: "Gato" },
        { value: "cao", label: "Cão" },
    ];

    const handlePorteChange = (option) => {
        setSelectedPorte(option.value);
        getDataFromApi(); // Atualize os dados após a alteração do filtro de porte
    };
      
    const handleSexoChange = (option) => {
        setSelectedSexo(option.value);
        getDataFromApi(); // Atualize os dados após a alteração do filtro de sexo
    };

    const handleTipoChange = (option) => {
        setSelectedTipo(option.value);
        getDataFromApi(); // Atualize os dados após a alteração do filtro de tipo
    };

    const handleUfChange = (uf) => {
        setSelectedUf(uf);
        getDataFromApi(); // Atualize os dados após a alteração do filtro de estado
    };

    function handleInput(name, value) {
        setFormdata({ ...formData, [name]: value });
    }

    useEffect(() => {
        getDataFromApi();
    }, [selectedTipo, formData.porte, formData.sexo_Pet, selectedUf]);

    useEffect(() => {
        // Função para filtrar os dados com base no tipo (gato ou cachorro)
        const filteredData = data.filter((x) => {
            return (
                (formData.porte === "" || x.Porte_Pet === formData.porte) &&
                (selectedTipo === "" || x.Animal.Nome_Animal.toLowerCase() === selectedTipo)
                && (formData.sexo  === "" || x.Sexo_Pet === formData.sexo ) &&
                (selectedUf === null || x.Estado.Nome_Estado === selectedUf)
            );
        });

        setFilteredData(filteredData); // Atualiza o estado com os dados filtrados
    }, [selectedTipo, selectedSexo, selectedPorte, selectedUf, data]);

    const getDataFromApi = () => {
        setSeeUrl(`https://petfeliz.azurewebsites.net/api/PetFeliz/ListarPet`);
        fetch(`https://petfeliz.azurewebsites.net/api/PetFeliz/ListarPet`)
            .then((response) => response.json())
            .then((json) => (Array.isArray(json) ? setFilteredData(json) : setFilteredData([json])));
    };

    return (
        <div className="main">
            {seeUrl && <span style={{ marginBottom: 30 }}>Url: {seeUrl} </span>}
            <div className="input-div">
                <label>id</label>
                <input
                    value={formData.size}
                    onChange={(x) => handleInput("size", x.target.value)}
                />
            </div>

            <div className="Filtro">
                <Select
                    options={sexo_Pet }
                    placeholder="Selecione o sexo do animal"
                    value={sexo_Pet .find((option) => option.value === selectedSexo)}
                    onChange={handleSexoChange}
                />
            </div>

            <div>
                <Select
                    options={porte_Pet}
                    placeholder="Selecione o porte do animal"
                    value={porte_Pet.find((option) => option.value === selectedPorte)}
                    onChange={handlePorteChange}
                />
            </div>

            <div>
                <Select
                    options={tipo}
                    placeholder="Selecione o tipo do animal"
                    value={tipo.find((option) => option.value === selectedTipo)}
                    onChange={handleTipoChange}
                />
            </div>
            <SelectEstado onChange={handleUfChange} />

            <div className="cards-container">
                {filteredData.map((x) => {
                    return <CardsAnimal cardanimal={x} key={x?.id_Pet} />;
                })}
            </div>
        </div>
    );
}

export default Adote;