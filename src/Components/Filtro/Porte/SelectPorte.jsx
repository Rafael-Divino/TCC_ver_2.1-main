import Select from "react-select";
import { usePorte } from "../Hooks/UsePorte";
import PropTypes from "prop-types";

export const SelectPorte = ({ selectedPorte }) => {
  const { porte, loading: loadingPorte } = usePorte();

  const porteOptions = porte.map((porte) => ({
    value: porte,
    label: porte,
  }));

  return (
    <Select
      isLoading={loadingPorte}
      loadingMessage={() => "Estamos carregando as informações, aguarde ..."}
      isDisabled={loadingPorte || porteOptions.length === 0}
      options={porteOptions}
      placeholder="Selecione um porte"
      value={porteOptions.find((option) => option.value === selectedPorte)}
    />
  );
};

SelectPorte.propTypes = {
  selectedPorte: PropTypes.string,
};
