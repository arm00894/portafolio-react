import { useState } from "react";

export default function NewsletterPage() {
  const [email, setEmail] = useState("");
  const [frequency, setFrequency] = useState("mensual");
  const [accepted, setAccepted] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!accepted) return;
    console.log("Noticias:", { email, frequency });
    setSubscribed(true);
  }

  return (
    <section>
      <h2>Noticias</h2>
      <p>
        Suscríbete para recibir cada mes las novedades de DigitalEvolution S.A. y
        los últimos proyectos en los que estoy trabajando.
      </p>

      {subscribed ? (
        <p className="success">
          Te has suscrito correctamente a la newsletter ({frequency}).
        </p>
      ) : (
        <form className="form" onSubmit={handleSubmit}>
          <label>
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tucorreo@ejemplo.com"
              required
            />
          </label>

          <label>
            Frecuencia
            <select
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
            >
              <option value="mensual">Mensual</option>
              <option value="trimestral">Trimestral</option>
            </select>
          </label>

          <label className="checkbox">
            <input
              type="checkbox"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
            />
            Acepto recibir comunicaciones por email.
          </label>

          <button type="submit" className="btn" disabled={!accepted}>
            Suscribirme
          </button>
        </form>
      )}
    </section>
  );
}
