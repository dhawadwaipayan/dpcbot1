import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

export const STARTER_PROMPTS: StartScreenPrompt[] = [];

export const PLACEHOLDER_INPUT = "Ask anything...";

export const GREETING = "";

export const COMPOSER_ATTACHMENTS = {
  enabled: true,
  maxCount: 5,
  maxSize: 10_485_760, // 10MB
} as const;

export const COMPOSER_TOOLS = [
  {
    id: "search_docs",
    label: "Search docs",
    shortLabel: "Docs",
    placeholderOverride: "Search documentation",
    icon: "book-open",
    pinned: false,
  },
  {
    id: "quick_note",
    label: "Quick note",
    shortLabel: "Note",
    placeholderOverride: "Add a quick note",
    icon: "pencil",
    pinned: false,
  },
] as const;

export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  color: {
    grayscale: {
      hue: 208,
      tint: 9,
      shade: theme === "dark" ? -1 : -4,
    },
    accent: {
      primary: "#00255F",
      level: 1,
    },
  },
  radius: "pill",
  density: "normal",
  typography: {
    baseSize: 16,
    fontFamily:
      '"OpenAI Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif',
    fontFamilyMono:
      'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "DejaVu Sans Mono", "Courier New", monospace',
    fontSources: [
      {
        family: "OpenAI Sans",
        src: "https://cdn.openai.com/common/fonts/openai-sans/v2/OpenAISans-Regular.woff2",
        weight: 400,
        style: "normal",
        display: "swap",
      },
    ],
  },
});
