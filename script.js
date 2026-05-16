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
    "I'm the sole engineer at an AI startup, shipping the entire product suite to real users. I also build side projects for things I care about.",
  highlights: [
    "Across the stack: frontend, backend, infrastructure, and production ops.",
    "Deep in RAG, AI agents, and multi-tenant systems.",
    "AI-native workflow with Claude Code and Codex as daily drivers.",
  ],
  work: [
    {
      company: "Supertube",
      companyUrl: "https://www.linkedin.com/company/supertubeassociates",
      role: "AI Solutions Engineer",
      dates: "Jan 2025 – Present",
      description:
        "Sole developer with full technical ownership of the entire product suite. I own architecture, auth, admin dashboards, document ingestion pipelines, CI/CD, Azure deployments, VPS infrastructure, and production operations across 10+ repositories. Scope spans internal products and client-facing AI work.",
    },
  ],
  tools: {
    "Agentic Coding": [
      {
        name: "Cursor",
        description:
          "My introduction to AI-assisted coding; now used as a clean IDE with great tab completion.",
        modelOfChoice: "Opus 4.7, Composer-1",
      },
      {
        name: "Opencode",
        description:
          "Open-source with a strong community—easy to tweak, extend with plugins, and make your own.",
        modelOfChoice: "Opus 4.7, GLM 4.7",
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
        modelOfChoice: "Opus 4.7",
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
      summary:
        "A no-code SaaS platform that lets businesses create and deploy AI chatbots on their websites in minutes. Users provide a website URL, the platform scrapes and indexes the content as a knowledge base, and generates a customisable chat widget they can embed. Includes branding customisation, document uploads, a 7-day free trial, and billing via PayFast.",
      problem:
        "Small businesses want AI chatbots to handle customer queries and capture leads, but existing solutions are too expensive or too technical to set up.",
      impact:
        "Gives small businesses access to AI-powered customer support without needing any technical knowledge. A business can go from signup to live chatbot on their site in under 5 minutes.",
      stack: "Next.js, TypeScript, OpenAI API, Supabase, PostgreSQL, Vercel, PayFast",
      link: "https://chatbotz.co.za",
      repo: "",
    },
    {
      title: "RLCS SSA Stats Hub",
      summary:
        "A Rocket League esports statistics platform for the South African scene, built in collaboration with GreybeardRL, a well-known caster, tournament organiser, and content creator in the local community. Tracks over 31,000 match records, 379 players, and 190 rosters across multiple seasons and event formats. Features player career profiles, roster histories, event brackets, standings, and head-to-head comparisons.",
      problem:
        "As a competitive Rocket League player who loves stats and analysis, I noticed there was no centralised stats platform for the SSA region. Match data was scattered across spreadsheets with no way for casters, analysts, or players to easily access it. The detailed historical data for the last few years of RLCS in SSA simply didn't exist in one place. A first-of-its-kind project for the region.",
      impact:
        "Now used by casters and analysts as a reference tool during live broadcasts and for event preparation. Became the go-to source for South African Rocket League esports data.",
      stack: "TypeScript, Bun, React, PostgreSQL, Docker, Railway, Vite",
      link: "https://rlesport.gg/",
      repo: "https://github.com/danishx99/rlcs-stats",
    },
    {
      title: "Tube — AI School Chatbot Platform",
      summary:
        "A multi-tenant AI chatbot platform used by over 10 schools in the Western Cape. Parents interact primarily over WhatsApp, allowing ease-of-use in a familiar environment. Each school's bot is grounded in their own documents, calendars, and policies using RAG and agentic tool use. Includes an admin dashboard where schools manage their knowledge base and content, an analytics layer that surfaces knowledge gaps (questions parents ask that the bot can't answer), and automated email reports on chat activity.",
      problem:
        "Schools were overwhelmed by repetitive parent queries, and parents had no easy way to get quick, accurate answers outside of office hours. This project is a time-saver for both schools and parents.",
      impact:
        "Used daily by parents across 10+ schools. Gives schools visibility into what information parents are actually looking for, and reduces the volume of routine queries hitting admin staff.",
      stack: "TypeScript, Node.js, React, PostgreSQL, OpenAI API, Twilio, Azure, Docker",
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
    run: () => {
      const link = document.createElement("a");
      link.href = "Danish_Saleem_CV.pdf";
      link.download = "Danish_Saleem_CV.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return "Downloading Danish_Saleem_CV.pdf...\nDirect link: https://danishsaleem.dev/Danish_Saleem_CV.pdf";
    },
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
      <article class="card project-card">
        <h3>${project.title}</h3>
        <p>${project.summary}</p>
        <details class="project-details">
          <summary>Show problem &amp; impact</summary>
          <p class="project-section"><span class="project-label">Problem:</span> ${project.problem}</p>
          <p class="project-section"><span class="project-label">Impact:</span> ${project.impact}</p>
        </details>
        <p class="meta">${project.stack}</p>
        <div class="card-links">
          <a class="card-link card-link--globe" href="${project.link}" target="_blank" rel="noreferrer" aria-label="Live site">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M2 12h20"></path><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
          </a>
          ${project.repo ? `<a class="card-link card-link--gh" href="${project.repo}" target="_blank" rel="noreferrer" aria-label="Source code on GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18.92-.26 1.91-.39 2.89-.39.98 0 1.97.13 2.89.39 2.21-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.4-5.27 5.69.41.36.77 1.06.77 2.14v3.17c0 .31.21.68.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z"></path></svg>
          </a>` : ""}
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
        `${index + 1}. ${project.title}\n   ${project.summary}\n\n   Problem: ${project.problem}\n\n   Impact: ${project.impact}\n\n   Stack: ${project.stack}\n   Link: ${project.link}${project.repo ? `\n   Repo: ${project.repo}` : ""}`
    )
    .join("\n\n");
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
