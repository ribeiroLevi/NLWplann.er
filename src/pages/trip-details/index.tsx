import { Plus } from "lucide-react";
import { useState } from "react";
import { CreateActivityModal } from "./createActivityModal";
import { ImportantLinks } from "./importantLinks";
import { Guests } from "./guest";
import { Activities } from "./activities";
import { DestinationAndDateHeader } from "./destinationAndDateHeader";
import { Button } from "../../components/button";

export function TripDetailPage() {
  const [isCreateActivityModalOpen, setisCreateActivityModalOpen] =
    useState(false);

  function openCreateActivityModal() {
    setisCreateActivityModalOpen(true);
  }

  function closeCreateActivityModal() {
    setisCreateActivityModalOpen(false);
  }

  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      <div>
        <DestinationAndDateHeader />
      </div>

      {isCreateActivityModalOpen && (
        <CreateActivityModal
          closeCreateActivityModal={closeCreateActivityModal}
        />
      )}

      <main className="flex gap-16">
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold ">Atividades</h2>
            <Button
              onClick={openCreateActivityModal}
              className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 flex items-center gap-2 hover:bg-lime-400"
            >
              <Plus className="size-5" />
              Cadastrar atividade
            </Button>
          </div>
          <Activities />
        </div>

        <div className="w-80 space-y-6">
          <ImportantLinks />

          <div className="w-full h-px bg-zinc-800" />

          <Guests />
        </div>
      </main>
    </div>
  );
}
