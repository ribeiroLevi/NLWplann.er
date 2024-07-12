import { CircleCheck } from "lucide-react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface Activity {
  date: string;
  activities: {
    id: string;
    occurs_at: string;
    title: string;
  }[];
}

export function Activities() {
  const { tripId } = useParams();
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await api.get(`/trips/${tripId}/activities`);
        setActivities(response.data.activities);
      } catch (error) {
        console.error("Error fetching activities:", error);
      }
    };

    fetchActivities();
  }, [tripId]);

  return (
    <div className="space-y-8">
      {activities.map((category) => (
        <div key={category.date} className="space-y-2.5">
          <div className="flex gap-2 items-baseline">
            <span className="text-xl text-zinc-300 font-semibold">
              Dia {format(new Date(category.date), "d")}
            </span>
            <span className="text-xs text-zinc-500">
              {format(new Date(category.date), "EEEE", { locale: ptBR })}
            </span>
          </div>
          {category.activities.length > 0 ? (
            <div className="space-y-2.5">
              {category.activities.map((activity) => (
                <div
                  key={activity.id}
                  className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3"
                >
                  <CircleCheck className="size-4 text-lime-300" />
                  <span className="text-zinc-100">{activity.title}</span>
                  <span className="text-zinc-400 text-sm ml-auto">
                    {format(activity.occurs_at, "HH:mm")}h
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div>
              <span className="text-zinc-400 text-sm ">
                Sem atividades programadas
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
