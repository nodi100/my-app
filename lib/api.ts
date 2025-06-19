import { GameApiResponse, GameFilters, GameCategory } from "@/types/game";

const API_BASE_URL = "https://api.remailer.eu/games/list.php";

export async function fetchGames(
  filters: Partial<GameFilters> = {}
): Promise<GameApiResponse> {
  const params = new URLSearchParams();

  if (filters.providers?.length) {
    params.append("provider", filters.providers.join(","));
  }

  if (filters.categories?.length) {
    params.append("category", filters.categories.join(","));
  }

  if (filters.search) {
    params.append("search", filters.search);
  }

  if (filters.page) {
    params.append("page", filters.page.toString());
  }

  if (filters.limit) {
    params.append("limit", filters.limit.toString());
  }

  const url = `${API_BASE_URL}${
    params.toString() ? `?${params.toString()}` : ""
  }`;

  try {
    const response = await fetch(url, {
      next: { revalidate: 60 }, // Cache for 1 minute
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: GameApiResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching games:", error);
    throw error;
  }
}

export async function fetchGamesByCategory(
  category: GameCategory
): Promise<GameApiResponse> {
  return fetchGames({ categories: [category], limit: 20 });
}
