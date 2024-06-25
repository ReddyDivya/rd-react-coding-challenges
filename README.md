# My React App

This project was bootstrapped with [Vite](https://vitejs.dev/) and [React](https://reactjs.org/).

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14.0.0 or later)
- npm (usually comes with Node.js)

## Getting Started

Follow these instructions to set up and run the project on your local machine.

## Installation

### 1. Installation of React

### Step 1: Create the Vite Project

```
npm create vite@latest rd-react-coding-challenges
```

### Step 2: Navigate to Your Project Directory

```
cd rd-react-coding-challenges
```

### Step 3: Install Dependencies

Install the required dependencies by running:

```
npm install
```

### Step 4: Run the Development Server

Start the development server with:

```
npm run dev
```

### Step 5: Open the Project in Your Browser

```
  VITE v2.5.10  ready in 300 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
```

### 2. Installation of Tailwind CSS

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Configure your template paths

### tailwind.config.js

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### postcss.config.js

Create a postcss.config.js file at the root of your project if it doesn't already exist and include the following configuration:

```
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### src/index.css

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 3. Install React Router Dom

```
npm install react-router-dom
```

### Project Structure

Your project structure should look something like this:

```
my-react-app
├── node_modules
├── public
│   └── vite.svg
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

### Customizing Your Project

You can start customizing your project by editing the files in the src directory:

`App.jsx`: Main React component.
`main.jsx`: Entry point for the React application.
`index.css and App.css`: CSS files for styling your components.
