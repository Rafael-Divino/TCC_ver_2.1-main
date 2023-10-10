import { useState } from "react";
import "./Faq.css";

function Faq() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <div>

      <div className="fac-body">
        <div className="wrapper">
          <div className="faq-title">
            <h1>Perguntas e Respostas</h1>
          </div>
          <div className="accordion">
            {data.map((item, i) => (
              <div className="item" key={i}> { }
                <div className="title" onClick={() => toggle(i)}>
                  <h2>{item.question}</h2>
                  <span>{selected === i ? "⮝" : "⮟"}</span>
                </div>
                <div className={selected === i ? "content show" : "content"}>
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const data = [
  {
    question: "Quem pode realizar uma adoção?",
    answer:
      "Qualquer pessoa interessada em cuidar e proporcionar um lar amoroso a um animal pode realizar uma adoção."
  },
  {
    question: "O que é preciso para adotar um pet?",
    answer:
      "Para adotar um pet, é necessário preencher um formulário de adoção e cumprir os requisitos de bem estar na vida dos animais, isto é, previsto Art. 1º número 9605 O objetivo da presente Lei é assegurar e proteger a vida e o bem-estar dos animais em todo o território nacional.."
  },
  {
    question: "Quais são os documentos necessários para uma adoção?",
    answer:
      "Os documentos necessários para adoção geralmente incluem identificação pessoal como o CPF e RG."
  },
  {
    question: "Após o preenchimento do formulário, quanto tempo devo aguardar?",
    answer:
      "O tempo de espera após o preenchimento do formulário pode variar já que após seu envio a informação passa a ser cadastrada de imediato, mas geralmente os processos de avaliação e aprovação podem levam de alguns minutos."
  },
  {
    question: "Fui aprovado, posso retirar o pet no mesmo dia?",
    answer:
      "Em muitos casos, é possível retirar o pet no mesmo dia em caso de proximidade entre os usuários após a aprovação, mas isso depende do portador do animal que aprovou a doação."
  },
  {
    question: "Os animais que vão para adoção são castrados?",
    answer:
      "A decisão de castrar os animais para adoção depende do doador ou da organização responsável. Não nos responsabilizamos pela castrção dos animais disponíveis para adoção"
  },
  {
    question: "Os animais são vacinados?",
    answer:
      "A vacinação dos animais para adoção dependerá do doador ou da organização responsável. Não nos responsabilizamos pela vacinação dos animais disponíveis para adoção"
  }
];
export default Faq;
