import { CheckCircle2, CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../components/button";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";

interface Participant {
  id: string;
  name: string | null;
  email: string;
  is_confirmed: boolean;
}

export function Guests() {
  const { tripId } = useParams();
  const [participants, setParticipants] = useState<Participant[]>([]);

  useEffect(() => {
    api
      .get(`/trips/${tripId}/participants`)
      .then((response) => setParticipants(response.data.participants));
  }, [tripId]);

  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Convidados</h2>
      <div className="space-y-5">
        {participants.map((participant, index) => {
          return (
            <div
              key={participant.id}
              className="flex items-center justify-between gap-4"
            >
              <div className="space-y-1.5 flex-1">
                <span className="block font-medium text-zinc-100">
                  {participant.name ?? `Convidado ${index}`}
                </span>
                <span className="block text-xs text-zinc-400 truncate">
                  {participant.email}
                </span>
              </div>
              {participant.is_confirmed ? (
                <CheckCircle2 className="size-5  shrink-0 text-green-400" />
              ) : (
                <CircleDashed className=" text-zinc-400 shrink-0 size-5" />
              )}
            </div>
          );
        })}
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
