import { CgPokemon } from "react-icons/cg";
export function Loading() {
  return (
    <div class="h-[100vh] flex justify-center items-center">
      <div class="">
        <div
          class="animate-bounce items-center flex justify-center text-9xl"
          role="status"
        >
          <CgPokemon />
        </div>
        <div class="animate-pulse text-center text-2xl">Loading...</div>
      </div>
    </div>
  );
}
