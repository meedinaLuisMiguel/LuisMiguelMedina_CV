"use strict";

const cvData = {
  personal: {
    name: "Luis Miguel Medina Llanos",
    initials: "LM",
    photo: "assets/profile-photo.jpg",
    title: "Backend Developer | Software Developer",
    websiteTitle: "Desarrollador backend · Ingeniería en Informática en curso",
    location: "Manizales, Colombia",
    email: "lm.medinam1@gmail.com",
    phone: "+57 314 514 8286",
    linkedin: "https://www.linkedin.com/in/luis-miguel-medina-llanos-958a36397/",
    github: "https://github.com/meedinaLuisMiguel",
    portfolio: "",
    introduction:
      "Desarrollador de software con experiencia en backend, APIs, sistemas empresariales, bases de datos y automatización.",
  },
  profile:
    "Desarrollador de software con formación tecnológica completada en Análisis y Desarrollo de Software y actualmente cursando Ingeniería en Informática. Experiencia práctica en desarrollo y mantenimiento de backend, APIs REST, lógica de negocio, aplicaciones con bases de datos, integraciones, reportes y automatización. He trabajado con PHP, Laravel, MySQL y arquitecturas multi-tenant en sistemas empresariales; también he creado flujos con n8n e integraciones de IA para búsqueda, extracción y clasificación de información. Aporto comprensión de procesos operativos y comerciales para resolver necesidades reales de negocio.",
  skills: [
    {
      category: "Backend y APIs",
      items: ["PHP", "Laravel", "APIs REST", "Lógica de negocio", "Arquitectura multi-tenant", "Integraciones de sistemas"],
    },
    {
      category: "Bases de datos y datos",
      items: ["MySQL", "SQL", "Consultas relacionales", "Procesamiento y validación de datos", "Reportes"],
    },
    {
      category: "Automatización e IA",
      items: ["n8n", "Integraciones con LLM", "OpenAI APIs", "Embeddings", "Búsqueda semántica", "Automatización de flujos"],
    },
    {
      category: "Herramientas de desarrollo",
      items: ["Git", "GitHub", "Postman", "DBeaver", "Visual Studio Code"],
    },
  ],
  experience: [
    {
      role: "Backend Developer / Software Developer",
      organization: "Grownet — ERP y software para empresas en UK",
      employmentNote: "Grownet Tech Ltd",
      period: "Julio 2025 — Noviembre 2026",
      location: "",
      highlights: [
        "Desarrollé y mantuve funcionalidades backend con PHP y Laravel, además de APIs REST para consumidores internos y externos.",
        "Implementé y adapté endpoints, controladores, servicios, rutas, traits, migraciones y lógica de negocio según requerimientos.",
        "Trabajé con arquitectura multi-tenant, migraciones por tenant y consultas MySQL para aplicaciones empresariales.",
        "Implementé reglas de negocio relacionadas con pedidos, clientes, proveedores, productos, cantidades, precios e ingresos.",
        "Mantuve funcionalidades de reportes y procesamiento de datos; investigué inconsistencias entre sistemas, migraciones e integraciones.",
        "Validé APIs con Postman e inspeccioné estructuras y registros de base de datos con DBeaver.",
        "Participé en depuración y diagnóstico de problemas de funcionalidades orientadas a procesos empresariales.",
      ],
    },
    {
      role: "Soporte de Operaciones y Sistemas",
      organization: "Empresa británica de frutas y verduras — Foodpoint",
      employmentNote: "Contrato de prestación de servicios",
      period: "Julio 2025 - Noviembre 2026",
      location: "Operación orientada al Reino Unido",
      highlights: [
        "Procesé pedidos de clientes y apoyé flujos operativos relacionados con pedidos, facturas y reportes.",
        "Revisé consistencia de clientes, cantidades, precios y datos; investigué discrepancias entre sistemas y fuentes.",
        "Apoyé la validación y conciliación de datos y el análisis de incidencias de pedidos, productos, entregas y facturación.",
        "Colaboré con interlocutores operativos y técnicos para identificar problemas de procesos, sistemas y migraciones.",
        "Trabajé con herramientas y sistemas operativos como Grownet, FoodPoint, UFC, EF, Bayley, Caterpoint, Sage y Google Sheets.",
      ],
    },
  ],
  projects: [
    {
      name: "FoodPoint — Automatización de prospección comercial",
      summary:
        "Flujo de prospección para identificar potenciales restaurantes del Reino Unido mediante búsquedas por código postal, procesamiento de información comercial y registro de leads.",
      highlights: [
        "Orquesté pasos de búsqueda, filtrado de cadenas y supermercados, detección de duplicados, extracción de contexto y descubrimiento de contactos.",
        "Integré n8n, Tavily, APIs de OpenAI/LLM, Google Sheets y filtrado SQL en un flujo de trabajo automatizado.",
        "Apliqué embeddings, similitud semántica, clasificación asistida por IA y puntuación de leads para relacionar productos, unidades de medida y categorías.",
      ],
      technologies: ["n8n", "Tavily", "OpenAI APIs", "Embeddings", "SQL", "Google Sheets"],
    },
  ],
  education: [
    {
      qualification: "Ingeniería en Informática",
      institution: "Universidad de Caldas",
      detail: "En curso · Inicio: agosto de 2026 · Finalización estimada: 2030",
    },
    {
      qualification: "Tecnólogo en Análisis y Desarrollo de Software",
      institution: "SENA Regional Caldas",
      detail: "Completado en abril de 2026 · Manizales, Colombia",
    },
    {
      qualification: "Técnico en Asistencia Administrativa",
      institution: "SENA Regional Caldas",
      detail: "Finalizado en diciembre de 2022 · Manizales, Colombia",
    },
  ],
  certifications: [
    {
      name: "Inglés B2+",
      institution: "Centro Colombo Americano de Manizales",
      detail: "800 horas · Certificación: 28 de abril de 2025",
    },
    {
      name: "Comportamiento emprendedor",
      institution: "SENA",
      detail: "48 horas · Finalizado el 7 de julio de 2022",
    },
    {
      name: "Habilidades digitales para la gestión de la información",
      institution: "SENA",
      detail: "48 horas · Finalizado el 9 de noviembre de 2021",
    },
    {
      name: "Escritura y ortografía",
      institution: "SENA",
      detail: "48 horas · Finalizado el 5 de noviembre de 2021",
    },
  ],
  languages: [
    { name: "Español", proficiency: "Nativo" },
    { name: "Inglés", proficiency: "B2+" },
  ],
};

const templateButtons = document.querySelectorAll(".template-option");
const resumePanels = document.querySelectorAll(".resume-panel");
const downloadButton = document.querySelector("#download-pdf");
const printNote = document.querySelector("#print-note");
let selectedTemplate = "visual";

function createElement(tagName, className, text) {
  const element = document.createElement(tagName);
  if (className) {
    element.className = className;
  }
  if (text !== undefined) {
    element.textContent = text;
  }
  return element;
}

function createList(items) {
  const list = createElement("ul");
  items.forEach((item) => list.append(createElement("li", "", item)));
  return list;
}

function createContactItem(label, value, href) {
  const item = createElement("li");
  item.append(createElement("span", "contact-symbol", label));
  if (href) {
    const link = createElement("a", "", value);
    link.href = href;
    item.append(link);
  } else {
    item.append(createElement("span", "", value));
  }
  return item;
}

function getContactItems() {
  const items = [
    ["@", cvData.personal.email, `mailto:${cvData.personal.email}`],
    ["☎", cvData.personal.phone, `tel:${cvData.personal.phone.replace(/\s/g, "")}`],
    ["⌖", cvData.personal.location, ""],
  ];

  [
    ["in", cvData.personal.linkedin],
    ["⌘", cvData.personal.github],
    ["↗", cvData.personal.portfolio],
  ].forEach(([label, url]) => {
    if (url) {
      items.push([label, url.replace(/^https?:\/\//, ""), url]);
    }
  });

  return items;
}

function renderVisual() {
  const avatar = document.querySelector("#visual-initials");
  avatar.setAttribute("aria-label", `Foto de perfil de ${cvData.personal.name}`);
  avatar.textContent = cvData.personal.initials;

  if (cvData.personal.photo) {
    [
      avatar,
      document.querySelector("#brand-mark"),
      document.querySelector("#footer-brand-mark"),
    ].forEach((photoContainer) => {
      if (!photoContainer) {
        return;
      }
      const image = document.createElement("img");
      image.src = cvData.personal.photo;
      image.alt = "";
      image.addEventListener("error", () => {
        photoContainer.textContent = cvData.personal.initials;
      }, { once: true });
      photoContainer.replaceChildren(image);
    });
  }

  document.querySelector("#visual-title").textContent = cvData.personal.title.toUpperCase();
  document.querySelector("#visual-name").textContent = cvData.personal.name;
  document.querySelector("#visual-profile-heading").textContent =
    "Backend y software para resolver necesidades reales.";
  document.querySelector("#visual-summary").textContent = cvData.profile;

  const contact = document.querySelector("#visual-contact");
  getContactItems().forEach(([label, value, href]) => {
    contact.append(createContactItem(label, value, href));
  });

  const skills = document.querySelector("#visual-skills");
  cvData.skills.forEach((group) => {
    const wrapper = createElement("div", "skill-group");
    wrapper.append(createElement("h4", "", group.category));
    wrapper.append(createElement("p", "", group.items.join(" · ")));
    skills.append(wrapper);
  });

  const languages = document.querySelector("#visual-languages");
  cvData.languages.forEach((language) => {
    const row = createElement("p", "language-line");
    row.append(createElement("span", "", language.name));
    row.append(createElement("span", "", language.proficiency));
    languages.append(row);
  });

  const experience = document.querySelector("#visual-experience");
  cvData.experience.forEach((item) => {
    const entry = createElement("article", "timeline-item");
    const meta = createElement("div", "timeline-meta");
    meta.append(createElement("span", "", item.period));
    entry.append(meta);
    entry.append(createElement("h3", "", item.role));
    entry.append(createElement("p", "company", item.organization));
    if (item.employmentNote) {
      entry.append(createElement("p", "company", item.employmentNote));
    }
    if (item.location) {
      entry.append(createElement("p", "company", item.location));
    }
    entry.append(createList(item.highlights));
    experience.append(entry);
  });

  const projects = document.querySelector("#visual-projects");
  cvData.projects.forEach((project) => {
    const entry = createElement("article", "project-entry");
    entry.append(createElement("h3", "", project.name));
    entry.append(createElement("p", "project-summary", project.summary));
    entry.append(createList(project.highlights));
    entry.append(createElement("p", "project-technologies", `Tecnologías: ${project.technologies.join(" · ")}`));
    projects.append(entry);
  });

  const education = document.querySelector("#visual-education");
  cvData.education.forEach((item) => {
    const entry = createElement("article", "education-item");
    const details = createElement("div");
    details.append(createElement("h3", "", item.qualification));
    details.append(createElement("p", "company", item.institution));
    details.append(createElement("p", "company", item.detail));
    entry.append(details);
    education.append(entry);
  });

  const certifications = document.querySelector("#visual-certifications");
  cvData.certifications.forEach((item) => {
    const entry = createElement("article", "education-item");
    const details = createElement("div");
    details.append(createElement("h3", "", item.name));
    details.append(createElement("p", "company", `${item.institution} · ${item.detail}`));
    entry.append(details);
    certifications.append(entry);
  });
}

function renderAts() {
  document.querySelector("#ats-name").textContent = cvData.personal.name.toUpperCase();
  document.querySelector("#ats-title").textContent = cvData.personal.title;
  document.querySelector("#ats-contact").append(
    createElement(
      "p",
      "",
      [
        cvData.personal.location,
        cvData.personal.email,
        cvData.personal.phone,
        cvData.personal.linkedin,
        cvData.personal.github,
        cvData.personal.portfolio,
      ]
        .filter(Boolean)
        .join(" | "),
    ),
  );
  document.querySelector("#ats-summary").textContent = cvData.profile;

  const skills = document.querySelector("#ats-skills");
  cvData.skills.forEach((group) => {
    const row = createElement("p");
    row.append(createElement("strong", "", `${group.category}: `));
    row.append(document.createTextNode(group.items.join(", ")));
    skills.append(row);
  });

  const experience = document.querySelector("#ats-experience");
  cvData.experience.forEach((item) => {
    const entry = createElement("div", "ats-entry");
    entry.append(createElement("h4", "", `${item.role} | ${item.organization}`));
    entry.append(createElement("p", "ats-date", [item.period, item.employmentNote, item.location].filter(Boolean).join(" | ")));
    entry.append(createList(item.highlights));
    experience.append(entry);
  });

  const projects = document.querySelector("#ats-projects");
  cvData.projects.forEach((project) => {
    const entry = createElement("div", "ats-entry");
    entry.append(createElement("h4", "", project.name));
    entry.append(createElement("p", "", project.summary));
    entry.append(createList(project.highlights));
    const technologies = createElement("p");
    technologies.append(createElement("strong", "", "Tecnologías: "));
    technologies.append(document.createTextNode(project.technologies.join(", ")));
    entry.append(technologies);
    projects.append(entry);
  });

  const education = document.querySelector("#ats-education");
  cvData.education.forEach((item) => {
    const entry = createElement("div", "ats-entry");
    entry.append(createElement("h4", "", `${item.qualification} | ${item.institution}`));
    entry.append(createElement("p", "ats-date", item.detail));
    education.append(entry);
  });

  const certifications = document.querySelector("#ats-certifications");
  cvData.certifications.forEach((item) => {
    const entry = createElement("div", "ats-entry");
    entry.append(createElement("h4", "", `${item.name} | ${item.institution}`));
    entry.append(createElement("p", "ats-date", item.detail));
    certifications.append(entry);
  });

  const languages = document.querySelector("#ats-languages");
  languages.append(
    createElement(
      "p",
      "",
      cvData.languages.map((language) => `${language.name}: ${language.proficiency}`).join(" | "),
    ),
  );
}

function renderPortfolio() {
  document.querySelector("#header-name").textContent = cvData.personal.name;
  document.querySelector("#footer-name").textContent = cvData.personal.name;
  document.querySelector("#hero-name").textContent = cvData.personal.name;
  document.querySelector("#hero-title").textContent = cvData.personal.websiteTitle;
  document.querySelector("#hero-summary").textContent = cvData.personal.introduction;
  document.querySelector("#profile-summary").textContent = cvData.profile;
  const heroPhoto = document.querySelector("#hero-photo");
  heroPhoto.src = cvData.personal.photo;
  heroPhoto.alt = `Retrato de ${cvData.personal.name}`;

  const heroEmail = document.querySelector("#hero-email");
  heroEmail.href = `mailto:${cvData.personal.email}`;

  const heroLinks = document.querySelector("#hero-links");
  [
    ["LinkedIn", cvData.personal.linkedin],
    ["GitHub", cvData.personal.github],
    ["Correo", `mailto:${cvData.personal.email}`],
  ].forEach(([label, url]) => {
    if (!url) {
      return;
    }
    const link = createElement("a", "hero-link", label);
    link.href = url;
    if (!url.startsWith("mailto:")) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
    heroLinks.append(link);
  });

  const skills = document.querySelector("#skills-list");
  cvData.skills.forEach((group, index) => {
    const card = createElement("article", "skill-card");
    card.append(createElement("span", "card-index", String(index + 1).padStart(2, "0")));
    card.append(createElement("h3", "", group.category));
    const list = createElement("ul", "tag-list");
    group.items.forEach((skill) => list.append(createElement("li", "", skill)));
    card.append(list);
    skills.append(card);
  });

  const experience = document.querySelector("#experience-list");
  cvData.experience.forEach((item) => {
    const article = createElement("article", "experience-card");
    const meta = createElement("div", "experience-meta");
    meta.append(createElement("span", "experience-period", item.period));
    if (item.location) {
      meta.append(createElement("span", "experience-location", item.location));
    }
    article.append(meta);
    const content = createElement("div", "experience-content");
    content.append(createElement("h3", "", item.role));
    content.append(createElement("p", "experience-company", item.organization));
    if (item.employmentNote) {
      content.append(createElement("p", "experience-note", item.employmentNote));
    }
    content.append(createList(item.highlights));
    article.append(content);
    experience.append(article);
  });

  const projects = document.querySelector("#project-list");
  cvData.projects.forEach((project) => {
    const article = createElement("article", "project-card");
    const copy = createElement("div", "project-copy");
    copy.append(createElement("p", "project-label", "AUTOMATIZACIÓN · INTEGRACIÓN · DATOS"));
    copy.append(createElement("h3", "", project.name));
    copy.append(createElement("p", "project-summary", project.summary));
    copy.append(createList(project.highlights));
    const tags = createElement("ul", "tag-list project-tags");
    project.technologies.forEach((technology) => tags.append(createElement("li", "", technology)));
    copy.append(tags);
    article.append(copy);
    const flow = createElement("div", "project-flow");
    flow.setAttribute("aria-label", "Flujo del proyecto");
    ["Búsqueda", "Clasificación", "Matching semántico", "Lead"].forEach((step, index) => {
      flow.append(createElement("span", "flow-step", step));
      if (index < 3) {
        flow.append(createElement("span", "flow-arrow", "→"));
      }
    });
    article.append(flow);
    projects.append(article);
  });

  const education = document.querySelector("#education-list");
  cvData.education.forEach((item, index) => {
    const entry = createElement("article", "education-entry");
    entry.append(createElement("span", "education-index", `0${index + 1}`));
    const details = createElement("div");
    details.append(createElement("h3", "", item.qualification));
    details.append(createElement("p", "education-institution", item.institution));
    details.append(createElement("p", "education-detail", item.detail));
    entry.append(details);
    education.append(entry);
  });

  const certifications = document.querySelector("#certifications-list");
  cvData.certifications.forEach((item) => {
    const card = createElement("article", "certification-card");
    card.append(createElement("h3", "", item.name));
    card.append(createElement("p", "education-institution", item.institution));
    card.append(createElement("p", "education-detail", item.detail));
    certifications.append(card);
  });

  const languages = document.querySelector("#language-list");
  cvData.languages.forEach((language) => {
    const row = createElement("p", "language-row");
    row.append(createElement("span", "", language.name));
    row.append(createElement("span", "", language.proficiency));
    languages.append(row);
  });

  const contact = document.querySelector("#contact-details");
  [
    ["Correo electrónico", cvData.personal.email, `mailto:${cvData.personal.email}`],
    ["Teléfono", cvData.personal.phone, `tel:${cvData.personal.phone.replace(/\s/g, "")}`],
    ["LinkedIn", cvData.personal.linkedin, cvData.personal.linkedin],
    ["GitHub", cvData.personal.github, cvData.personal.github],
  ].forEach(([label, value, url]) => {
    if (!url) {
      return;
    }
    const link = createElement("a", "contact-link");
    link.href = url;
    if (!url.startsWith("mailto:") && !url.startsWith("tel:")) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
    link.append(createElement("span", "contact-label", label));
    link.append(createElement("span", "contact-value", value.replace(/^https?:\/\//, "")));
    link.append(createElement("span", "contact-arrow", "↗"));
    contact.append(link);
  });
}

document.querySelectorAll("[data-download-template]").forEach((button) => {
  button.addEventListener("click", () => {
    document.body.dataset.printTemplate = button.dataset.downloadTemplate;
    printNote.classList.add("is-visible");
    window.print();
  });
});

window.addEventListener("afterprint", () => {
  delete document.body.dataset.printTemplate;
  printNote.classList.remove("is-visible");
});

renderPortfolio();
renderVisual();
renderAts();
