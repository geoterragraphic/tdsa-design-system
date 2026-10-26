// Terra Drone Arabia — Tailwind preset. Generated from tokens.json.
// Colours point at CSS variables, so load tokens/tokens.css first; dark sections switch with data-theme="dark".
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        "night": "var(--night)",
        "dusk": "var(--dusk)",
        "fineday": "var(--fineday)",
        "twilight": "var(--twilight)",
        "dawn": "var(--dawn)",
        "daytime": "var(--daytime)",
        "sunset": "var(--sunset)",
        "white": "var(--white)",
        "surface": "var(--surface)",
        "surface-alt": "var(--surface-alt)",
        "surface-warm": "var(--surface-warm)",
        "surface-band": "var(--surface-band)",
        "ink": "var(--ink)",
        "ink-brand": "var(--ink-brand)",
        "ink-muted": "var(--ink-muted)",
        "line": "var(--line)",
        "action": "var(--action)",
        "on-action": "var(--on-action)",
        "link": "var(--link)",
        "link-hover": "var(--link-hover)",
        "chart-1": "var(--chart-1)",
        "chart-2": "var(--chart-2)",
        "chart-3": "var(--chart-3)",
        "chart-4": "var(--chart-4)",
        "chart-5": "var(--chart-5)",
        "chart-grid": "var(--chart-grid)",
        "chart-label": "var(--chart-label)"
      },
      fontFamily: { sans: ["Avenir", "Avenir Next", "Nunito Sans", "system-ui", "sans-serif"] },
      spacing: {"1": "4px", "2": "8px", "3": "12px", "4": "16px", "6": "24px", "8": "32px", "12": "48px", "16": "64px", "24": "96px"},
      borderRadius: {"sm": "4px", "md": "8px", "lg": "16px", "pill": "999px"},
      fontSize: {"display": ["56px", {"lineHeight": "60px", "fontWeight": "900"}], "h1": ["40px", {"lineHeight": "48px", "fontWeight": "800"}], "h2": ["32px", {"lineHeight": "40px", "fontWeight": "800"}], "h3": ["24px", {"lineHeight": "32px", "fontWeight": "800"}], "lead": ["20px", {"lineHeight": "30px", "fontWeight": "400"}], "body": ["16px", {"lineHeight": "26px", "fontWeight": "400"}], "label": ["14px", {"lineHeight": "20px", "fontWeight": "500"}], "caption": ["12px", {"lineHeight": "16px", "fontWeight": "300"}]},
    },
  },
};

// Resolved hex values (light theme) for tools that cannot read CSS variables.
module.exports.raw = {
  "night": "#0f0f56",
  "dusk": "#143893",
  "fineday": "#25a1f4",
  "twilight": "#09aeba",
  "dawn": "#094e59",
  "daytime": "#cce6ff",
  "sunset": "#dfd1d1",
  "white": "#ffffff",
  "surface": "#ffffff",
  "surface-alt": "#cce6ff",
  "surface-warm": "#dfd1d1",
  "surface-band": "#0f0f56",
  "ink": "#0f0f56",
  "ink-brand": "#143893",
  "ink-muted": "#094e59",
  "line": "#dfd1d1",
  "action": "#143893",
  "on-action": "#ffffff",
  "link": "#143893",
  "link-hover": "#25a1f4",
  "chart-1": "#25a1f4",
  "chart-2": "#143893",
  "chart-3": "#09aeba",
  "chart-4": "#094e59",
  "chart-5": "#0f0f56",
  "chart-grid": "#dfd1d1",
  "chart-label": "#0f0f56"
};
