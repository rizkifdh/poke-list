import { imageUrl } from "../lib/base-url";
export function PokemonImage({ name }: { name: string }) {
  console.log("name", name);

  return (
    <>
      <img src={`${imageUrl}/${name}.jpg`} />
    </>
  );
}
