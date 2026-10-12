const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', '"SF Pro Text"', '"Segoe UI"', 'Roboto', 'sans-serif'],
        mono: ['ui-monospace', '"SF Mono"', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      colors: {
        canvas: token('canvas'),
        tile: token('tile'),
        raised: token('raised'),
        ink: token('ink'),
        'ink-2': token('ink-2'),
        'ink-3': token('ink-3'),
        hairline: token('hairline'),
        accent: token('accent'),
        'accent-strong': token('accent-strong'),
      },
      maxWidth: {
        page: '61.25rem',
        copy: '40rem',
      },
      borderRadius: {
        tile: '1.75rem',
      },
    },
  },
  plugins: [],
}
