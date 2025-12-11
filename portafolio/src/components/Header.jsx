export default function Header({ theme, setTheme }) {
  function handleClick() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  return (
    <header className="header">
      <div>
        <h1>DigitalEvolution S.A.</h1>
        <p className="header__subtitle">
          Portafolio personal · Desarrollador Frontend
        </p>
      </div>
    </header>
  );
}
