import { useState } from "react";
import PROJECTS from "../data/projects.json";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? PROJECTS
      : PROJECTS.filter((project) => project.type === filter);

  return (
    <section>
      <h2>Proyectos</h2>
      <p>Algunos de los trabajos que he realizado hasta el momento:</p>

      {/* Filtros por tipo */}
      <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
        <label>
          Filtrar por tipo:{" "}
          <select
            value={filter}
            onChange={(e) => {
              setSelectedProject(null);
              setFilter(e.target.value);
            }}
          >
            <option value="all">Todos</option>
            <option value="frontend">Frontend</option>
            <option value="fullstack">Fullstack</option>
          </select>
        </label>
      </div>

      <ul className="projects">
        {filteredProjects.map((project) => (
          <li
            key={project.id}
            className={`projects__item ${
              selectedProject?.id === project.id ? "projects__item--active" : ""
            }`}
            onClick={() => setSelectedProject(project)}
          >
            {project.image && (
              <div className="projects__image-wrapper">
                <img
                  src={project.image}
                  alt={project.name}
                  className="projects__image"
                />
              </div>
            )}

            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p className="projects__tech">
              Tecnologías: {project.tech.join(", ")}
            </p>
            <p className="projects__tech">
              Tipo: {project.type === "frontend" ? "Frontend" : "Fullstack"}
            </p>
          </li>
        ))}
      </ul>

      {selectedProject && (
        <div className="project-detail">
          {selectedProject.image && (
            <img
              src={selectedProject.image}
              alt={selectedProject.name}
              className="project-detail__image"
            />
          )}

          <h3>Detalles del proyecto</h3>
          <p>
            <strong>Nombre:</strong> {selectedProject.name}
          </p>
          <p>
            <strong>Descripción:</strong> {selectedProject.description}
          </p>
          <p>
            <strong>Tecnologías:</strong>{" "}
            {selectedProject.tech.join(", ")}
          </p>
          <p>
            <strong>Tipo:</strong>{" "}
            {selectedProject.type === "frontend" ? "Frontend" : "Fullstack"}
          </p>
          <button
            className="btn btn--outline"
            onClick={() => setSelectedProject(null)}
          >
            Cerrar
          </button>
        </div>
      )}
    </section>
  );
}
