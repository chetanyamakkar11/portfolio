module.exports = {
  darkMode: 'media',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        prose: '42rem',
      },
    },
  },
  plugins: [],
}
