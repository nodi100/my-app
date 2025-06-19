import { GameCategory, Game } from "@/types/game";
import { FEATURED_SECTIONS } from "@/lib/constants";
import { fetchGamesByCategory } from "@/lib/api";
import GamesList from "@/pages/GamesList";

export default async function HomePage() {
  async function fetchHomePageGames() {
    const promises = FEATURED_SECTIONS.map((section) =>
      fetchGamesByCategory(section.category)
    );

    const results = await Promise.allSettled(promises);

    const data: Record<GameCategory, Game[]> = {} as Record<
      GameCategory,
      Game[]
    >;

    results.forEach((result, index) => {
      const category = FEATURED_SECTIONS[index].category;
      if (result.status === "fulfilled") {
        data[category] = result.value.data;
      } else {
        console.warn(`${category} failed`, result.reason);
      }
    });

    return data;
  }

  const initialGames = await fetchHomePageGames();

  return <GamesList initialGames={initialGames || {}} />;
}
