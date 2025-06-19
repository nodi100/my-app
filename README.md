# Games List - Next.js TypeScript Project

A modern, responsive casino homepage built with Next.js, TypeScript, and Tailwind CSS. Features pixel-perfect design implementation with advanced filtering, search, and pagination capabilities.

## 🚀 Features

- **Server-Side Rendering (SSR)** with Next.js 14
- **Responsive Design** - Perfect on desktop and mobile
- **Advanced Filtering** - Multi-select categories and providers
- **Real-time Search** - Debounced search with 3+ character activation
- **Pagination** - Efficient data loading with page navigation
- **Game Sections** - Featured Games, New Releases, Hot Games
- **Smooth Animations** - Hover effects and transitions
- **TypeScript** - Full type safety
- **Tailwind CSS** - Utility-first styling

## 🛠️ Tech Stack

- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **API Integration:** Native fetch with SSR support

## 📁 Project Structure

```
casino-homepage/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   └── Loading.tsx
│   ├── FilterSidebar.tsx
│   ├── GameCard.tsx
│   ├── GameGrid.tsx
│   ├── GameSection.tsx
│   ├── Header.tsx
│   ├── Navigation.tsx
│   ├── Pagination.tsx
│   └── SearchBar.tsx
├── hooks/
│   └── useGames.ts
├── lib/
│   ├── api.ts
│   └── constants.ts
├── types/
│   └── game.ts
├── next.config.js
├── tailwind.config.js
└── tsconfig.json
```

## 🎮 API Integration

The project integrates with the casino games API:

- **Endpoint:** `https://api.remailer.eu/games/list.php`
- **Features:** Category filtering, provider filtering, search, pagination
- **Response:** Games data with pagination metadata

### API Query Parameters

```typescript
?provider=bgaming,netent&category=slots,books&search=elvis&page=2&limit=20
```

### Filtering Logic

- **Provider filtering:** OR logic (games from any specified provider)
- **Category filtering:** OR logic (games with any specified category)
- **Multiple filter types:** AND logic (provider AND category AND search)
- **Case-insensitive** filtering throughout

## 🎯 Key Components

### GameCard

- Hover effects showing game name and provider
- Play/Demo buttons on hover
- Image loading states and error handling
- Responsive aspect ratio

### FilterSidebar

- Multi-select checkboxes for categories and providers
- Mobile-responsive with overlay
- Clear all filters functionality
- Sticky positioning on desktop

### SearchBar

- Debounced search (300ms delay)
- Minimum 3 characters activation
- Clear search functionality
- Real-time feedback

### Pagination

- Smart page number display with ellipsis
- Previous/Next navigation
- Disabled states for edge cases
- Responsive design

## 🚀 Getting Started

1. **Clone the repository**

```bash
git clone <repository-url>
cd casino-homepage
```

2. **Install dependencies**

```bash
npm install
```

3. \*\*Run
