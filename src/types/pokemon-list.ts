export interface PokemonList {
  filter: any;
  count: number;
  next?: string;
  previous?: string;
  results: {
    name: string;
    url: string;
  };
}