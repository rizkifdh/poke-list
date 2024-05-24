export interface pokemonList {
  count: number;
  next?: string;
  previous?: string;
  results: {
    name: string;
    url: string;
  };
}