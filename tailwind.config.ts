import type { Config } from 'tailwindcss';
import twGlow from 'twglow';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'hsl(var(--primary))',
      },
    },
  },
  plugins: [twGlow],
};
export default config;
