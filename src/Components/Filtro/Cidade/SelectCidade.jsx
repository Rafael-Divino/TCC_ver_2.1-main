import Select from "react-select";
import { useCidades } from "../Hooks/UseCidades";
import PropTypes from 'prop-types';

export const SelectCidade = ({ uf }) => {
  const { cidades, loading: loadingCidades } = useCidades({
    uf
  });

  const cidadeOptions = cidades.map((cidade) => ({
    value: cidade.codigo_ibge,
    label: cidade.nome
  }));

  return (
    <Select
      isLoading={loadingCidades}
      loadingMessage={() => "Estamos carregando as cidades, aguarde ..."}
      isDisabled={loadingCidades || cidadeOptions.length === 0}
      options={cidadeOptions}
      placeholder="Selecione uma cidade"></Select>
    )
}

SelectCidade.propTypes = {
  uf: PropTypes.string.isRequired,
}
