import { ArrowRight, UserRoundPlus } from "lucide-react";

interface InviteGuestsStepProps {
  openGuestsModal: () => void;
  openConfirmTripModal: () => void;
  emailsToInvite: string[];
}

export function InviteGuestsStep({
  emailsToInvite,
  openConfirmTripModal,
  openGuestsModal,
}: InviteGuestsStepProps) {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center gap-3 shadow-shape max-w-full">
      <button
        type="button"
        onClick={openGuestsModal}
        className="flex gap-2 items-center flex-1 text-start"
      >
        <UserRoundPlus className="size-5 text-zinc-400" />
        {emailsToInvite.length > 0 ? (
          <span className="text-zinc-100 text-lg flex-1">
            {emailsToInvite.length} pessoas convidadas
          </span>
        ) : (
          <span className="text-zinc-400 text-lg flex-1">
            Quem estará na viagem?
          </span>
        )}
        <input
          type="text"
          name=""
          id=""
          placeholder=""
          className="bg-transparent text-lg placeholder-zinc-400 outline-none w-full flex-1"
        />
      </button>
      <div className="w-px h-6 bg-zinc-800"></div>

      <button
        onClick={openConfirmTripModal}
        className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 flex items-center gap-2 hover:bg-lime-400"
      >
        Confirmar Viagem
        <ArrowRight className="size-5" />
      </button>
    </div>
  );
}
