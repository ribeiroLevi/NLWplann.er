import { Calendar, Plus, Tag, X } from "lucide-react";

interface CreateActivityModalProps {
  closeCreateActivityModal: () => void;
}

export function CreateActivityModal({
  closeCreateActivityModal,
}: CreateActivityModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] bg-zinc-900 rounded-xl py-5 px-6 shadow-shape space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-lg">Cadastrar atividade</h2>
            <button>
              <X
                className="size-5 text-zinc-400"
                onClick={closeCreateActivityModal}
              />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Todos os convidados podem ver as atividades.
          </p>
        </div>
        <form className="space-y-3">
          <div className="flex flex-row items-center gap-2 flex-1 h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg">
            <Tag className="text-zinc-400 size-5" />
            <input
              type="text"
              name="name"
              placeholder="Qual a atividade?"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </div>
          <div className="flex items-center gap-2">
            <div className="flex flex-1 flex-row items-center gap-2 h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg">
              <Calendar className="text-zinc-400 size-5" />
              <input
                type="datetime-local"
                name="occurs-at"
                placeholder="Data e Horário"
                className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-lime-300 w-full justify-center text-lime-950 rounded-lg px-5 h-11 flex items-center gap-2 hover:bg-lime-400"
          >
            Salvar atividade
            <Plus className="size-5" />
          </button>
        </form>
      </div>
    </div>
  );
}
