# To-Do List Application

A modern, responsive todo list application built with React and Tailwind CSS. This application provides an intuitive interface for managing daily tasks with persistent local storage.

## 🌐 Live Demo

🔗 **[Visit ToDoList App](https://imronrsya.github.io/To-Do-List/)**

## Features

- **Task Management**: Add, complete, and delete tasks with ease
- **Smart Filtering**: View all tasks, active tasks, or completed tasks
- **Real-time Statistics**: Track total, active, and completed task counts
- **Persistent Storage**: Automatic data persistence using browser localStorage
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean and intuitive user interface with smooth animations
- **Batch Operations**: Clear all completed tasks at once

## Technology Stack

- **Frontend**: React 18 with functional components and hooks
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS for utility-first styling approach
- **Data Storage**: Browser localStorage for client-side persistence
- **Development**: Hot module replacement and fast refresh during development

## Prerequisites

Before running this application, ensure you have the following installed:

- Node.js (version 16.0 or higher)
- npm (comes with Node.js) or yarn package manager

## Installation

1. Clone the repository or download the source code:
   ```bash
   git clone <repository-url>
   cd ToDoList
   ```

2. Install project dependencies:
   ```bash
   npm install
   ```

## Development

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000` (or the next available port).

## Production Build

To create an optimized production build:

```bash
npm run build
```

The built files will be generated in the `dist/` directory and can be deployed to any static hosting service.

To preview the production build locally:

```bash
npm run preview
```

## 🚀 GitHub Pages Deployment

### Manual Deployment
```bash
npm run deploy
```

### Automatic Deployment
Every push to `main` branch will automatically trigger GitHub Actions to build and deploy.

### GitHub Pages Settings
Make sure your GitHub repository settings are configured as follows:
1. Go to repository **Settings** → **Pages**
2. **Source**: Deploy from a branch
3. **Branch**: `gh-pages` / (root)
4. Click **Save**

### Accessing the App
Your app will be available at: `https://imronrsya.github.io/To-Do-List/`

### Troubleshooting
If the site doesn't load:
1. Check if GitHub Pages is enabled in repository settings
2. Ensure the branch is set to `gh-pages`
3. Wait 5-10 minutes after deployment for changes to reflect
4. Check browser console for any 404 errors on assets

## Project Structure

```
src/
├── components/
│   ├── AddTodo.jsx      # Form component for adding new tasks
│   ├── TodoItem.jsx     # Individual task item component
│   └── FilterBar.jsx    # Filter controls component
├── App.jsx              # Main application component
├── main.jsx             # Application entry point
├── index.css            # Tailwind CSS imports
└── styles.css           # Custom component styles
```

## Key Components

### App.jsx
The main application component that manages global state, localStorage integration, and renders the core layout.

### AddTodo.jsx
A controlled form component for adding new tasks with input validation and submission handling.

### TodoItem.jsx
Displays individual tasks with completion toggle, deletion functionality, and creation timestamp.

### FilterBar.jsx
Provides filtering controls to switch between different task views (All, Active, Completed).

## Data Management

The application uses browser localStorage to persist task data across sessions. Each task contains:

- `id`: Unique timestamp-based identifier
- `text`: Task description
- `completed`: Boolean completion status
- `createdAt`: ISO timestamp of task creation

## Browser Compatibility

This application is compatible with all modern browsers that support:
- ES6+ JavaScript features
- CSS Grid and Flexbox
- localStorage API

## Performance Considerations

- Components use React hooks for optimal re-rendering
- localStorage operations are wrapped in try-catch blocks for error handling
- CSS transitions provide smooth user interactions
- Vite ensures fast development builds and optimized production bundles

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For questions or suggestions, please open an issue in the repository.

---

Built with ❤️ using React and Tailwind CSS
