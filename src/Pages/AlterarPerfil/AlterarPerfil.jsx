import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { AuthContextFunctions } from "../../AuthContext";
import axios from "axios";
import "../AlterarPerfil/AlterarPerfil.css";

export default function AlterarPerfil() {
  const location = useLocation();
  const id = location.state && location.state.id;

  const [Nome, setNome] = useState("");
  const [Telefone, setTelefone] = useState("");
  const [Senha, setSenha] = useState("");
  const [Id, setId] = useState("");
  const [Estado, setEstado] = useState({
    Nome_Estado: ""
  });
  const [Cidade, setCidade] = useState({
    Nome_Cidade: '',
  });
  //const [NomeLog, setNomeLog] = useState("");
  //const [CEP, setCEP] = useState("");
  //const [Numero, setNumero] = useState("");
  const [Logradouro, setLogradouro] = useState({
    NomeLog: '',
    CEP: '',
    Numero: ''
  })


  useEffect(() => {
    const usuarioLogado = AuthContextFunctions.CheckUserLogin();

    if (usuarioLogado) {
      const userData = JSON.parse(AuthContextFunctions.GetUserData());

      const userNome = userData.Nome_Usuario;
      setNome(userNome);

      const userTelefone = userData.Telefone;
      setTelefone(userTelefone);

      const usercidade = userData.Nome_Cidade;
      setCidade({ ...Cidade, Nome_Cidade: usercidade});

      const userestado = userData.Nome_Estado;
      setEstado({ ...Estado, Nome_Estado: userestado});

      const userNomeLog = userData.Nome_Log;
      setLogradouro({ ...Logradouro, NomeLog: userNomeLog});

      const userCep = userData.CEP;
      setLogradouro({ ...Logradouro, NomeLog: userCep});

      const userNumero = userData.Numero_Log;
      setLogradouro({ ...Logradouro, NomeLog: userNumero});
      
      const userId = userData.Cod_Usuario;
      setId(userId)
    } else {
      alert("nenhum usuario logado")
    }

  }, []);

  const editarUsuario = async (e) => {
    e.preventDefault();
    
    const body = {
      Id,
      Nome,
      Telefone,
      Estado,
      Cidade,
      Logradouro,
      Senha,
    };

    try {
      await axios.put("https://localhost:44302/api/Usuario/atualizarUsuario", body, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      alert("Usuário alterado com sucesso");
    } catch (error) {
      console.error("Erro ao alterar o usuário", error);
      alert("Erro ao alterar o usuário");
    }
  };

  return (
    <div className="body-alterar-perfil">
      <div className="alterar-perfil-container">
        <div className="title-alterar-perfil">
          <h1>Alterar Perfil</h1>
        </div>
        <div className="preferencias">
          <h1>Preferências</h1>
        </div>

        <form onSubmit={(e) => editarUsuario(e)} className="alterar-perfil-form">
          <div className="form-group">
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" value={Nome} onChange={(e) => setNome(e.target.value)} name="name" placeholder="Nome" />
          </div>

          <div className="form-group">
            <label htmlFor="tel">Telefone:</label>
            <input type="tel" id="tel" value={Telefone} onChange={(e) => setTelefone(e.target.value)} name="tel" placeholder="Telefone" />
          </div>

          <div className="form-group">
            <label htmlFor="estado">Estado:</label>
            <input type="text" id="estado" value={Estado.Nome_Estado} onChange={(e) => setEstado({ ...Estado, Nome_Estado: e.target.value})} name="estado" placeholder="Estado" />
          </div>

          <div className="form-group">
            <label htmlFor="cidade">Cidade:</label>
            <input type="text" id="cidade" value={Cidade.Nome_Cidade} onChange={(e) => setCidade({ ...Cidade, Nome_Cidade: e.target.value})} name="cidade" placeholder="Cidade" />
          </div>

          <div className="form-group">
            <label htmlFor="endereco">Endereço:</label>
            <input type="text" id="endereco" value={Logradouro.NomeLog} onChange={(e) => setLogradouro({ ...Logradouro, NomeLog: e.target.value})} name="endereco" placeholder="Endereço" />
          </div>

          <div className="form-group">
            <label htmlFor="cep">CEP:</label>
            <input type="text" id="cep" value={Logradouro.CEP} onChange={(e) => setLogradouro({ ...Logradouro, CEP: e.target.value})} name="cep" placeholder="CEP" />
          </div>

          <div className="form-group">
            <label htmlFor="numero">Número:</label>
            <input type="text" id="numero" value={Logradouro.Numero} onChange={(e) => setLogradouro({ ...Logradouro, Numero: e.target.value})} name="numero" placeholder="Número" />
          </div>

          <div className="form-group">
            <label htmlFor="senha">Senha:</label>
            <input
              type="password"
              id="senha"
              value={Senha}
              onChange={(e) => setSenha(e.target.value)}
              name="senha"
              placeholder="Senha"
            />
          </div>

          <div className="bnt-alterar-perfil">
            <button type="submit" value={"Editar"}>
              Alterar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
