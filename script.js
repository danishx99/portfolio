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
    "I build products end-to-end, using agentic coding to speed up delivery while keeping quality high.",
  highlights: [
    "End-to-end product delivery, from prototype to production.",
    "Fast iteration without losing reliability.",
    "Hands-on across build, ship, and maintain.",
  ],
  work: [
    {
      company: "Supertube",
      companyUrl: "https://www.linkedin.com/company/supertubeassociates",
      role: "AI Engineer",
      dates: "Jan 2025 – Present",
      description:
        "Led technical delivery of custom products, from AI assistants integrated with MS Teams and WhatsApp to full web solutions—owning execution from prototype to production.",
    },
  ],
  tools: {
    "Agentic Coding": [
      {
        name: "Cursor",
        description:
          "My introduction to AI-assisted coding; now used as a clean IDE with great tab completion.",
        modelOfChoice: "Opus 4.6, Composer-1",
      },
      {
        name: "Opencode",
        description:
          "Open-source with a strong community—easy to tweak, extend with plugins, and make your own.",
        modelOfChoice: "Opus 4.6, GLM 4.7",
      },
      {
        name: "Codex",
        description:
          "Feels like a senior engineer at your fingertips: slower and steady, but reliable for hard problems.",
        modelOfChoice: "GPT 5.3-codex",
      },
      {
        name: "Claude Code",
        description:
          "Newest addition to my workflow for fast agentic coding with strong code understanding.",
        modelOfChoice: "Opus 4.6",
      },
    ],
    "Dev Tooling": [
      {
        name: "WSL",
        description: "Primary Linux dev environment on Windows.",
      },
      {
        name: "Tailscale",
        description: "Secure remote access for mobile development.",
      },
      {
        name: "Termius",
        description: "Mobile SSH client for working on the go.",
      },
      {
        name: "fish",
        description: "My daily shell with great command autocomplete.",
      },
      {
        name: "tmux",
        description: "Session management and fast pane workflows.",
      },
      {
        name: "Git",
        description: "Clean history and collaborative workflows.",
      },
      {
        name: "Docker",
        description: "Repeatable environments across dev and prod.",
      },
      {
        name: "Bun",
        description: "Fast runtime and package manager.",
      },
    ],
    Web: [
      {
        name: "React",
        description: "Component-driven UI with reusable patterns.",
      },
      {
        name: "Next.js",
        description: "Full-stack React with routing and SSR.",
      },
      {
        name: "Node.js",
        description: "Server runtimes and API services.",
      },
      {
        name: "Express",
        description: "Lightweight APIs and middleware.",
      },
      {
        name: "TypeScript",
        description: "Type-safe codebases and clearer contracts.",
      },
      {
        name: "JavaScript",
        description: "Core language for web app logic.",
      },
      {
        name: "HTML/CSS",
        description: "Semantic layouts and responsive styles.",
      },
      {
        name: "Tailwind CSS",
        description: "Utility-first styling for fast UI work.",
      },
      {
        name: "PostgreSQL",
        description: "Relational data modeling and queries.",
      },
      {
        name: "Vitest",
        description: "Fast unit testing for web code.",
      },
    ],
    "Delivery / Ops": [
      {
        name: "Cloud platforms",
        description: "Azure and AWS for production deployments.",
      },
      {
        name: "Railway",
        description: "Simple app and database deployments with fast iteration.",
      },
      {
        name: "Vercel",
        description: "Fast frontend deploys and previews.",
      },
      {
        name: "DigitalOcean",
        description: "Lean infrastructure for smaller deployments.",
      },
      {
        name: "Cloudflare",
        description: "DNS, edge caching, and security at the edge.",
      },
      {
        name: "Sentry",
        description: "Error monitoring and issue triage.",
      },
      {
        name: "Grafana",
        description: "Dashboards for metrics and uptime.",
      },
    ],
  },
  contact: {
    email: "saleemdf99@gmail.com",
    linkedin: "https://www.linkedin.com/in/danishsaleemx/",
    github: "https://github.com/danishx99",
  },
  projects: [
    {
      title: "Chatbotz",
      description: "A no-code, simple-to-setup support chatbot for your website.",
      stack: "SaaS product",
      link: "https://chatbotz.co.za",
      repo: "",
    },
    {
      title: "RLCS SSA Database",
      description:
        "A central dashboard and database for RLCS SSA stats, teams, players, and results.",
      stack: "Esports data platform",
      link: "https://rlesport.gg/",
      repo: "",
    },
    {
      title: "Tube",
      description:
        "The solution for school-to-parent communication solved in WhatsApp.",
      stack: "Product platform",
      link: "https://thetube.ai",
      repo: "",
    },
    // {
    //   title: "Campus Safety App",
    //   description:
    //     "Real-time campus safety platform with alerts, reporting, and live updates.",
    //   stack: "Full-stack web app",
    //   link: "https://campus-safety.azurewebsites.net/",
    //   repo: "https://github.com/danishx99/campus-safety-app",
    // },
    // {
    //   title: "Commongrounds Residential Management",
    //   description:
    //     "Property management platform for sectional title bodies corporate.",
    //   stack: "Responsive web platform",
    //   link: "https://common-grounds-app.onrender.com",
    //   repo: "https://github.com/danishx99/common-grounds-app",
    // },
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
  whoami: {
    description: "Quick bio + highlights",
    run: () => aboutOutput(),
  },
  projects: {
    description: "Recent projects",
    run: () => projectsOutput(),
  },
  tools: {
    description: "The software I use to build",
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
    run: () => "resume.pdf — available on request.\nPlease feel free to reach out.",
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
  "cat about.txt": "whoami",
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
const toolsTabs = document.getElementById("toolsTabs");
const toolsPanels = document.getElementById("toolsPanels");
const workList = document.getElementById("workList");
const contactCard = document.getElementById("contactCard");

function toSlug(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function setActiveToolTab(target) {
  if (!toolsTabs || !toolsPanels) return;
  toolsTabs.querySelectorAll(".tool-tab").forEach((tab) => {
    const isActive = tab.dataset.tool === target;
    tab.classList.toggle("active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });
  toolsPanels.querySelectorAll(".tool-panel").forEach((panel) => {
    panel.classList.toggle("active", panel.id === `tool-${target}`);
  });
}

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

  if (toolsTabs && toolsPanels) {
    const toolEntries = Object.entries(data.tools).map(([title, items]) => ({
      title,
      items,
      slug: toSlug(title),
    }));

    toolsTabs.innerHTML = toolEntries
      .map(
        (entry, index) => `
        <button
          class="tool-tab ${index === 0 ? "active" : ""}"
          type="button"
          role="tab"
          aria-selected="${index === 0 ? "true" : "false"}"
          aria-controls="tool-${entry.slug}"
          data-tool="${entry.slug}"
        >
          ${entry.title}
        </button>
      `
      )
      .join("");

    toolsPanels.innerHTML = toolEntries
      .map(
        (entry, index) => `
        <section
          class="tool-panel ${index === 0 ? "active" : ""}"
          id="tool-${entry.slug}"
          role="tabpanel"
        >
          <ul class="tool-list">
            ${entry.items
              .map(
                (item) => `
              <li>
                <span class="tool-name">${item.name}</span>
                <span class="tool-desc">${item.description}</span>
                ${item.modelOfChoice ? `<span class="tool-model">Model of choice: ${item.modelOfChoice}</span>` : ""}
              </li>
            `
              )
              .join("")}
          </ul>
        </section>
      `
      )
      .join("");

    const toolButtons = toolsTabs.querySelectorAll(".tool-tab");
    toolButtons.forEach((button) => {
      button.addEventListener("click", () => {
        setActiveToolTab(button.dataset.tool);
      });
    });
  }

  workList.innerHTML = data.work
    .map(
      (item) => `
      <article class="card">
        <h3>
          ${
            item.companyUrl
              ? `<a class="work-company-link" href="${item.companyUrl}" target="_blank" rel="noreferrer">${item.company}</a>`
              : item.company
          }
        </h3>
        <p>${item.role} · ${item.dates}</p>
        <p>${item.description}</p>
      </article>
    `
    )
    .join("");

  contactCard.innerHTML = `
    <div><strong>Email</strong><br><a href="mailto:${data.contact.email}">${data.contact.email}</a></div>
    <div><strong>LinkedIn</strong><br><a href="${data.contact.linkedin}" target="_blank" rel="noreferrer">${data.contact.linkedin}</a></div>
    <div><strong>GitHub</strong><br><a href="${data.contact.github}" target="_blank" rel="noreferrer">${data.contact.github}</a></div>
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
    <div class="cmd">&gt; ${command}</div>
    <div>${formattedText}</div>
  `;
  output.appendChild(wrapper);
  output.scrollTop = output.scrollHeight;
}

function appendBanner(text, note) {
  const wrapper = document.createElement("div");
  wrapper.className = "line banner";
  wrapper.innerHTML = `
    <pre class="banner-text">${text}</pre>
    <div class="banner-note">${note}</div>
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
    .map(
      ([title, items]) =>
        `${title}\n${items
          .map(
            (item) =>
              `- ${item.name}: ${item.description}${
                item.modelOfChoice ? ` (Model of choice: ${item.modelOfChoice})` : ""
              }`
          )
          .join("\n")}`
    )
    .join("\n\n");
  return sections;
}

function workOutput() {
  return data.work
    .map(
      (item) =>
        `${item.company} — ${item.role} (${item.dates})\n${item.description}${
          item.companyUrl ? `\n${item.companyUrl}` : ""
        }`
    )
    .join("\n\n");
}

function contactOutput() {
  return `Email: ${data.contact.email}\nLinkedIn: ${data.contact.linkedin}\nGitHub: ${data.contact.github}`;
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

  if (["whoami", "projects", "tools", "work", "contact"].includes(base)) {
    setActivePanel(base === "whoami" ? "about" : base);
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
    event.preventDefault();
    const suggestion = getSuggestion(input.value);
    if (suggestion) {
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

appendBanner(
  String.raw`$$$$$$$\                      $$\           $$\     $$\               $$$$$$$\                       $$\      $$$$$$\           $$\ $$\           
$$  __$$\                     \__|          $$ |    $  |              $$  __$$\                      $$ |    $$  __$$\          $$ |\__|          
$$ |  $$ | $$$$$$\  $$$$$$$\  $$\  $$$$$$$\ $$$$$$$\\_/$$$$$$$\       $$ |  $$ | $$$$$$\   $$$$$$\ $$$$$$\   $$ /  \__|$$$$$$\  $$ |$$\  $$$$$$\  
$$ |  $$ | \____$$\ $$  __$$\ $$ |$$  _____|$$  __$$\ $$  _____|      $$$$$$$  |$$  __$$\ $$  __$$\\_$$  _|  $$$$\    $$  __$$\ $$ |$$ |$$  __$$\ 
$$ |  $$ | $$$$$$$ |$$ |  $$ |$$ |\$$$$$$\  $$ |  $$ |\$$$$$$\        $$  ____/ $$ /  $$ |$$ |  \__| $$ |    $$  _|   $$ /  $$ |$$ |$$ |$$ /  $$ |
$$ |  $$ |$$  __$$ |$$ |  $$ |$$ | \____$$\ $$ |  $$ | \____$$\       $$ |      $$ |  $$ |$$ |       $$ |$$\ $$ |     $$ |  $$ |$$ |$$ |$$ |  $$ |
$$$$$$$  |\$$$$$$$ |$$ |  $$ |$$ |$$$$$$$  |$$ |  $$ |$$$$$$$  |      $$ |      \$$$$$$  |$$ |       \$$$$  |$$ |     \$$$$$$  |$$ |$$ |\$$$$$$  |
\_______/  \_______|\__|  \__|\__|\_______/ \__|  \__|\_______/       \__|       \______/ \__|        \____/ \__|      \______/ \__|\__| \______/`,
  "Type help to get started"
);
