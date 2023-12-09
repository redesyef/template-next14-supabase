import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1985FF',
        secondary: '#FFC600',
        tertiary: '#FF0087',
        text: '#000000',
        textdark: '#FFFFFF',
        darkmode: '#0F0F0F',
        darktheme: '#272727',
      },
    },
  },
  plugins: [],
};
export default config;
