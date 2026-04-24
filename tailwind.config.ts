import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-bebas)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      colors: {
        black: '#000000',
        white: '#FFFFFF',
        surface: '#111111',
        'surface-2': '#1A1A1A',
        muted: '#888888',
        'muted-2': '#AAAAAA',
        border: '#333333',
      },
      letterSpacing: {
        widest: '0.25em',
        wider: '0.15em',
      },
    },
  },
  plugins: [],
}

export default config
