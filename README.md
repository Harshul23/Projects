# Projects

A portfolio website to showcase all my coding projects throughout my college journey.

## About

This repository hosts a simple portfolio website that displays my coding projects including games, calculators, to-do apps, and other small projects. The website automatically showcases projects that are uploaded to this repository.

## Structure

The repository is organized as follows:

```
Projects/
├── index.html          # Main portfolio page
├── css/                # Stylesheets
├── js/                 # JavaScript files
└── projects/           # Directory containing individual projects
    ├── project1/
    │   ├── config.json # Project metadata
    │   └── ...         # Project files
    └── project2/
        ├── config.json
        └── ...
```

## Adding a New Project

To add a new project to the portfolio:

1. Create a new folder in the `projects/` directory with your project name
2. Add all your project files to this folder
3. Create a `config.json` file with the following format:

```json
{
  "title": "Project Name",
  "description": "Brief description of your project",
  "screenshot": "screenshot.png",
  "demoUrl": "https://example.com/demo",
  "tags": ["tag1", "tag2", "tag3"]
}
```

4. Push your changes to the repository

The website will automatically detect and display your new project!

## Local Development

To run the website locally:

1. Clone this repository
2. Open `index.html` in your web browser
3. For local server (recommended):
   ```bash
   # Using Python 3 (serves on port 8000)
   python -m http.server 8000
   
   # Or using Node.js (specify port with -p flag)
   npx serve -p 8000
   ```
4. Navigate to `http://localhost:8000` in your browser

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)

## License

This project is open source and available for educational purposes.