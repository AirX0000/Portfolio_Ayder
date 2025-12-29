/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter', 'sans-serif'], // We'll need to load Inter or use system fonts for now
          cyber: ['Orbitron', 'sans-serif'] // For headers later
        },
        colors: {
            primary: "#0ea5e9", // Sky 500
            secondary: "#6366f1", // Indigo 500
            dark: "#0f172a", // Slate 900
            'dark-lighter': "#1e293b", // Slate 800
            neon: "#00f3ff",
        }
      },
    },
    plugins: [],
  }
