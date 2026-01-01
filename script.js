const state = {
  history: [],
  historyIndex: -1,
  activePanel: "about",
};

const data = {
  name: "Danish Saleem",
  role: "AI/Software Engineer",
  tagline: "AI/Software Engineer building with agentic dev tools, carefully and intentionally.",
  aboutLead:
    "AI/Software Engineer and recent Computer Science graduate from the University of the Witwatersrand. I design AI-powered solutions with a focus on RAG systems, LLMs, and prompt engineering, while delivering user-centric applications.",
  highlights: [
    "Full-stack foundations: React, Next.js, Node.js, PostgreSQL, MongoDB.",
    "Vector search with Pinecone and Qdrant for production RAG systems.",
    "Careful use of agentic tooling with reviewable, auditable outputs.",
  ],
  toolsLead:
    "Agentic tools are part of the craft. I keep them curated, controlled, and documented.",
  tools: [
    "Codex CLI for scoped, auditable automation",
    "LLM-assisted refactors with safety rails",
    "Prompt + eval loops for structured iteration",
    "Local-first workflows with versioned outputs",
  ],
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
  projects: {
    description: "Recent projects",
    run: () => projectsOutput(),
  },
  tools: {
    description: "Agentic toolkit",
    run: () => toolsOutput(),
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
  "cat contact.vcf": "contact",
  "cat resume.pdf": "resume",
  "cat blog.md": "blog",
};

const output = document.getElementById("terminalOutput");
const form = document.getElementById("terminalForm");
const input = document.getElementById("commandInput");
const hint = document.getElementById("autocompleteHint");
const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");

const aboutLead = document.getElementById("aboutLead");
const aboutHighlights = document.getElementById("aboutHighlights");
const projectsGrid = document.getElementById("projectsGrid");
const toolsLead = document.getElementById("toolsLead");
const toolsList = document.getElementById("toolsList");
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
  toolsList.innerHTML = data.tools.map((item) => `<li>${item}</li>`).join("");

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

function getSuggestion(value) {
  const trimmed = value.trim();
  if (!trimmed) return "";
  const match = autocompleteList.find((cmd) =>
    cmd.toLowerCase().startsWith(trimmed.toLowerCase())
  );
  return match || "";
}

function appendLine(command, text) {
  if (text === "__clear__") {
    output.innerHTML = "";
    return;
  }

  const wrapper = document.createElement("div");
  wrapper.className = "line";
  wrapper.innerHTML = `
    <div class="cmd">$ ${command}</div>
    <div>${text}</div>
  `;
  output.appendChild(wrapper);
  output.scrollTop = output.scrollHeight;
}

function helpOutput() {
  const entries = Object.entries(commands)
    .map(([cmd, value]) => `${cmd.padEnd(10, " ")} — ${value.description}`)
    .join("\n");

  return `Available commands:\n${entries}\n\nUse: cat about.txt | cat projects.json | cat tools.md | cat contact.vcf`;
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
  const list = data.tools.map((item) => `• ${item}`).join("\n");
  return `${data.toolsLead}\n\n${list}`;
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

  if (["about", "projects", "tools", "contact"].includes(base)) {
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
        input.value = suggestion;
        setHint("");
      }
    }
  }

  if (event.key === "Tab") {
    const suggestion = getSuggestion(input.value);
    if (suggestion) {
      event.preventDefault();
      input.value = suggestion;
      setHint("");
    }
  }
});

input.addEventListener("input", () => {
  const suggestion = getSuggestion(input.value);
  setHint(suggestion);
});

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

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    setActivePanel(tab.dataset.panel);
  });
});

renderSidebar();

appendLine("help", helpOutput());
appendLine("ls", commands.ls.run());
