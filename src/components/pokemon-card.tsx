import { useQuery } from "@tanstack/react-query";
import { Link } from "preact-router";
import { ButtonTypes } from "./button-types";
import { Fragment } from "preact";
import type { PokemonDetail } from "../types/pokemon-detail";

export function PokemonCard({ url }: { url: string }) {
  const { data: detailPokemon } = useQuery<PokemonDetail>({
    queryKey: ["detailPokemon", url],
    queryFn: async () => {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    },
    enabled: !!url,
  });

  return (
    <>
      {detailPokemon && (
        <Link href={`/${detailPokemon.name}`}>
          <div class="card shadow-xl items-center justify-center rounded-lg p-5 bg-gradient-to-br from-yellow-400 to-sky-500 w-[300px] text-white font-semibold flex gap-5 h-[500px] hover:scale-110">
            <p class="text-4xl font-semibold  text-center">
              {detailPokemon.name}
            </p>
            <div class="h-[250px] flex justify-center items-center">
              <img
                src={
                  detailPokemon.sprites.other?.["official-artwork"]
                    .front_default
                }
                alt={detailPokemon?.name}
                class="w-full h-full object-cover"
              />
            </div>
            <div class="flex flex-col items-center gap-3">
              <p>types : </p>
              <div class="flex gap-5">
                {detailPokemon.types.map((types: PokemonDetail["types"]) => (
                  <Fragment key={types.type.name}>
                    <ButtonTypes type={types.type.name} />
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
}
