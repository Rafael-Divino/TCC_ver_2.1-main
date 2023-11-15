import { useState } from 'react';
import img1 from '../../assets/logingatinho.jpeg'; // Import the image correctly
import '../Login/Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContextFunctions } from "../../AuthContext";

function LoginUsu() {
  // You might want to add a function to handle form submission

  const navigate = useNavigate();
  const [usuario, setUsuario] = useState({
    CPF: '',
    Nome: '',
    Email: '',
    Telefone: '',
    Senha: '',
    Logradouro: {
      CEP: '',
      NomeLog: '',
      Numero: '',
    },
    Cidade: {
      Nome_Cidade: ''
    },
    Estado: {
      Nome_Estado: ''
    }
  });

  const [mensagem, setMensagem] = useState('');

  const handleInputChange = (evento) => {
    const { name, value } = evento.target;
    setUsuario((prevUsuario) => ({
      ...prevUsuario,
      [name]: value,
    }));
  };


  const handleLogin = async (evento) => {
    evento.preventDefault();

    try {
      if (!usuario.Email || !usuario.Senha) {
        setMensagem('Preencha ambos os campos.');
        return;
      }
      const response = await axios.post("https://petfeliz.azurewebsites.net/api/Auth/Login", usuario);
      if (response.status === 200) {
        debugger;
        AuthContextFunctions.SaveJWT(response.data.token)
        const user = AuthContextFunctions.GetUserData();
        navigate("/CadastroAnimal", { state: { id: user.Cod_Usuario } })
      } else {
        setMensagem('Usuário ou senha incorretos.');
      }
    } catch (error) {
      console.error('Erro no login:', error);
      setMensagem('Erro no servidor.');
    }
  };


  return (
    <div className="login-body">
      <div className="login-img">
        <img className="login-img" src={img1} alt="Login" />
      </div>
      <div className="login-form-all">
        <div className="login-title">
          <h1>Faça seu Login!</h1>
        </div>
        <form className="login-form" onSubmit={handleLogin}>
          {/* Wrap the inputs in a <form> element and add an onSubmit handler */}
          <input type="email" id="email" name="Email" placeholder="E-mail" value={usuario.Email} onChange={handleInputChange} />
          <input type="password" id="senha" name="Senha" placeholder="Senha" value={usuario.Senha} onChange={handleInputChange} />
          <div className="login-buttom-entrar">
            <button type="submit">ENTRAR</button> {/* Use type="submit" to trigger form submission */}
          </div>
        </form>
        <div className="login-buttom-senha">
          <a href="#">Esqueceu a Senha?</a>
        </div>
        <div className="login-buttom-cadastro">
          <a href="#">Cadastre-se</a>
        </div>
      </div>
    </div>
  );
}

export default LoginUsu;
