import { Link2, Plus } from "lucide-react";
import { Button } from "../../components/button";

export function ImportantLinks() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Links Importantes</h2>
      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5 flex-1">
            <span className="block font-medium text-zinc-100">
              Reserva AirBnB
            </span>
            <a
              href="#"
              className="block text-sm text-zinc-400 truncate hover:text-zinc-200"
            >
              https://www.airbnb.com.br/?_set_bev_on_new_domain=1720700834_EAYjAwNTJkMzU1Yz
            </a>
          </div>
          <Link2 className=" text-zinc-400 size-5" />
        </div>
      </div>

      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5 flex-1">
            <span className="block font-medium text-zinc-100">
              Regras da Casa
            </span>
            <a
              href="#"
              className="block text-sm text-zinc-400 truncate hover:text-zinc-200"
            >
              https://www.airbnb.com.br/?_set_bev_on_new_domain=1720700834_EAYjAwNTJkMzU1Yz
            </a>
          </div>
          <Link2 className=" text-zinc-400 size-5" />
        </div>
      </div>
      <Button
        variant="secondary"
        size="full"
        className="bg-zinc-800 text-zinc-200 rounded-lg px-5 h-11 flex items-center gap-2 w-full justify-center hover:bg-zinc-800"
      >
        <Plus />
        Cadastrar Novo Link
      </Button>
    </div>
  );
}
