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
  { value: "hot", label: "Hot" },
  { value: "featured-games", label: "Featured" },
  { value: "new-releases", label: "New Releases" },
  { value: "hot-games", label: "Hot Games" },
];

export const GAME_PROVIDERS: { value: GameProvider; label: string }[] = [
  { value: "bgaming", label: "BGaming" },
  { value: "gamebeat", label: "GameBeat" },
  { value: "pragmaticplay", label: "Pragmatic Play" },
  { value: "netent", label: "NetEnt" },
  { value: "playtech", label: "Playtech" },
];

export const NAVIGATION_ITEMS = [
  { label: "Lobby", icon: Home, value: "" },
  { label: "Slots", icon: Rocket, value: "slots" },
  { label: "Blackjack", icon: Spade, value: "blackjack" },
  { label: "Roulette", icon: Circle, value: "roulette" },
  { label: "Live", icon: Video, value: "live" },
  { label: "Baccarat", icon: Diamond, value: "baccarat" },
  { label: "Crash", icon: TrendingUp, value: "crash" },
  { label: "Dice", icon: Dice6, value: "dice" },
  { label: "Video Poker", icon: Monitor, value: "video-poker" },
  { label: "Fruits", icon: Apple, value: "fruits" },
  { label: "Books", icon: Book, value: "books" },
  { label: "Bonus Buy", icon: Award, value: "bonus-buy" },
  { label: "Hot", icon: Flame, value: "hot" },
  { label: "Featured", icon: Crown, value: "featured-games" },
  { label: "New", icon: Zap, value: "new-releases" },
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
