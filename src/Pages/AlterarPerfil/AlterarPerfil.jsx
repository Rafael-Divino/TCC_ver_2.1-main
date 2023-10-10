import FileUpload from "../../Components/UploadFiles/UploadFiles"
import "../AlterarPerfil/AlterarPerfil.css"


export default function AlterarPerfil() {
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
                    <input type="text" id="name" name="name" placeholder="Nome" />
                    <input type="tel" id="tel" name="tel" placeholder="Telefone" />
                    <input type="text" id="estado" name="estado" placeholder="Estado" />
                    <input type="text" id="cidade" name="cidade" placeholder="Cidade" />
                    <input type="endereco" id="endereco" name="endereco" placeholder="Endereço" />
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