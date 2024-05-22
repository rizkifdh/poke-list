import { useQuery } from "@tanstack/react-query";
import { baseUrl } from "./lib/base-url";
import { PokemonDetail } from "./components/pokemon-detail";
import { Fragment } from "preact";
import { imageUrl } from "./lib/base-url";

interface pokemonList {
  name: string;
  url: string;
}

export function Pokemon() {
  const {
    data: pokemonList,
    isPending,
    error,
  } = useQuery<pokemonList[]>({
    queryKey: ["pokemon"],
    queryFn: async () => {
      const response = await fetch(`${baseUrl}/pokemon`);
      const data = await response.json();
      console.log("data", data);
      return data.results;
    },
  });

  console.log("pokemonList", pokemonList);

  if (isPending) return <div>Loading</div>;

  if (error) return <div>An error has occurred: + {error.message}</div>;

  return (
    <>
      <div class="flex flex-col">
        <div class="text-xl">pokemon list</div>
        {pokemonList &&
          pokemonList.map((pokemon: pokemonList) => (
            <Fragment key={pokemon.name}>
              <p>{pokemon.name}</p>
              <PokemonDetail url={pokemon.url} />
              <img src={`${imageUrl}/${pokemon.name}.jpg`} />
            </Fragment>
          ))}
      </div>
      <div></div>
    </>
  );
}
