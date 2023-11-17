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
  const [Estado, setEstado] = useState("");
  const [Cidade, setCidade] = useState("");
  const [Logradouro, setLogradouro] = useState("");
  const [CEP, setCEP] = useState("");
  const [Numero, setNumero] = useState("");
  const [Email, setEmail] = useState("");
  const [CPF, setCPF] = useState("");
  const [Senha, setSenha] = useState("");

  const user = AuthContextFunctions.GetUserData();
  
  useEffect(() => {
    if (location.state) {
      axios
        .get(`https://petfeliz.azurewebsites.net/api/Usuario/${id}`)
        .then((response) => {
          const usuario = response.data;
          setNome(usuario.Nome);
          setTelefone(usuario.Telefone);

          if (usuario.Estado) {
            setEstado(usuario.Estado.Nome_Estado);
          }

          if (usuario.Cidade) {
            setCidade(usuario.Cidade.Nome_Cidade);
          }

          setLogradouro(usuario.Logradouro.NomeLog);
          setCEP(usuario.Logradouro.CEP);
          setNumero(usuario.Logradouro.Numero);
          setEmail(usuario.Email);
          setCPF(usuario.CPF);
        })
        .catch((error) => {
          console.error("Erro ao buscar os dados do usuário", error);
        });
    } else {
      alert("Ocorreu um erro!");
    }
  }, [location.state, id]);

  const editarUsuario = async (e) => {
    e.preventDefault();

    const body = {
      id,
      Nome,
      Telefone,
      Estado: { Nome_Estado: Estado },
      Cidade: { Nome_Cidade: Cidade },
      Logradouro: { NomeLog: Logradouro, CEP, Numero },
      Email,
      CPF,
      Senha,
    };

    try {
      await axios.put("https://localhost:44302/api/Usuario/atualizarUsuario", body);
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
            <input type="text" id="estado" value={Estado} onChange={(e) => setEstado(e.target.value)} name="estado" placeholder="Estado" />
          </div>

          <div className="form-group">
            <label htmlFor="cidade">Cidade:</label>
            <input type="text" id="cidade" value={Cidade} onChange={(e) => setCidade(e.target.value)} name="cidade" placeholder="Cidade" />
          </div>

          <div className="form-group">
            <label htmlFor="endereco">Endereço:</label>
            <input type="text" id="endereco" value={Logradouro} onChange={(e) => setLogradouro(e.target.value)} name="endereco" placeholder="Endereço" />
          </div>

          <div className="form-group">
            <label htmlFor="cep">CEP:</label>
            <input type="text" id="cep" value={CEP} onChange={(e) => setCEP(e.target.value)} name="cep" placeholder="CEP" />
          </div>

          <div className="form-group">
            <label htmlFor="numero">Número:</label>
            <input type="text" id="numero" value={Numero} onChange={(e) => setNumero(e.target.value)} name="numero" placeholder="Número" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" value={Email} onChange={(e) => setEmail(e.target.value)} name="email" placeholder="Email" />
          </div>

          <div className="form-group">
            <label htmlFor="cpf">CPF:</label>
            <input type="text" id="cpf" value={CPF} onChange={(e) => setCPF(e.target.value)} name="cpf" placeholder="CPF" />
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
