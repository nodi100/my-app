export interface Game {
  id: string;
  identifier: string;
  name: string;
  provider: string;
  image: string;
  categories: string[];
  demo_url?: string;
  real_url?: string;
}

export interface GameApiResponse {
  data: Game[];
  pagination: {
    current_page: number;
    per_page: number;
    total_items: number;
    total_pages: number;
    has_next_page: boolean;
    has_prev_page: boolean;
    next_page: number | null;
    prev_page: number | null;
  };
  filters_applied: {
    providers: string[];
    categories: string[];
    search: string;
  };
}

export interface GameFilters {
  providers: GameProvider[];
  categories: GameCategory[];
  search: string;
  page: number;
  limit: number;
}

export type GameCategory =
  | "slots"
  | "blackjack"
  | "roulette"
  | "live"
  | "baccarat"
  | "crash"
  | "dice"
  | "video-poker"
  | "books"
  | "bonus-buy"
  | "fruits"
  | "hot"
  | "featured-games"
  | "new-releases"
  | "hot-games";

export type GameProvider =
  | "bgaming"
  | "gamebeat"
  | "pragmaticplay"
  | "netent"
  | "playtech";
