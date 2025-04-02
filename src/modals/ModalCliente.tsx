import { useEffect, useState } from "react";
import { useClienteDataMutate } from "../hooks/useClienteDataMutate";
import { ClienteData } from "../interfaces/ClienteData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Input } from "../components/inputs/Input";

interface ModalProps {
  closeModal(): void;
}

export function ModalCliente({ closeModal }: ModalProps) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const { mutate, isSuccess, isPending } = useClienteDataMutate();

  const submit = () => {
    const clienteData: ClienteData = {
      nome,
      email,
      telefone,
      endereco,
    };
    mutate(clienteData);
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
          <Input label="Email" value={email} updateValue={setEmail} />
          <Input label="Telefone" value={telefone} updateValue={setTelefone} />
          <Input label="Endereço" value={endereco} updateValue={setEndereco} />
        </form>
        <button onClick={submit} className="modal__form-btn">
          {isPending ? "Salvando..." : "Salvar"}
        </button>
      </div>
    </div>
  );
}
