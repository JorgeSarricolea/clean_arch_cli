# Clean Architecture CLI

## Overview

The **Clean Architecture CLI** is a command-line tool designed to generate backend projects following the principles of Clean Architecture. It creates a well-structured folder hierarchy and includes basic configuration files to kickstart your development process.

---

## Features

- Generates a project structure based on Clean Architecture principles.
- Includes essential configurations:
  - `server.js` with a basic Express server.
  - `.gitignore` for Node.js projects.
  - `package.json` pre-configured with scripts and dependencies.
- Modular and extensible design for easy maintenance and scalability.

---

## Installation

### Global Installation

To install the CLI globally and use it as a command:

```bash
npm install -g clean-arch-cli
```

### Local Development

If you're working on the CLI locally:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd clean_arch_cli
   ```
2. Link the CLI globally:
   ```bash
   npm link
   ```

---

## Usage

### Generate a New Project

To create a new project, run:

```bash
clean-arch-cli <project-name>
```

Example:

```bash
clean-arch-cli my-backend-project
```

This will generate a folder with the specified project name containing the following structure:

```
src/
├── adapters/
│   ├── api/
│   ├── database/
│       └── orm/
├── application/
│   ├── dtos/
│   ├── services/
│   └── use-cases/
├── domain/
│   ├── entities/
│   ├── repositories/
│   ├── errors/
│   └── value-objects/
├── infrastructure/
│   ├── database/
│   │   ├── daos/
│   │   ├── models/
│   │   └── repositories/
│   ├── config/
│   ├── routes/
│   ├── logger/
│   └── server.js
├── interfaces/
│   ├── controllers/
│   ├── middlewares/
│   ├── presenters/
│   └── validators/
├── shared/
│   ├── utils/
│   ├── constants/
│   └── exceptions/
├── .gitignore
├── README.md
└── package.json
```

---

## Configuration Files

### `server.js`

A minimal Express server with a default route:

```javascript
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Welcome to your Clean Architecture API" });
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log("🚀 Server deployed on http://localhost:" + PORT);
});
```

### `.gitignore`

Includes common exclusions for Node.js projects:

```
node_modules/
.env
logs/
*.log
.DS_Store
.vscode/
.idea/
```

### `package.json`

Pre-configured with basic scripts and dependencies:

- **Start the server**: `npm start`
- **Run the server with file watching**: `npm run dev`

---

## Development

### Run Locally

If you want to test or develop the CLI:

1. Clone the repository and navigate to the project directory.
2. Link the CLI globally:
   ```bash
   npm link
   ```
3. Run the CLI:
   ```bash
   clean-arch-cli <project-name>
   ```

---

## Author

Developed by **[Jorge Sarricolea]**.
Feel free to reach out via [GitHub](https://github.com/JorgeSarricolea) or [email](mailto:jjorgesarricolea18@gmail.com).

---

### Let me know if you'd like to customize any part of this `README.md`! 🎉
