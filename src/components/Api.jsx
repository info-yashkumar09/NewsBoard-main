import { useState } from "react";
import Homepage from "./Homepage";
const API_KEY = "9735d2533690422d90fdead690656a1a";

export const getData = async (query) => {
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`
  );
  const jsonData = await response.json();
  // Return the articles array for use in Feed
  return jsonData.articles || [];
};
