/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ct1: "rgba(var(--ct1))",
        ct2: "rgba(var(--ct2))",
        bt1: "rgba(var(--bt1))",
        bt2: "rgba(var(--bt2))",
        bt3: "rgba(var(--bt3))",
        bt4: "rgba(var(--bt4))",
        bg1: "rgba(var(--bg1))",
        tx1: "rgba(var(--tx1))",

        primary: "rgba(var(--primary))",
        primarylight: "rgba(var(--primarylight))",
        secondary: "rgba(var(--secondary))",
        bgcolor: "rgba(var(--bg))",
        dark: "rgba(var(--dark))",
        light: "rgba(var(--light))",
        border: "rgba(var(--border))",
        gradient1: "rgba(var(--gradient1))",
        gradient2: "rgba(var(--gradient2))",

      },
    },
  },
  plugins: [],
};
