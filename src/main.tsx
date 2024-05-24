import "./index.css";
import { render } from "preact";
import { Router, Route } from "preact-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Pokemon } from "./pokemon";
import { Header } from "./components/header";
import { PokemonDetail } from "./pokemon-detail";
import { Footer } from "./components/footer";

const queryClient = new QueryClient();

const Main = () => {
  return (
    <Router>
      <Route path="/" component={Pokemon} />
      <Route path="/:name" component={PokemonDetail} />
    </Router>
  );
};

render(
  <QueryClientProvider client={queryClient}>
    <div class="flex flex-col items-center justify-center card">
      <div class="w-full max-w-screen-md flex flex-col shadow-xl">
        <div class="p-5 md:p-10">
          <Header />
          <Main />
        </div>
        <Footer />
      </div>
    </div>
  </QueryClientProvider>,
  document.getElementById("app")!
);
