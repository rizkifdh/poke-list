import { useQuery } from "@tanstack/react-query";
import type { abilities } from "../types/pokemon-detail";

export function PokemonDetail({ url }: { url: string }) {
  const { data: detailPokemon } = useQuery({
    queryKey: ["detailPokemon", url],
    queryFn: async () => {
      const response = await fetch(url);
      const data = await response.json();
      console.log("data", data);
      return data;
    },
    enabled: !!url, // only run the query if the url is not null,
  });

  return (
    <div class="pb-5">
      <h2>ability</h2>
      <ul>
        {detailPokemon?.abilities.map((ability: abilities) => (
          <li>{ability.ability.name}</li>
        ))}
      </ul>
    </div>
  );
}
