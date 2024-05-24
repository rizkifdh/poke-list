import { useQuery } from "@tanstack/react-query";
import { baseUrl } from "./lib/base-url";
import { Fragment } from "preact";
import { useState, useEffect } from "preact/hooks";
import type { pokemonList } from "./types/pokemon-list";
import { PokemonCard } from "./components/pokemon-card";
import { BiSearch } from "react-icons/bi";

export function Pokemon() {
  const [currentPage, setcurrentPage] = useState(1);
  const [searchQuery, setsearchQuery] = useState("");
  const [filteredData, setfilteredData] = useState([]);

  const maxItems = 20;

  const fetchPokemon = async () => {
    const response = await fetch(`${baseUrl}/pokemon?limit=1302`);
    const data = await response.json();
    return data.results;
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["pokemonList"],
    queryFn: fetchPokemon,
  });

  useEffect(() => {
    if (data) {
      setfilteredData(
        data.filter((pokemon: pokemonList["results"]) =>
          pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      setcurrentPage(1);
    }
  }, [data, searchQuery]);

  const handlePrev = () => {
    setcurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNext = () => {
    const maxPage = Math.ceil(filteredData.length / maxItems);
    setcurrentPage((prevPage) => Math.min(prevPage + 1, maxPage));
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setsearchQuery(target.value);
  };

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>An error has occurred: {error.message}</div>;

  const startIndex = (currentPage - 1) * maxItems;
  const paginatedData = filteredData.slice(startIndex, startIndex + maxItems);

  return (
    <div class="pt-5">
      <div class="flex flex-col gap-5 items-center">
        <label class="input input-bordered flex items-center w-full justify-between gap-2">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search Pokémon"
          />
          <BiSearch />
        </label>
        <div class="flex flex-col pt-5 gap-10 md:grid md:grid-cols-2">
          {paginatedData.length > 0 ? (
            paginatedData.map((pokemon: pokemonList["results"]) => (
              <Fragment key={pokemon.name}>
                <PokemonCard url={pokemon.url} />
              </Fragment>
            ))
          ) : (
            <div>Pokémon not Found</div>
          )}
        </div>

        <div class="join">
          <button
            class="join-item btn"
            onClick={handlePrev}
            disabled={currentPage === 1}
          >
            «
          </button>
          <button class="join-item btn">Page {currentPage}</button>
          <button
            class="join-item btn"
            onClick={handleNext}
            disabled={currentPage === Math.ceil(filteredData.length / maxItems)}
          >
            »
          </button>
        </div>
      </div>
    </div>
  );
}
