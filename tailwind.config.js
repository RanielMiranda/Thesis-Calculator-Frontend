/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontSize: {
        'xsm': '0.825rem',  // 10px
        'sm': '1.25rem',    // 20px
        'md': '1.875rem',   // 30px
        'lg': '2.5rem',     // 40px
        'xlg': '3.125rem',  // 50px
      },
      colors: {
        ct1: "rgba(var(--ct1))",
        ct2: "rgba(var(--ct2))",
        bt1: "rgba(var(--bt1))",
        bt2: "rgba(var(--bt2))",
        bt3: "rgba(var(--bt3))",
        bt4: "rgba(var(--bt4))",
        bg1: "rgba(var(--bg1))",
        tx1: "rgba(var(--tx1))",
      },
    },
  },
  plugins: [],
};
