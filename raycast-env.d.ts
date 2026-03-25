/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** AI API Key - Paste your API key — the provider is detected automatically.
• Google Gemini (free tier): get a key at aistudio.google.com → starts with AIza
• Anthropic Claude: console.anthropic.com → starts with sk-ant-
• OpenAI: platform.openai.com → starts with sk- */
  "apiKey": string,
  /** Tavily API Key (optional) - Get a free key at tavily.com — used to show an illustrative image alongside each definition. */
  "tavilyApiKey"?: string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `look-up` command */
  export type LookUp = ExtensionPreferences & {}
  /** Preferences accessible in the `history` command */
  export type History = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `look-up` command */
  export type LookUp = {
  /** e.g. ephemeral */
  "word": string
}
  /** Arguments passed to the `history` command */
  export type History = {}
}

