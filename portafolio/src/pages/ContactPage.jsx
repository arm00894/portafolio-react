import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Formulario enviado:", form);
    setSent(true);
  }

  return (
    <section>
      <h2>Contacto</h2>
      <p>Si quieres que colaboremos en tu próximo proyecto, rellena el siguiente formulario:</p>

      {sent ? (
        <p className="success">
          Gracias por su mensaje, te respoderé lo antes posible.
        </p>
      ) : (
        <form className="form" onSubmit={handleSubmit}>
          <label>
            Nombre
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Tu nombre"
              required
            />
          </label>

          <label>
            Email
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="tucorreo@ejemplo.com"
              required
            />
          </label>

          <label>
            Mensaje
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Cuéntanos qué necesitas"
              required
            />
          </label>

          <button type="submit" className="btn">
            Enviar
          </button>
        </form>
      )}
    </section>
  );
}
