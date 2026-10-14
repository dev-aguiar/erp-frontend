import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Input } from "../components/ui/Input";
import {
  useVendedorDataMutate,
  useVendedorDataUpdate,
} from "../hooks/usevendedorDataMutate";
import { VendedorData, VendedorRequest } from "../interfaces/VendedorData";
import { toast } from "react-toastify";
import { Button } from "../components/ui/Button";

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
          <Input
            label="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <Input
            label="Data de Nascimento"
            type="date"
            value={dataNascimento}
            onChange={(e) => setDataNascimento(e.target.value)}
          />
        </form>
        <Button
          fullWidth
          onClick={submit}
          disabled={isPending || isUpdatePending}
        >
          {isPending || isUpdatePending ? "Salvando..." : "Salvar"}
        </Button>
      </div>
    </div>
  );
}
