import { useLocation } from "react-router-dom"
import FileUpload from "../../Components/UploadFiles/UploadFiles"
import "../AlterarPerfil/AlterarPerfil.css"
import { useEffect, useState } from "react";
import { AuthContextFunctions } from "../../AuthContext";


export default function AlterarPerfil() {

    const location = useLocation();
    const id = location.state && location.state.id;

    const [Nome, setNome] = useState();
    const [Telefone, setTelefone] = useState();
    const [Estado, setEstado] = useState({
        Nome_Estado: '',
    });
    const [Cidade, setCidade] = useState({
        Nome_Cidade: '',
    });
    const [Logradouro, setLogradouro] = useState({
        NomeLog: '',
    });

    const user = AuthContextFunctions.GetUserData();
        alert(user.Cod_Usuario);
        alert(user.Nome_Usuario);

    useEffect(() => {
        debugger
        if (location.state){
            fetch("https://petfeliz.azurewebsites.net/api/Usuario/" + id ,{
            method: "GET",
        })
            .then((response) => response.json())
            .then((usuario) => {
                debugger
                console.log(usuario);
                setNome(usuario.Nome);
                setTelefone(usuario.Telefone);
                setEstado({ Nome_Estado: usuario.estado.Nome_Estado });
                setCidade({ Nome_Cidade: usuario.cidade.Nome_Cidade });
                setLogradouro({ NomeLog: usuario.logradouro.NomeLog });
            })
            .catch((error) => {
                alert('Erro ao buscar os dados do Usuario');
            });
        } else {
            alert('Ocorreu um erro!')
        }
        
    }, [location.state]);


    return (
        <div className="body-alterar-perfil">
            <div className="alterar-perfil-container">
                <div className="title-alterar-perfil">
                    <h1>Alterar Perfil</h1>
                </div>
                <div className="preferencias">
                    <h1>Preferências</h1>
                </div>

                <form className="alterar-perfil-form ">
                    <input type="text" id="name" value={user.Nome_Usuario} onChange={(e) => setNome(e.target.value)} name="name" placeholder="Nome" />
                    <input type="tel" id="tel" value={user.Telefone} onChange={(e) => setTelefone(e.target.value)} name="tel" placeholder="Telefone" />
                    <input type="text" id="estado" value={Estado.Nome_Estado} onChange={(e) => setEstado({ ...Estado, Nome_Estado: e.target.value})} name="estado" placeholder="Estado" />
                    <input type="text" id="cidade" value={Cidade.Nome_Cidade} onChange={(e) => setCidade({ ...Cidade, Nome_Cidade: e.target.value})} name="cidade" placeholder="Cidade" />
                    <input type="endereco" id="endereco" value={Logradouro.NomeLog} onChange={(e) => setLogradouro({ ...Logradouro, NomeLog: e.target.value})} name="endereco" placeholder="Endereço" />
                </form>
                <div className="img-editar-usuario">
                <FileUpload></FileUpload>
                </div>
                <div className="bnt-alterar-perfil">
                    <button>SALVAR</button>
                </div>
            </div >
        </div >
    )
}