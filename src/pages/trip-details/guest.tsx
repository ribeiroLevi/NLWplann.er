import { CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../components/button";

export function Guests() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Convidados</h2>
      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5 flex-1">
            <span className="block font-medium text-zinc-100">
              Jessica White
            </span>
            <span className="block text-xs text-zinc-400 truncate">
              jessica@test.com
            </span>
          </div>
          <CircleDashed className=" text-zinc-400 size-5" />
        </div>
      </div>

      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5 flex-1">
            <span className="block font-medium text-zinc-100">
              Jessica White
            </span>
            <span className="block text-xs text-zinc-400 truncate ">
              jessica@test.com
            </span>
          </div>
          <CircleDashed className=" text-zinc-400 size-5" />
        </div>
      </div>
      <Button
        variant="secondary"
        size="full"
        className="bg-zinc-800 text-zinc-200 rounded-lg px-5 h-11 flex items-center gap-2 w-full justify-center hover:bg-zinc-800"
      >
        <UserCog />
        Gerenciar Convidados
      </Button>
    </div>
  );
}
