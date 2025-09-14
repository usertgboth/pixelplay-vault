import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Consolas', 'Liberation Mono', 'Menlo', 'monospace'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          glow: "hsl(var(--primary-glow))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          "blue-light": "hsl(var(--accent-blue-light))",
          "blue-dark": "hsl(var(--accent-blue-dark))",
          "blue-soft": "hsl(var(--accent-blue-soft))",
          market: "hsl(var(--accent-market))",
          games: "hsl(var(--accent-games))",
          referrals: "hsl(var(--accent-referrals))",
          profile: "hsl(var(--accent-profile))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        'blue': '0 4px 20px hsl(221 83% 53% / 0.15)',
        'soft': '0 2px 10px hsl(215 25% 27% / 0.1)',
        'card': '0 1px 3px hsl(215 25% 27% / 0.1)',
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "text-glow": {
          "0%, 100%": { 
            textShadow: "0 0 10px hsl(var(--primary) / 0.5)",
            filter: "blur(0px)"
          },
          "50%": { 
            textShadow: "0 0 20px hsl(var(--primary) / 0.8), 0 0 40px hsl(var(--primary-glow) / 0.6), 0 0 60px hsl(var(--primary-glow) / 0.4)",
            filter: "blur(0.5px)"
          }
        },
        "text-rainbow": {
          "0%": { filter: "hue-rotate(0deg)" },
          "25%": { filter: "hue-rotate(90deg)" },
          "50%": { filter: "hue-rotate(180deg)" },
          "75%": { filter: "hue-rotate(270deg)" },
          "100%": { filter: "hue-rotate(360deg)" }
        },
        "text-wave": {
          "0%, 100%": { transform: "translateY(0px)" },
          "25%": { transform: "translateY(-10px)" },
          "50%": { transform: "translateY(0px)" },
          "75%": { transform: "translateY(10px)" }
        },
        "text-shake": {
          "0%, 100%": { transform: "translateX(0px)" },
          "10%": { transform: "translateX(-2px)" },
          "20%": { transform: "translateX(2px)" },
          "30%": { transform: "translateX(-2px)" },
          "40%": { transform: "translateX(2px)" },
          "50%": { transform: "translateX(-1px)" },
          "60%": { transform: "translateX(1px)" },
          "70%": { transform: "translateX(-1px)" },
          "80%": { transform: "translateX(1px)" },
          "90%": { transform: "translateX(-1px)" }
        },
        "background-pulse": {
          "0%, 100%": { 
            background: "radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.1) 0%, transparent 50%)"
          },
          "50%": { 
            background: "radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.3) 0%, transparent 70%)"
          }
        },
        "letters-dance": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg) scale(1)" },
          "16%": { transform: "translateY(-8px) rotate(2deg) scale(1.1)" },
          "33%": { transform: "translateY(-4px) rotate(-1deg) scale(1.05)" },
          "50%": { transform: "translateY(-12px) rotate(1deg) scale(1.15)" },
          "66%": { transform: "translateY(-2px) rotate(-2deg) scale(1.05)" },
          "83%": { transform: "translateY(-6px) rotate(1deg) scale(1.1)" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pixel-glow": "pixel-glow 2s ease-in-out infinite",
        "pixel-dance": "pixel-dance 3s ease-in-out infinite",
        "bounce-slow": "bounce 2s ease-in-out infinite",
        "text-glow": "text-glow 2s ease-in-out infinite",
        "text-rainbow": "text-rainbow 3s linear infinite",
        "text-wave": "text-wave 2s ease-in-out infinite",
        "text-shake": "text-shake 0.5s ease-in-out infinite",
        "background-pulse": "background-pulse 3s ease-in-out infinite",
        "letters-dance": "letters-dance 2s ease-in-out infinite"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
