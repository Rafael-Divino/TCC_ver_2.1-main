import "../SobrenosAjudar/SobrenosAjudar.css";
import comoajudar from "../../../Components/img/comoajudar.png"
import dia from "../../../Components/img/diaanimais.png"
import propaganda2 from "../../../Components/img/propaganda2.jpg"
import amor from "../../../Components/img/animalehomem.jpeg"



export default function SobrenosAjudar() {
  return (
    <div className="sobrenos">
      <div className="sobrenos-body">
        <div className="sobrenos-nav-all">
          <div className="sobrenos-nav1">
            <a href="">Quem Somos?</a>
          </div>
          <div className="sobrenos-nav2">
            <a href="">Transparência</a>
          </div>
        </div>

        <div className="sobrenos-img1">
          <img src={comoajudar} alt="logo" />
        </div>
        <div className="sobrenos-title">
          <h1>Como Ajudar?</h1>
        </div>

        <div className="propaganda">
          <img src={propaganda2} alt="logo" />
        </div>


        <div className="sobrenos-text1">
          <p>
            A melhor maneira de apoiar uma plataforma de adoção de animais é
            adotando um animal. Isso não apenas ajudará a salvar a vida de um
            animal, mas também abrirá espaço para outro animal que precisa de
            um lar.

          </p>
        </div>


        <div className="sobrenos-text2">
          <p>
            Adotar um animal de estimação é
            uma das melhores decisões que uma
            pessoa pode tomar. No entanto, nem
            todos os animais têm a sorte de
            encontrar um lar amoroso e seguro.
            Porém existem formas para ajuda-los


          </p>
        </div>

        <div className="sobrenos-img2">
          <img src={dia} alt="logo" />
        </div>

        <div className="sobrenos-text3">
          <p>
            Divulgue a
            plataforma de adoção de animais para
            seus amigos, familiares e colegas de
            trabalho. Compartilhe as postagens da
            plataforma nas redes sociais e ajude a
            espalhar a palavra
          </p>
        </div>

        <div className="sobrenos-img3">
          <img src={amor} alt="logo" />
        </div>
      </div>
    </div>
  );
}