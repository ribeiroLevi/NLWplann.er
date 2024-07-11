import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";

interface DestinationAndDateStepProps {
  isGuestsInputOpen: boolean;
  closeGuestsInput: () => void;
  openGuestsInput: () => void;
}

export function DestinationAndDateStep({
  isGuestsInputOpen,
  closeGuestsInput,
  openGuestsInput,
}: DestinationAndDateStepProps) {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center gap-3 shadow-shape">
      <div className="flex gap-2 items-center">
        <MapPin className="size-5 text-zinc-400" />
        <input
          disabled={isGuestsInputOpen}
          type="text"
          name=""
          id=""
          placeholder="Para onde você vai?"
          className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
        />
      </div>
      <div className="flex gap-2 items-center flex-1  ">
        <Calendar className="size-5 text-zinc-400" />
        <input
          disabled={isGuestsInputOpen}
          type="text"
          name=""
          id=""
          placeholder="Quando?"
          className="bg-transparent text-lg placeholder-zinc-400 outline-none w-40"
        />
      </div>
      <div className="w-px h-6 bg-zinc-800"></div>
      {isGuestsInputOpen ? (
        <button
          onClick={closeGuestsInput}
          className="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 flex items-center gap-2 hover:bg-zinc-800"
        >
          Alterar Local e Data
          <Settings2 />
        </button>
      ) : (
        <button
          onClick={openGuestsInput}
          className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 flex items-center gap-2 hover:bg-lime-400"
        >
          Continuar
          <ArrowRight className="size-5" />
        </button>
      )}
    </div>
  );
}
