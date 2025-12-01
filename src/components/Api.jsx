const API_KEY = "9735d2533690422d90fdead690656a1a";

export const getData = async (query) => {
  try {
    console.log(`[API] Fetching news for query: "${query}"`);
    const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`;
    console.log(`[API] URL: ${url}`);

    const response = await fetch(url);
    console.log(`[API] Response status: ${response.status}`);

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    const jsonData = await response.json();
    console.log(`[API] Response data:`, jsonData);

    // Check for API errors
    if (jsonData.status === "error") {
      throw new Error(jsonData.message || "Failed to fetch news");
    }

    const articles = jsonData.articles || [];
    console.log(`[API] Returning ${articles.length} articles`);
    return articles;
  } catch (error) {
    console.error("[API] Error:", error);
    throw error;
  }
};
