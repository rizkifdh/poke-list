import { render } from "preact";
import { Router, Route } from "preact-router";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Pokemon } from "./pokemon";
const queryClient = new QueryClient();

// const PokemonComponent = <Pokemon />;

const Main = () => {
  return (
    <Router>
      <Route path="/" component={Pokemon} />
    </Router>
  );
};

render(
  <ChakraProvider>
    <QueryClientProvider client={queryClient}>
      <Main />
    </QueryClientProvider>
  </ChakraProvider>,
  document.getElementById("app")!
);
