import { MapPin, Calendar, ArrowRight } from "lucide-react";

export function App() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="max-w-full px-6 text-center space-y-10">
        <p className="text-zinc-300 text-lg">
          Convide seus amigos e plajene sua próxima viagem
        </p>
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center gap-3">
          <div className="flex gap-2 items-center">
            <MapPin className="size-5 text-zinc-400" />
            <input
              type="text"
              name=""
              id=""
              placeholder="Para onde você vai?"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none"
            />
          </div>
          <div className="flex gap-2 items-center flex-1 ">
            <Calendar className="size-5 text-zinc-400 w-40" />
            <input
              type="text"
              name=""
              id=""
              placeholder="Quando?"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none"
            />
          </div>
          <div className="w-px h-6 bg-zinc-800"></div>

          <button className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 flex items-center gap-2 hover:bg-lime-400">
            Continuar
            <ArrowRight className="size-5" />
          </button>
        </div>
        <p className="text-zinc-500 text-sm">
          Ao planejar sua viagem pelo plann.er você automaticamente concorda
          <br /> com nossos
          <a href="#" className="text-zinc-300 undeline">
            termos de uso
          </a>
          e
          <a href="#" className="text-zinc-300 undeline">
            politicas de privacidade
          </a>
        </p>
      </div>
    </div>
  );
}
