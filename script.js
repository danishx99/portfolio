const state = {
  history: [],
  historyIndex: -1,
  activePanel: "about",
};

const data = {
  name: "Danish Saleem",
  role: "AI/Software Engineer",
  tagline: "Software engineer doing AI work, AI engineer doing software work.",
  aboutLead:
    "AI/Software Engineer and recent Computer Science graduate from the University of the Witwatersrand. I design AI-powered solutions with a focus on RAG systems, LLMs, and prompt engineering, while delivering user-centric applications.",
  highlights: [
    "Full-stack foundations: React, Next.js, Node.js, PostgreSQL, MongoDB.",
    "Vector search with Pinecone and Qdrant for production RAG systems.",
    "Careful use of agentic tooling with reviewable, auditable outputs.",
  ],
  toolsLead:
    "Agentic tools are part of the craft. I keep them curated, controlled, and documented.",
  work: [
    {
      company: "Supertube",
      role: "AI Engineer",
      dates: "Jan 2025 – Present",
      description:
        "Primarily responsible for all technical implementations of custom products. From developing and building RAG-powered assistants integrated into services like MS Teams and WhatsApp to building comprehensive web solutions, I ensure execution from prototype to production.",
    },
  ],
  tools: {
    "AI / LLM Workflow": [
      "LangChain, LlamaIndex, Haystack",
      "Hugging Face, OpenWebUI",
      "RAG systems, LLMs, prompt engineering",
      "OpenAI API + SDK",
    ],
    Web: [
      "React, Next.js, Node.js, Express.js",
      "TailwindCSS, Jest",
      "HTML/CSS, JavaScript, TypeScript",
    ],
    "Dev Tooling": [
      "Git, Docker",
      "PostgreSQL, MongoDB",
      "Pinecone, ChromaDB, Qdrant",
    ],
    "Delivery / Ops": [
      "Microsoft Azure, AWS, GCP",
      "DigitalOcean, Cloudflare",
      "CI/CD, TDD, Agile (Scrum)",
    ],
  },
  contact: {
    email: "saleemdf99@gmail.com",
    website: "https://www.danishsaleem.dev",
    location: "Johannesburg, South Africa",
    linkedin: "https://www.linkedin.com/in/danishsaleemx/",
    github: "https://github.com/danishx99",
  },
  projects: [
    {
      title: "Campus Safety App",
      description:
        "Real-time campus safety platform with alerts, reporting, and live updates.",
      stack: "Full-stack web app",
      link: "https://campus-safety.azurewebsites.net/",
      repo: "https://github.com/danishx99/campus-safety-app",
    },
    {
      title: "Commongrounds Residential Management",
      description:
        "Property management platform for sectional title bodies corporate.",
      stack: "Responsive web platform",
      link: "https://common-grounds-app.onrender.com",
      repo: "https://github.com/danishx99/common-grounds-app",
    },
    {
      title: "Fat Guys - 3D Platformer Game",
      description:
        "Three.js platformer with custom models, lighting, and progression systems.",
      stack: "Three.js game",
      link: "https://lamp.ms.wits.ac.za/~schickentendies/",
      repo: "https://github.com/danishx99/fat-guys",
    },
  ],
  files: [
    "about.txt",
    "projects.json",
    "tools.md",
    "work.md",
    "contact.vcf",
    "resume.pdf",
    "blog.md",
  ],
};

const commands = {
  help: {
    description: "Show all available commands",
    run: () => helpOutput(),
  },
  ls: {
    description: "List files in the portfolio",
    run: () => data.files.join("\n"),
  },
  about: {
    description: "Quick bio + highlights",
    run: () => aboutOutput(),
  },
  whoami: {
    description: "Personal snapshot",
    run: () =>
      "Danish Saleem — AI/Software Engineer.\nStatus: Placeholder profile (add a short bio + current focus + location).\nType 'about' for full details.",
  },
  projects: {
    description: "Recent projects",
    run: () => projectsOutput(),
  },
  tools: {
    description: "Agentic toolkit",
    run: () => toolsOutput(),
  },
  work: {
    description: "Work experience",
    run: () => workOutput(),
  },
  contact: {
    description: "Contact details",
    run: () => contactOutput(),
  },
  resume: {
    description: "Download resume",
    run: () => "resume.pdf — available on request",
  },
  blog: {
    description: "Latest writing",
    run: () => "blog.md — coming soon",
  },
  clear: {
    description: "Clear the terminal",
    run: () => "__clear__",
  },
};

const commandAliases = {
  "cat about.txt": "about",
  "cat projects.json": "projects",
  "cat tools.md": "tools",
  "cat work.md": "work",
  "cat contact.vcf": "contact",
  "cat resume.pdf": "resume",
  "cat blog.md": "blog",
};

const output = document.getElementById("terminalOutput");
const form = document.getElementById("terminalForm");
const input = document.getElementById("commandInput");
const hint = document.getElementById("autocompleteHint");
const terminalCard = document.querySelector(".terminal-card");
const fullscreenToggle = document.querySelector(".fullscreen-toggle");
const autocompleteAccept = document.querySelector(".autocomplete-accept");
const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");

const aboutLead = document.getElementById("aboutLead");
const aboutHighlights = document.getElementById("aboutHighlights");
const projectsGrid = document.getElementById("projectsGrid");
const toolsLead = document.getElementById("toolsLead");
const toolsSections = document.getElementById("toolsSections");
const workList = document.getElementById("workList");
const contactCard = document.getElementById("contactCard");

function renderSidebar() {
  aboutLead.textContent = data.aboutLead;
  aboutHighlights.innerHTML = data.highlights
    .map((item) => `<li>${item}</li>`)
    .join("");

  projectsGrid.innerHTML = data.projects
    .map(
      (project) => `
      <article class="card">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <p class="meta">${project.stack}</p>
        <div class="card-links">
          <a href="${project.link}" target="_blank" rel="noreferrer">Live</a>
          ${project.repo ? `<a href="${project.repo}" target="_blank" rel="noreferrer">Code</a>` : ""}
        </div>
      </article>
    `
    )
    .join("");

  toolsLead.textContent = data.toolsLead;
  toolsSections.innerHTML = Object.entries(data.tools)
    .map(
      ([title, items]) => `
      <div class="tool-section">
        <h3>${title}</h3>
        <ul>
          ${items.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </div>
    `
    )
    .join("");

  workList.innerHTML = data.work
    .map(
      (item) => `
      <article class="card">
        <h3>${item.company}</h3>
        <p>${item.role} · ${item.dates}</p>
        <p>${item.description}</p>
      </article>
    `
    )
    .join("");

  contactCard.innerHTML = `
    <div><strong>Email</strong><br><a href="mailto:${data.contact.email}">${data.contact.email}</a></div>
    <div><strong>Website</strong><br><a href="${data.contact.website}" target="_blank" rel="noreferrer">${data.contact.website}</a></div>
    <div><strong>LinkedIn</strong><br><a href="${data.contact.linkedin}" target="_blank" rel="noreferrer">${data.contact.linkedin}</a></div>
    <div><strong>GitHub</strong><br><a href="${data.contact.github}" target="_blank" rel="noreferrer">${data.contact.github}</a></div>
    <div><strong>Location</strong><br>${data.contact.location}</div>
  `;
}

const autocompleteList = [
  ...Object.keys(commands),
  ...Object.keys(commandAliases),
];

function setHint(value) {
  hint.textContent = value || "";
}

function setFullscreenState(isOpen) {
  terminalCard.classList.toggle("fullscreen", isOpen);
  document.body.classList.toggle("fullscreen-open", isOpen);
  if (fullscreenToggle) {
    fullscreenToggle.setAttribute("aria-pressed", String(isOpen));
    fullscreenToggle.setAttribute(
      "aria-label",
      isOpen ? "Exit full screen terminal" : "Enter full screen terminal"
    );
    fullscreenToggle.classList.toggle("is-active", isOpen);
  }
}

if (fullscreenToggle) {
  fullscreenToggle.addEventListener("click", () => {
    const isOpen = terminalCard.classList.contains("fullscreen");
    setFullscreenState(!isOpen);
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (!terminalCard.classList.contains("fullscreen")) return;
  setFullscreenState(false);
});

function getSuggestion(value) {
  const trimmed = value.trim();
  if (!trimmed) return "";
  const match = autocompleteList.find((cmd) =>
    cmd.toLowerCase().startsWith(trimmed.toLowerCase())
  );
  return match || "";
}

function acceptAutocomplete() {
  const suggestion = getSuggestion(input.value);
  if (!suggestion) return;
  if (!suggestion.toLowerCase().startsWith(input.value.toLowerCase())) return;
  input.value = suggestion;
  setHint("");
  input.focus();
}

function updateAutocompleteButton() {
  if (!autocompleteAccept) return;
  const hasTyped = input.value.trim().length > 0;
  const suggestion = getSuggestion(input.value);
  const isVisible = hasTyped && suggestion;
  autocompleteAccept.classList.toggle("is-visible", Boolean(isVisible));
}

function appendLine(command, text) {
  if (text === "__clear__") {
    output.innerHTML = "";
    return;
  }

  const formattedText = linkify(text);
  const wrapper = document.createElement("div");
  wrapper.className = "line";
  wrapper.innerHTML = `
    <div class="cmd">$ ${command}</div>
    <div>${formattedText}</div>
  `;
  output.appendChild(wrapper);
  output.scrollTop = output.scrollHeight;
}

function linkify(text) {
  const urlPattern = /(https?:\/\/[^\s)]+)/g;
  return text.replace(urlPattern, (url) => {
    return `<a href="${url}" target="_blank" rel="noreferrer">${url}</a>`;
  });
}

function helpOutput() {
  const entries = Object.entries(commands)
    .map(([cmd, value]) => `${cmd.padEnd(10, " ")} — ${value.description}`)
    .join("\n");

  return `Available commands:\n${entries}\n\nUse: cat about.txt | cat projects.json | cat tools.md | cat work.md | cat contact.vcf`;
}

function aboutOutput() {
  const list = data.highlights.map((item) => `• ${item}`).join("\n");
  return `${data.aboutLead}\n\n${list}`;
}

function projectsOutput() {
  return data.projects
    .map(
      (project, index) =>
        `${index + 1}. ${project.title} — ${project.description} (${project.link})`
    )
    .join("\n");
}

function toolsOutput() {
  const sections = Object.entries(data.tools)
    .map(([title, items]) => `${title}\n${items.map((item) => `- ${item}`).join("\n")}`)
    .join("\n\n");
  return `${data.toolsLead}\n\n${sections}`;
}

function workOutput() {
  return data.work
    .map(
      (item) =>
        `${item.company} — ${item.role} (${item.dates})\n${item.description}`
    )
    .join("\n\n");
}

function contactOutput() {
  return `Email: ${data.contact.email}\nWebsite: ${data.contact.website}\nLinkedIn: ${data.contact.linkedin}\nGitHub: ${data.contact.github}\nLocation: ${data.contact.location}`;
}

function runCommand(raw) {
  const command = raw.trim();
  if (!command) return;

  const mapped = commandAliases[command] || command;
  const base = mapped.split(" ")[0];
  const handler = commands[base];

  if (!handler) {
    appendLine(command, `Command not found: ${command}. Type 'help'.`);
    setHint("");
    return;
  }

  const response = handler.run();
  appendLine(command, response);
  setHint("");

  if (["about", "projects", "tools", "work", "contact"].includes(base)) {
    setActivePanel(base);
  }
}

function setActivePanel(panelId) {
  state.activePanel = panelId;
  tabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.panel === panelId);
  });
  panels.forEach((panel) => {
    panel.classList.toggle("active", panel.id === `panel-${panelId}`);
  });
}

function handleHistoryKey(event) {
  if (!state.history.length) return;

  if (event.key === "ArrowUp") {
    event.preventDefault();
    if (state.historyIndex < 0) {
      state.historyIndex = state.history.length - 1;
    } else if (state.historyIndex > 0) {
      state.historyIndex -= 1;
    }
    input.value = state.history[state.historyIndex];
    setHint(getSuggestion(input.value));
  }

  if (event.key === "ArrowDown") {
    event.preventDefault();
    if (state.historyIndex >= state.history.length - 1) {
      state.historyIndex = state.history.length;
      input.value = "";
      setHint("");
      return;
    }
    state.historyIndex += 1;
    input.value = state.history[state.historyIndex] || "";
    setHint(getSuggestion(input.value));
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const command = input.value.trim();
  if (!command) return;

  state.history.push(command);
  state.historyIndex = state.history.length;
  runCommand(command);
  input.value = "";
  setHint("");
});

input.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    event.preventDefault();
    input.value = "";
    setHint("");
    return;
  }

  if (event.key === "ArrowUp" || event.key === "ArrowDown") {
    handleHistoryKey(event);
    return;
  }

  if (event.key === "ArrowRight") {
    const suggestion = getSuggestion(input.value);
    if (suggestion && suggestion.toLowerCase().startsWith(input.value.toLowerCase())) {
      const caretAtEnd = input.selectionStart === input.value.length;
      if (caretAtEnd) {
        event.preventDefault();
        acceptAutocomplete();
      }
    }
  }

  if (event.key === "Tab") {
    const suggestion = getSuggestion(input.value);
    if (suggestion) {
      event.preventDefault();
      acceptAutocomplete();
    }
  }
});

input.addEventListener("input", () => {
  const suggestion = getSuggestion(input.value);
  setHint(suggestion);
  updateAutocompleteButton();
});

if (autocompleteAccept) {
  autocompleteAccept.addEventListener("click", () => {
    acceptAutocomplete();
    updateAutocompleteButton();
  });
}

updateAutocompleteButton();

document.querySelectorAll("[data-cmd]").forEach((button) => {
  button.addEventListener("click", () => {
    const command = button.dataset.cmd;
    state.history.push(command);
    state.historyIndex = state.history.length;
    runCommand(command);
    input.value = "";
    setHint("");
  });
});

terminalCard.addEventListener("click", () => {
  input.focus();
});

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    setActivePanel(tab.dataset.panel);
  });
});

renderSidebar();

appendLine("help", helpOutput());
appendLine("ls", commands.ls.run());
