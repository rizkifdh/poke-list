import { useQuery } from "@tanstack/react-query";
import { baseUrl } from "./lib/base-url";
import { Fragment } from "preact";
import { ButtonTypes } from "./components/button-types";
import { BackButton } from "./components/back-button";
import type { PokemonDetail } from "./types/pokemon-detail";
import { Loading } from "./components/loading";

export function PokemonDetail({ name }: { name: string }) {
  const {
    data: detailPokemon,
    isFetching,
    isFetchedAfterMount,
    error,
  } = useQuery<PokemonDetail>({
    queryKey: ["detailPokemon"],
    queryFn: async () => {
      const response = await fetch(`${baseUrl}/pokemon/${name}`);
      const data = await response.json();
      return data;
    },
  });

  if (isFetching)
    return (
      <>
        <Loading />
      </>
    );
  if (error) return <div>Error</div>;
  if (isFetchedAfterMount && detailPokemon)
    return (
      <div>
        <div class="flex justify-start ">
          <BackButton />
        </div>
        {detailPokemon && (
          <div class="card flex flex-col gap-5 pt-3">
            <div class="text-3xl font-semibold text-center">
              {detailPokemon.name}
            </div>
            <div class="card md:card-side">
              <figure>
                <img
                  src={
                    detailPokemon.sprites.other?.["official-artwork"]
                      .front_default
                  }
                  alt={detailPokemon.name}
                />
              </figure>
              <div class="card-body bg-sky-200 rounded-xl text-center flex gap-5 justify-center md:text-xl md:gap-8">
                <div>
                  <p>height :</p>
                  <p>{detailPokemon.height / 10} m</p>
                </div>
                <div>
                  <p>weight :</p>
                  <p>{detailPokemon.weight / 10} kg</p>
                </div>
                <div>
                  <p>abilities : </p>
                  <p>
                    {detailPokemon.abilities
                      .map(
                        (ability: PokemonDetail["abilities"]) =>
                          ability.ability.name
                      )
                      .join(", ")}
                  </p>
                </div>
                <div class="flex flex-col items-center gap-3">
                  <p>types : </p>
                  <div class="flex gap-5">
                    {detailPokemon.types.map(
                      (types: PokemonDetail["types"]) => (
                        <Fragment key={types.type.name}>
                          <ButtonTypes type={types.type.name} />
                        </Fragment>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div class="flex flex-col gap-3">
              <p>stats :</p>
              <div class="grid grid-cols-2 md:grid-cols-3 gap-10">
                {detailPokemon.stats.map((stats: PokemonDetail["stats"]) => (
                  <Fragment key={stats.stat.name}>
                    <div class="flex flex-col items-center gap-3">
                      <p class="text-center">{stats.stat.name}</p>
                      <div
                        class="radial-progress bg-secondary text-secondary-content border-4 border-secondary text-2xl"
                        style={{ "--value": stats.base_stat }}
                        role="progressbar"
                      >
                        {stats.base_stat}
                      </div>
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>

            <div class="text-justify">
              <p>moves:</p>
              {detailPokemon.moves
                .map((move: PokemonDetail["moves"]) => move.move.name)
                .join(" | ")}
            </div>
          </div>
        )}
      </div>
    );

  return <></>;
}
