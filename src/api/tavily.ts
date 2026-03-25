interface TavilyImageResult {
  url: string;
  description?: string;
}

interface TavilyResponse {
  images?: (string | TavilyImageResult)[];
}

function buildImageQuery(word: string, partOfSpeech: string): string {
  switch (partOfSpeech.toLowerCase()) {
    case "noun":
      return word;
    case "verb":
      return `${word} action`;
    case "adjective":
      return `${word} concept`;
    case "adverb":
      return `${word} manner`;
    default:
      return `${word} illustration`;
  }
}

export async function fetchWordImage(word: string, partOfSpeech: string, apiKey: string): Promise<string | null> {
  const query = buildImageQuery(word, partOfSpeech);

  try {
    const res = await fetch("https://api.tavily.com/search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        api_key: apiKey,
        query,
        search_depth: "basic",
        include_images: true,
        include_image_descriptions: true,
        max_results: 1,
      }),
    });

    if (!res.ok) return null;

    const data = (await res.json()) as TavilyResponse;
    const first = data.images?.[0];
    if (!first) return null;
    return typeof first === "string" ? first : first.url;
  } catch {
    return null;
  }
}
