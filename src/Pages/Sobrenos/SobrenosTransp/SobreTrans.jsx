import "../SobrenosTransp/SobreTrans.css";
import quemsomos from "../../../Components/img/quemsomos.png"
import equipe from "../../../Components/img/equipe.jpg"
import logo from "../../../Components/img/logo.png"
import propaganda2 from "../../../Components/img/propaganda2.jpg"


export default function SobreTrans() {
  return (
    <div className="sobrenos">
      <div className="sobrenos-body">
        <div className="sobrenos-nav-all">
          <div className="sobrenos-nav1">
            <a href="">Quem Somos?</a>
          </div>
          <div className="sobrenos-nav2">
            <a href="">Como Ajudar?</a>
          </div>
        </div>

        <div className="sobrenos-img1">
          <img src={quemsomos} alt="logo" />
        </div>
        <div className="sobrenos-title">
          <h1>Quem Somos?</h1>
        </div>

        <div className="propaganda">
          <img src={propaganda2} alt="logo" />
        </div>


        <div className="sobrenos-text1">
          <p>

            Bem-vindo à nossa organização de adoção e doação de animais! Somos
            uma equipe dedicada de amantes de animais que se preocupam
            profundamente com o bem-estar dos animais e estamos comprometidos em
            ajudar a encontrar lares amorosos e permanentes para animais
            necessitados.
          </p>
        </div>


        <div className="sobrenos-text2">
          <p>

            Convidamos você a se juntar a nós nesta missão importante de ajudar
            a encontrar lares amorosos e permanentes para animais necessitados.
            Juntos podemos fazer a diferença na vida dos animais e na comunidade
            em geral.
          </p>
        </div>

        <div className="sobrenos-img2">
          <img src={equipe} alt="logo" />
        </div>

        <div className="sobrenos-text3">
          <p>
            Estamos comprometidos em ajudar os animais necessitados a encontrar
            suas famílias amorosas, oferecendo serviços de adoção, doação e
            aconselhamento.
          </p>
        </div>

        <div className="sobrenos-img3">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
}