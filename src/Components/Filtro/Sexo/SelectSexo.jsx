import Select from "react-select";
import { useSexo } from "../Hooks/UseSexo";
import PropTypes from "prop-types";

export const SelectSexo = ({ selectedSexo}) => {
  const { sexo, loading: loadingSexo } = useSexo();

  const sexoOptions = sexo.map((sexo) => ({
    value: sexo,
    label: sexo,
  }));

  return (
    <Select
      isLoading={loadingSexo}
      loadingMessage={() => "Estamos carregando as informações, aguarde ..."}
      isDisabled={loadingSexo || sexoOptions.length === 0}
      options={sexoOptions}
      placeholder="Selecione o Sexo do Animal"
      value={sexoOptions.find((option) => option.value === selectedSexo)}
    />
  );
};

SelectSexo.propTypes = {
  selectedSexo: PropTypes.string,
};
