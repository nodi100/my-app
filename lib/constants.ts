import {
  Home,
  Rocket,
  Zap,
  Spade,
  Circle,
  Video,
  Diamond,
  TrendingUp,
  Dice6,
  Monitor,
  Apple,
  Book,
  Flame,
  Crown,
  Award,
} from "lucide-react";
import { GameCategory, GameProvider } from "@/types/game";

export const GAME_CATEGORIES: { value: GameCategory; label: string }[] = [
  { value: "slots", label: "Slots" },
  { value: "blackjack", label: "Blackjack" },
  { value: "roulette", label: "Roulette" },
  { value: "live", label: "Live" },
  { value: "baccarat", label: "Baccarat" },
  { value: "crash", label: "Crash" },
  { value: "dice", label: "Dice" },
  { value: "video-poker", label: "Video Poker" },
  { value: "books", label: "Books" },
  { value: "bonus-buy", label: "Bonus Buy" },
  { value: "fruits", label: "Fruits" },
];

export const GAME_PROVIDERS: { value: GameProvider; label: string }[] = [
  { value: "bgaming", label: "BGaming" },
  { value: "gamebeat", label: "GameBeat" },
  { value: "pragmaticplay", label: "Pragmatic Play" },
  { value: "netent", label: "NetEnt" },
  { value: "playtech", label: "Playtech" },
];

export const NAVIGATION_ITEMS = [
  { label: "Lobby", icon: Home },
  { label: "Slots", icon: Rocket },
  { label: "Blackjack", icon: Spade },
  { label: "Roulette", icon: Circle },
  { label: "Live", icon: Video },
  { label: "Baccarat", icon: Diamond },
  { label: "Crash", icon: TrendingUp },
  { label: "Dice", icon: Dice6 },
  { label: "Video Poker", icon: Monitor },
  { label: "Fruits", icon: Apple },
  { label: "Books", icon: Book },
  { label: "Bonus Buy", icon: Award },
  { label: "Hot", icon: Flame },
  { label: "Featured", icon: Crown },
  { label: "New", icon: Zap },
];

export const FEATURED_SECTIONS = [
  {
    title: "Featured Games",
    category: "featured-games" as GameCategory,
  },
  {
    title: "New Releases",
    category: "new-releases" as GameCategory,
  },
  {
    title: "Hot Games",
    category: "hot-games" as GameCategory,
  },
  {
    title: "Bonus Buy",
    category: "bonus-buy" as GameCategory,
  },
  {
    title: "Live Games",
    category: "live" as GameCategory,
  },
];
