# My Coding Projects Portfolio 🚀

A simple, clean portfolio website to showcase all my coding projects from my college journey. This portfolio makes it easy to display games, applications, and tools I've built.

## 🌟 Features

- **Simple & Clean Design**: Modern, responsive interface that works on all devices
- **Easy to Add Projects**: Just upload your project code and update a simple configuration
- **Example Projects Included**: Calculator, To-Do App, and Snake Game
- **No Build Step Required**: Pure HTML/CSS/JavaScript - just open in a browser!

## 🚀 Quick Start

1. **View the Portfolio**: Open `index.html` in your web browser
2. **Browse Projects**: Click on any project card to view the project
3. **Add Your Own Projects**: Follow the instructions below

## 📁 Project Structure

```
Projects/
├── index.html          # Main portfolio page
├── styles.css          # Portfolio styling
├── script.js           # Portfolio functionality
├── projects/           # Directory containing all projects
│   ├── calculator/
│   │   └── index.html
│   ├── todo-app/
│   │   └── index.html
│   └── snake-game/
│       └── index.html
└── README.md
```

## ➕ How to Add a New Project

Adding a new project is simple! Follow these steps:

### Step 1: Create Your Project Folder

Create a new folder in the `projects/` directory with your project name:

```bash
mkdir projects/my-new-project
```

### Step 2: Add Your Project Files

Place your project files in the folder. Your project should have an `index.html` file as the entry point:

```
projects/my-new-project/
├── index.html
├── styles.css (optional)
├── script.js (optional)
└── ... (other files)
```

### Step 3: Update the Portfolio

Open `script.js` and add your project to the `projects` array:

```javascript
{
    id: 'my-new-project',
    title: 'My New Project',
    description: 'A brief description of what your project does.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    icon: '🎮', // Any emoji
    link: 'projects/my-new-project/index.html'
}
```

### Step 4: View Your Portfolio

Open `index.html` in your browser, and your new project will appear on the homepage!

## 🎨 Customization

### Change Colors

Edit the gradient colors in `styles.css`:

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Update Content

- **Header**: Edit the `<header>` section in `index.html`
- **Intro**: Modify the `.intro` section in `index.html`
- **Footer**: Update the `<footer>` in `index.html`

## 📝 Example Projects Included

1. **Calculator** 🔢
   - Basic arithmetic operations
   - Keyboard support
   - Clean, modern interface

2. **To-Do App** ✅
   - Add, complete, and delete tasks
   - Filter tasks (All, Active, Completed)
   - Local storage persistence

3. **Snake Game** 🐍
   - Classic snake gameplay
   - Score tracking
   - High score persistence

## 🌐 Deployment

### GitHub Pages

1. Go to your repository settings
2. Navigate to "Pages" section
3. Select the main branch as source
4. Your portfolio will be live at `https://yourusername.github.io/Projects/`

### Other Hosting

Simply upload all files to any web hosting service. No build step or server required!

## 💡 Tips

- Keep your project folders organized
- Use descriptive project names
- Add screenshots or images to make projects more appealing
- Test each project individually before adding to the portfolio
- Add a "Back to Projects" link in each project for easy navigation

## 🤝 Contributing

Feel free to customize this portfolio to match your style and add your own projects!

## 📄 License

Free to use and modify for your personal portfolio.

---

**Happy Coding! 🎉**