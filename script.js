// Detect current page context for path resolution
const isInSrcFolder = window.location.pathname.includes('/src/');
const pathPrefix = isInSrcFolder ? '../' : '';

// Project data - can be automatically generated from projects directory
const projects = [
  {
    id: "drum-kit",
    title: "Drum-kit",
    description: "A simple website which creates different sounds on key Press.",
    tags: ["JavaScript", "HTML", "CSS"],
    icon: `<img src="${pathPrefix}projects/drum-kit/icon.png" alt="Drum-kit">`,
    link: `${pathPrefix}projects/drum-kit/index.html`,
    category: "web-apps",
  },
  {
    id: "To-do-list",
    title: "To-do-list",
    description: "A To do list app to add and delete tasks",
    tags: ["JavaScript", "HTML", "CSS"],
    icon: `<img src="${pathPrefix}projects/To-do-list/icon.png" alt="To-do-list">`,
    link: `${pathPrefix}projects/To-do-list/index.html`,
    category: "web-apps",
  },
];

// Dummy projects for animated section on main page
const dummyProjects = [
  {
    title: "Ping Pong Ball",
    description: "Classic paddle and ball arcade built with Canvas API.",
    tags: ["HTML5", "Canvas"],
    category: "games",
  },
  {
    title: "Space Invaders",
    description: "Pixel shooter with incremental difficulty waves.",
    tags: ["JS", "Canvas"],
    category: "games",
  },
  {
    title: "Snake Classic",
    description: "Eat, grow, avoid walls and yourself.",
    tags: ["HTML", "CSS", "JS"],
    category: "games",
  },
  {
    title: "Memory Match",
    description: "Flip cards and match pairs in minimal moves.",
    tags: ["JS", "Logic"],
    category: "games",
  },
  {
    title: "Mini Platformer",
    description: "Run, jump, collect coins across levels.",
    tags: ["Physics", "Canvas"],
    category: "games",
  },
  {
    title: "Puzzle Blocks",
    description: "Arrange falling shapes to clear lines.",
    tags: ["Tetris", "JS"],
    category: "games",
  },
  {
    title: "Tic Tac Toe",
    description: "Play vs friend or simple AI engine.",
    tags: ["AI", "Minimax"],
    category: "games",
  },
  {
    title: "Breakout Arcade",
    description: "Destroy bricks with physics-based ball.",
    tags: ["Canvas", "Physics"],
    category: "games",
  },
  {
    title: "Minesweeper",
    description: "Clear the board without detonating mines.",
    tags: ["Grid", "Logic"],
    category: "games",
  },
];

// Function to create project card HTML
function createProjectCard(project, isClickable = true) {
  const clickHandler = isClickable ? `onclick="window.location.href='${project.link}'"` : '';
  const cursorClass = isClickable ? 'cursor-pointer' : '';
  return `
        <div class="proitm flex flex-col p-4 rounded-xl border border-neutral-200 shadow-sm space-y-2 transition hover:shadow-md ${cursorClass}" 
             data-category="${project.category || (project.tags && project.tags[0] ? project.tags[0].toLowerCase() : "general")}" 
             ${clickHandler}>
            <div class="w-full aspect-video bg-gray-200 rounded-xl flex items-center justify-center text-sm text-neutral-600 overflow-hidden">
                ${project.image ? `<img src="${project.image}" alt="${project.title}" class="object-cover w-full h-full rounded-xl">` : (project.icon || `<div class="text-center">${project.title}</div>`)}
            </div>
            <h2 class="text-base font-semibold">${project.title}</h2>
            <p class="text-sm text-neutral-700">${project.description}</p>
            <div class="langcont flex flex-wrap gap-2">
                ${project.tags.map((tag) => `<span class="lantag px-2 py-1 rounded-md bg-neutral-100 text-xs font-medium">${tag}</span>`).join("")}
            </div>
        </div>
    `;
}

// Function to create animated project card (simpler version for animation)
function createAnimatedProjectCard(project) {
  return `
    <div class="animated-project-card proitm flex flex-col p-4 rounded-xl border border-neutral-200 shadow-sm space-y-2" data-category="${project.category || 'games'}">
      <div class="w-full aspect-video bg-gray-200 rounded-xl flex items-center justify-center text-sm text-neutral-600">
        <div class="text-center">${project.title}</div>
      </div>
      <h2 class="text-base font-semibold">${project.title}</h2>
      <p class="text-sm text-neutral-700">${project.description}</p>
      <div class="langcont flex flex-wrap gap-2">
        ${project.tags.map((tag) => `<span class="lantag px-2 py-1 rounded-md bg-neutral-100 text-xs font-medium">${tag}</span>`).join("")}
      </div>
    </div>
  `;
}

// Function to load and display projects (for projects page)
function loadProjects() {
  const container = document.getElementById("projects-container");
  if (!container) return;

  if (projects.length === 0) {
    container.innerHTML = `
            <div class="empty-state text-center py-12">
                <h3 class="text-xl font-semibold mb-2">No Projects Yet</h3>
                <p class="text-neutral-600">Projects will appear here once you add them to the projects directory.</p>
            </div>
        `;
    return;
  }

  container.innerHTML = projects.map((project) => createProjectCard(project, true)).join("");
}

// Function to load animated projects (for main page) - 3 column layout
function loadAnimatedProjects() {
  const columnsContainer = document.getElementById("animatedProjectsColumns");
  if (!columnsContainer) return;

  // Distribute projects across 3 columns
  const columns = [[], [], []];
  
  // Create enough projects for smooth infinite scrolling (duplicate multiple times)
  const allProjects = [...dummyProjects, ...dummyProjects, ...dummyProjects, ...dummyProjects];
  
  // Distribute projects across columns (stagger them)
  allProjects.forEach((project, index) => {
    const columnIndex = index % 3;
    columns[columnIndex].push(project);
  });

  // Create HTML for 3 columns
  columnsContainer.innerHTML = columns.map((columnProjects, colIndex) => {
    // Duplicate the column content for seamless loop
    const duplicatedProjects = [...columnProjects, ...columnProjects];
    return `
      <div class="animated-projects-column">
        <div class="animated-projects-column-track">
          ${duplicatedProjects.map((project) => createAnimatedProjectCard(project)).join("")}
        </div>
      </div>
    `;
  }).join("");
}

// Search Modal Functionality
(function initSearchModal() {
  const modal = document.getElementById("searchModal");
  const backdrop = document.getElementById("searchModalBackdrop");
  const closeBtn = document.getElementById("searchModalClose");
  const input = document.getElementById("searchModalInput");
  const results = document.getElementById("searchModalResults");
  let selectedIndex = -1;
  let filteredProjects = [];

  function openModal() {
    if (!modal) return;
    modal.classList.remove("hidden");
    if (input) {
      input.focus();
      input.value = "";
    }
    selectedIndex = -1;
    renderResults(projects);
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.add("hidden");
    if (input) input.value = "";
    selectedIndex = -1;
    filteredProjects = [];
  }

  function renderResults(projectsToShow) {
    if (!results) return;
    filteredProjects = projectsToShow;

    if (projectsToShow.length === 0) {
      results.innerHTML = `
        <div class="search-modal-empty p-8 text-center text-neutral-500">
          <p>No projects found</p>
        </div>
      `;
      return;
    }

    results.innerHTML = projectsToShow
      .map(
        (project, index) => `
      <div class="search-modal-item ${index === selectedIndex ? "selected" : ""}" 
           data-index="${index}" 
           data-link="${project.link}">
        <div class="search-modal-item-content">
          <h3 class="search-modal-item-title">${project.title}</h3>
          <p class="search-modal-item-desc">${project.description}</p>
          <div class="search-modal-item-tags">
            ${project.tags.map((tag) => `<span class="search-modal-tag">${tag}</span>`).join("")}
          </div>
        </div>
      </div>
    `
      )
      .join("");

    // Add click handlers
    results.querySelectorAll(".search-modal-item").forEach((item) => {
      item.addEventListener("click", () => {
        const link = item.dataset.link;
        if (link) {
          window.location.href = link;
        }
      });
    });
  }

  function filterProjects(query) {
    if (!query.trim()) {
      renderResults(projects);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const filtered = projects.filter(
      (project) =>
        project.title.toLowerCase().includes(lowerQuery) ||
        project.description.toLowerCase().includes(lowerQuery) ||
        project.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
    );

    renderResults(filtered);
  }

  // Keyboard shortcuts
  document.addEventListener("keydown", (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      if (modal && modal.classList.contains("hidden")) {
        openModal();
      } else {
        closeModal();
      }
    }

    // Handle keyboard navigation in modal
    if (modal && !modal.classList.contains("hidden")) {
      if (e.key === "Escape") {
        closeModal();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        selectedIndex = Math.min(selectedIndex + 1, filteredProjects.length - 1);
        renderResults(filteredProjects);
        updateScrollPosition();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        selectedIndex = Math.max(selectedIndex - 1, -1);
        renderResults(filteredProjects);
        updateScrollPosition();
      } else if (e.key === "Enter" && selectedIndex >= 0 && filteredProjects[selectedIndex]) {
        e.preventDefault();
        window.location.href = filteredProjects[selectedIndex].link;
      }
    }
  });

  function updateScrollPosition() {
    const selectedItem = results?.querySelector(`[data-index="${selectedIndex}"]`);
    if (selectedItem) {
      selectedItem.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
  }

  // Event listeners
  if (backdrop) {
    backdrop.addEventListener("click", closeModal);
  }
  if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
  }
  if (input) {
    input.addEventListener("input", (e) => {
      filterProjects(e.target.value);
      selectedIndex = -1;
    });
  }
})();

// CTA Button Navigation
document.addEventListener("DOMContentLoaded", () => {
  const browseBtn = document.getElementById("browseProjectsBtn");
  const addYoursBtn = document.getElementById("addYoursBtn");

  if (browseBtn) {
    browseBtn.addEventListener("click", () => {
      window.location.href = "projects.html";
    });
  }

  if (addYoursBtn) {
    addYoursBtn.addEventListener("click", () => {
      window.location.href = "contribute.html";
    });
  }
});

// Theme Toggle
(function initThemeToggle() {
  const toggleBtn = document.getElementById("themeToggle");
  if (!toggleBtn) return;

  const root = document.documentElement;
  function setTheme(t) {
    root.dataset.theme = t;
    toggleBtn.innerHTML = t === "dark" ? '<i class="bi bi-moon"></i>' : '<i class="bi bi-sun"></i>';
  }
  const stored = localStorage.getItem("theme") || "light";
  setTheme(stored);
  toggleBtn.addEventListener("click", () => {
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
  });
})();

// Load projects when page loads
document.addEventListener("DOMContentLoaded", () => {
  loadProjects();
  loadAnimatedProjects();
});
