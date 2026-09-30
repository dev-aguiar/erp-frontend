import { useEffect, useState } from "react";
import {
  useClienteDataMutate,
  useClienteDataUpdate,
} from "../hooks/useClienteDataMutate";
import { ClienteData, ClienteRequest } from "../interfaces/ClienteData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Input } from "../components/inputs/Input";

interface ModalProps {
  closeModal(): void;
  cliente?: ClienteData;
}

export function ModalCliente({ closeModal, cliente }: ModalProps) {
  const isEdit = !!cliente;

  const [nome, setNome] = useState(cliente?.nome ?? "");
  const [email, setEmail] = useState(cliente?.email ?? "");
  const [telefone, setTelefone] = useState(cliente?.telefone ?? "");
  const [endereco, setEndereco] = useState(cliente?.endereco ?? "");

  const { mutate, isSuccess, isPending } = useClienteDataMutate();
  const {
    mutate: update,
    isSuccess: isUpdateSuccess,
    isPending: isUpdatePending,
  } = useClienteDataUpdate();

  const submit = () => {
    const data: ClienteRequest = { nome, email, telefone, endereco };

    if (isEdit && cliente) {
      update({ id: cliente.id, data });
    } else {
      mutate(data);
    }
  };

  useEffect(() => {
    if (isSuccess || isUpdateSuccess) {
      closeModal();
    }
  }, [isSuccess, isUpdateSuccess, closeModal]);

  return (
    <div className="modal__container">
      <div className="modal__container-body">
        <div className="modal__container-header">
          {isEdit ? "Editar cliente" : "Novo cliente"}
          <FontAwesomeIcon icon={faXmark} onClick={closeModal} />
        </div>
        <form className="modal__form">
          <Input label="Nome" value={nome} updateValue={setNome} />
          <Input label="Email" value={email} updateValue={setEmail} />
          <Input label="Telefone" value={telefone} updateValue={setTelefone} />
          <Input label="Endereço" value={endereco} updateValue={setEndereco} />
        </form>
        <button onClick={submit} className="modal__form-btn">
          {isPending || isUpdatePending ? "Salvando..." : "Salvar"}
        </button>
      </div>
    </div>
  );
}
