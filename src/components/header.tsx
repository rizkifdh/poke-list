import pokelist from "../assets/pokelist.png";
import { Link } from "preact-router";
export function Header() {
  return (
    <div class="flex justify-center pb-5">
      <Link href="/">
        <img src={pokelist} alt="pokelist" class="w-[300px] md:w-[400px]" />
      </Link>
    </div>
  );
}
