import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { DateInput, Input } from "../components/inputs/Input";
import {
  useVendedorDataMutate,
  useVendedorDataUpdate,
} from "../hooks/usevendedorDataMutate";
import { VendedorData, VendedorRequest } from "../interfaces/VendedorData";
import { toast } from "react-toastify";

interface ModalProps {
  closeModal(): void;
  vendedor?: VendedorData;
}

export function ModalVendedor({ closeModal, vendedor }: ModalProps) {
  const isEdit = !!vendedor;

  const [nome, setNome] = useState(vendedor?.nome ?? "");
  const [dataNascimento, setDataNascimento] = useState(
    vendedor?.dataNascimento ?? ""
  );

  const { mutate, isSuccess, isPending } = useVendedorDataMutate();
  const {
    mutate: update,
    isSuccess: isUpdateSuccess,
    isPending: isUpdatePending,
  } = useVendedorDataUpdate();

  const submit = () => {
    if (!nome || !dataNascimento) {
      toast.error("Informe o nome e a data de nascimento.");
      return;
    }

    const data: VendedorRequest = { nome, dataNascimento };

    if (isEdit && vendedor) {
      update({ id: vendedor.id, data });
    } else {
      mutate(data);
    }
  };

  useEffect(() => {
    if (isSuccess || isUpdateSuccess) {
      toast.success(isEdit ? "Vendedor atualizado com sucesso!" : "Vendedor cadastrado!")
      closeModal();
    }
  }, [isSuccess, isUpdateSuccess, closeModal]);

  return (
    <div className="modal__container">
      <div className="modal__container-body">
        <div className="modal__container-header">
          {isEdit ? "Editar vendedor" : "Novo vendedor"}
          <FontAwesomeIcon icon={faXmark} onClick={closeModal} />
        </div>
        <form className="modal__form">
          <Input label="Nome" value={nome} updateValue={setNome} />
          <DateInput
            label="Data de Nascimento"
            value={dataNascimento}
            updateValue={setDataNascimento}
          />
        </form>
        <button onClick={submit} className="modal__form-btn">
          {isPending || isUpdatePending ? "Salvando..." : "Salvar"}
        </button>
      </div>
    </div>
  );
}
