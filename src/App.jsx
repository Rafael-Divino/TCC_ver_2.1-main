import './App.css';
import Navbar from '../src/Components/Navbar/Navbar'
import Footer from '../src/Components/Footer/Footer'
import AlterarSenha from './Pages/AlterarSenha/AlterarSenha';
import Login from './Pages/Login/Login';
import Cadastro from './Pages/Cadastro/Cadastro';
import Adote from './Pages/Adote/Adote';
import CadastroAnimal from './Pages/CadastrarPet/CadastrarPet';
import AnimaisCadastrados from './Pages/AnimaisCadastrados/AnimaisCadastrados';
import AlterarPerfil from './Pages/AlterarPerfil/AlterarPerfil'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login/>,
    },
    {
      path: "/alterarPerfil",
      element: <AlterarPerfil/>,
    },
    {
      path: "/AnimaisCadastrados",
      element: <AnimaisCadastrados/>,
    },
    {
      path: "/CadastroAnimal",
      element: <CadastroAnimal/>,
    },
    {
      path: "/Adote",
      element: <Adote/>
    }
  ])
  return <RouterProvider router={router}/>;
}

export default App;


