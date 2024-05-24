export function Footer() {
  const date = new Date();
  return (
    <footer class="footer footer-center p-4 bg-secondary text-base-content">
      <aside>
        <p>
          copyright © {date.getFullYear()} -{" "}
          <a
            href="https://rizki-fadilah.com"
            target="_blank"
            rel="noopener noreferrer"
            class="link"
          >
            Rizki Fadilah
          </a>
        </p>
        <p>
          data provided by{" "}
          <a
            href="https://pokeapi.co/"
            target="_blank"
            rel="noopener noreferrer"
            class="link"
          >
            PokeApi
          </a>
        </p>
      </aside>
    </footer>
  );
}
