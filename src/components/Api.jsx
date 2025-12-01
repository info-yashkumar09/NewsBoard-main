const API_KEY = "9735d2533690422d90fdead690656a1a";

export const getData = async (query) => {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    const jsonData = await response.json();

    // Check for API errors
    if (jsonData.status === "error") {
      throw new Error(jsonData.message || "Failed to fetch news");
    }

    // Return the articles array for use in Feed
    return jsonData.articles || [];
  } catch (error) {
    console.error("getData error:", error);
    throw error;
  }
};
