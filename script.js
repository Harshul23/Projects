// Project data - can be automatically generated from projects directory
const projects = [
    {
        id: 'drum-kit',
        title: 'Drum-kit',
        description: 'A simple website which creates different sounds on key Press.',
        tags: ['JavaScript', 'HTML', 'CSS'],
        icon: '<img src="projects/drum-kit/icon.png" alt="Drum-kit">',
        link: 'projects/drum-kit/index.html'
    },
    {
        id: 'To-do-list',
        title: 'To-do-list',
        description: 'A To do list app to add and delete tasks',
        tags: ['JavaScript', 'HTML', 'CSS'],
        icon: '<img src="projects/To-do-list/icon.png" alt="To-do-list">',
        link: 'projects/To-do-list/index.html'
    },
];

// Function to create project card HTML
function createProjectCard(project) {
    return `
        <div class="project-card" onclick="window.location.href='${project.link}'">
            <div class="project-image">
                ${project.image ? `<img src="${project.image}" alt="${project.title}">` : project.icon}
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <a href="${project.link}" class="project-link" onclick="event.stopPropagation()">View Project →</a>
            </div>
        </div>
    `;
}

// Function to load and display projects
function loadProjects() {
    const container = document.getElementById('projects-container');
    
    if (projects.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <h3>No Projects Yet</h3>
                <p>Projects will appear here once you add them to the projects directory.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = projects.map(project => createProjectCard(project)).join('');
}

// Load projects when page loads
document.addEventListener('DOMContentLoaded', loadProjects);
