export default function HomePage() {
  return (
    <section>
      <div className="home-hero">
        <div className="home-hero__text">
          <h2>Sobre mí</h2>
          <p>
            Soy desarrollador/a frontend en DigitalEvolution S.A., especializado/a en
            React, JavaScript y diseño de interfaces modernas.
          </p>
          <p>
            Me apasiona crear aplicaciones web rápidas, accesibles y fáciles de
            mantener, con especial atención a la experiencia de usuario.
          </p>
        </div>

        <div className="home-hero__photo-wrapper">
          <img
            src="/images/profile.jpg"
            alt="Alejandro Roca"
            className="home-hero__photo"
          />
        </div>
      </div>

      <div className="cards">
        <div className="card">
          <h3>Frontend</h3>
          <p>React, JavaScript, TypeScript, HTML5, CSS3.</p>
        </div>
        <div className="card">
          <h3>Herramientas</h3>
          <p>Git, GitHub, Netlify, Vite, Figma.</p>
        </div>
        <div className="card">
          <h3>Soft Skills</h3>
          <p>
            Trabajo en equipo, comunicación, responsabilidad y aprendizaje
            rápido.
          </p>
        </div>
      </div>
    </section>
  );
}

