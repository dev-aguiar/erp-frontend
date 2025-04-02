import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { DateInput, Input } from "../components/inputs/Input";
import { useVendedorDataMutate } from "../hooks/usevendedorDataMutate";
import { VendedorData } from "../interfaces/VendedorData";

interface ModalProps {
  closeModal(): void;
}

export function ModalVendedor({ closeModal }: ModalProps) {
  const [nome, setNome] = useState("");
  const [dataNascimento, setDataNascimento] = useState(new Date());
  const { mutate, isSuccess, isPending } = useVendedorDataMutate();

  const submit = () => {
    const vendedorData: VendedorData = {
      nome,
      dataNascimento,
    };
    mutate(vendedorData);
  };

  useEffect(() => {
    if (!isSuccess) return;
    closeModal();
  }, [isSuccess, isPending]);

  return (
    <div className="modal__container">
      <div className="modal__container-body">
        <div className="modal__container-header">
          Novo cliente
          <FontAwesomeIcon icon={faXmark} onClick={closeModal} />
        </div>
        <form className="modal__form">
          <Input label="Nome" value={nome} updateValue={setNome} />
          <DateInput
            label="Data de Nascimento"
            value={dataNascimento.toISOString().split("T")[0]}
            updateValue={(dateString: string) =>
              setDataNascimento(new Date(dateString))
            }
          />
        </form>
        <button onClick={submit} className="modal__form-btn">
          {isPending ? "Salvando..." : "Salvar"}
        </button>
      </div>
    </div>
  );
}
