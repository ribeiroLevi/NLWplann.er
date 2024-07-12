import { Plus, User, X } from "lucide-react";
import { FormEvent } from "react";
import { Button } from "../../components/button";

interface confirmTripModalProps {
  closeConfirmTripModal: () => void;
  createTrip: (event: FormEvent<HTMLFormElement>) => void;
  setOwnerName: (name: string) => void;
  setOwnerEmail: (email: string) => void;
}

export function ConfirmTripModal({
  closeConfirmTripModal,
  createTrip,
  setOwnerEmail,
  setOwnerName,
}: confirmTripModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] bg-zinc-900 rounded-xl py-5 px-6 shadow-shape space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-lg">
              Confirmar criação de viagens
            </h2>
            <button>
              <X
                className="size-5 text-zinc-400"
                onClick={closeConfirmTripModal}
              />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Para concluir a criação da viagem para{" "}
            <span className="text-zinc-100 font-semibold">
              Florianópolis, Brasil
            </span>{" "}
            nas datas de{" "}
            <span className="text-zinc-100 font-semibold">
              16 a 27 de agosto de 2024
            </span>{" "}
            preencha seus dados abaixo.
          </p>
        </div>
        <form
          name="confirmTripForm"
          onSubmit={createTrip}
          className="space-y-3"
        >
          <div className="flex flex-row items-center gap-2 flex-1 h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg">
            <User className="text-zinc-400 size-5" />
            <input
              type="text"
              name="name"
              onChange={(name) => setOwnerName(name.target.value)}
              placeholder="Seu nome completo"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </div>
          <div className="flex flex-row items-center gap-2 flex-1 h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg">
            <User className="text-zinc-400 size-5" />
            <input
              type="email"
              name="email"
              onChange={(email) => setOwnerEmail(email.target.value)}
              placeholder="Seu email pessoal"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </div>
          <Button type="submit" size="full">
            Confimar criação da viagem
            <Plus className="size-5" />
          </Button>
        </form>
      </div>
    </div>
  );
}
