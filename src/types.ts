export interface DictionaryEntry {
  word: string;
  phonetic: string;
  partOfSpeech: string;
  definition: string;
  examples: string[];
  synonyms: string[];
  provider: string;
  cachedAt: number;
  imageUrl?: string;
}

export interface Preferences {
  apiKey: string;
  tavilyApiKey?: string;
}

export interface CacheIndex {
  words: string[];
}
