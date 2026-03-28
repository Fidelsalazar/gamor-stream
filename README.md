# Gamor - Gaming Streaming Platform

A modern React-based web application for gaming streaming with a beautiful dark/light theme system, responsive design, and immersive user experience. Built with TypeScript, Vite, and CSS Modules.

![Gamor Banner](https://www.dexerto.com/cdn-image/wp-content/uploads/2025/02/09/Fortnite-Valentines-day.jpg?width=1200&quality=75&format=auto)

## 🚀 Features

### Core Features
- **Dark/Light Theme Toggle** - Switch between dark and light themes with persistent storage
- **Responsive Design** - Fully responsive across desktop, tablet, mobile, and small mobile devices
- **Authentication System** - Login and registration with form validation
- **Protected Routes** - Secure routes requiring authentication
- **Real-time Clock Display** - Live countdown showing current time

### UI Components
- **LayoutCard** - Multi-column gaming hero section with:
  - Animated SVG decorations
  - Floating avatar elements with viewer badges
  - Skeleton loading states for images
  - Platform selection tabs (Party/Matches/Streams)
  - Player search functionality with avatar stack display
  
- **TrendingCategories** - Animated category cards with:
  - Glowing background effects
  - Grid layout adapting to viewport
  - Hover animations
  
- **Custom Input** - Responsive input fields with:
  - Dynamic padding and font sizes
  - Label support
  - Error handling
  
- **Custom Button** - Multiple button variants with:
  - Size variants (small/medium/large)
  - Loading state with spinner
  - Responsive sizing

### Technical Features
- **CSS Modules** - Scoped styling with no conflicts
- **TypeScript** - Full type safety throughout the application
- **React Router** - Client-side routing with protected routes
- **useResponsive Hook** - Centralized responsive configuration system
- **Lazy Image Loading** - Skeleton placeholders while images load
- **MultiAvatar CDN Integration** - Dynamic SVG avatar generation

## 📦 Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite 7** - Build tool and development server
- **React Router DOM** - Client-side routing
- **CSS Modules** - Scoped styling
- **ESLint** - Code linting

### External Dependencies (CDN)

The following external resources are loaded via CDN:

1. **MultiAvatar** - Dynamic avatar generation
   ```html
   <script src="https://cdn.jsdelivr.net/npm/@multiavatar/multiavatar/multiavatar.min.js"></script>
   ```

2. **Google Fonts** - Typography (loaded via CSS)
   - System font stack with fallback

## 🏗️ Project Structure

```
gamor/
├── public/
│   └── icon.svg                    # App icon
├── src/
│   ├── assets/
│   │   ├── data/
│   │   │   ├── categories.ts       # Gaming categories data
│   │   │   └── players.ts          # Player data for different platforms
│   │   ├── icons/                  # SVG icon components
│   │   ├── images/                 # PNG image assets
│   │   └── skeleton/               # Skeleton loading components
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button/             # Reusable button component
│   │   │   ├── Input/              # Reusable input component
│   │   │   ├── LayoutCard/        # Main gaming hero card
│   │   │   ├── SvgAvatar/         # Dynamic avatar generator
│   │   │   └── TrendingCategories/ # Category showcase
│   │   ├── layout/
│   │   │   └── MainLayout/         # Main app layout with navigation
│   │   ├── pages/
│   │   │   ├── Home/               # Home page
│   │   │   ├── Login/              # Login page
│   │   │   └── Register/           # Registration page
│   │   └── routes/
│   │       └── AppRoutes.tsx       # Route definitions
│   ├── hooks/
│   │   ├── useAuth.tsx             # Authentication context
│   │   └── useResponsive.ts        # Responsive design hook
│   ├── types/                      # TypeScript type definitions
│   │   ├── auth.ts
│   │   ├── form.ts
│   │   └── css-modules.d.ts
│   ├── App.tsx                     # Root component
│   ├── index.css                   # Global styles with CSS variables
│   └── main.tsx                    # Application entry point
├── index.html                      # HTML template
├── package.json                    # Dependencies and scripts
├── tsconfig.json                   # TypeScript configuration
├── vite.config.ts                  # Vite configuration
└── eslint.config.js                # ESLint configuration
```

## 🔧 Responsive Breakpoints

The application uses four viewport sizes defined in `useResponsive.ts`:

| Viewport | Size | Description |
|----------|------|-------------|
| Desktop | ≥1440px | Full layout with horizontal sections |
| Tablet | 820px-1439px | Stacked vertical layout |
| Mobile | 480px-819px | Compact mobile view |
| Small Mobile | <480px | Extra small devices |

### Responsive Configuration System

The `useResponsive` hook provides centralized configuration for:

- **EllipseConfig** - SVG decorative element positioning
- **TitleConfig** - Typography sizing
- **ButtonConfig** - Button styling
- **GridConfig** - Grid column and gap settings
- **TrendingSectionConfig** - Category section layout
- **InputConfig** - Input field styling
- **ButtonSizeConfig** - Button size variants
- **MainLayoutConfig** - Navigation and header styling
- **HomeConfig** - Home page container layout
- **LayoutCardConfig** - Complex card component styling
- **AuthPageConfig** - Authentication page layout

## 🎨 Theme System

CSS Variables in `index.css` define the design tokens:

### Dark Theme (Default)
```css
--text-primary: #ffffff
--text-secondary: #9ca3af
--bg-main: #161920
--card-bg: #1f2937
--surface-bg: #374151
--primary: #a60df2
--secondary: #ff9148
```

### Light Theme
```css
--text-primary: #1f2937
--text-secondary: #6b7280
--bg-main: #f9fafb
--card-bg: #ffffff
--surface-bg: #f3f4f6
```

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd gamor

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

### Linting

```bash
# Run ESLint
npm run lint
```

## 📱 Key Components

### MainLayout
- Responsive navigation bar
- Theme toggle (sun/moon icons)
- Authentication state display
- User avatar using MultiAvatar CDN

### LayoutCard
- Three-column responsive layout
- Hero section with animated elements
- Platform selector (Party/Matches/Streams)
- Player search with avatar stacks

### TrendingCategories
- Animated card grid
- Glowing background effects
- Category navigation

### Login/Register Pages
- Split-screen layout on desktop
- Stacked layout on mobile
- Form validation
- Error handling
- Loading states

## 🔐 Authentication

The app includes:
- **AuthProvider** - React Context for auth state
- **useAuth hook** - Access auth methods anywhere
- **ProtectedRoute** - Guard authenticated routes
- **PublicRoute** - Redirect authenticated users
- **localStorage** - Persist user session

## 🎭 Skeleton Loading

Implemented for:
- Hero image loading
- Floating avatars
- Category images

Uses CSS animations and placeholder components while real images load.

## 🌍 CDN Integration

### MultiAvatar
Used in `SvgAvatar` component for generating unique avatar SVGs based on seed strings.

```typescript
// Usage in component
<SvgAvatar seed="user_name_123" size={40} />
```

The script is loaded in `index.html`:
```html
<script src="https://cdn.jsdelivr.net/npm/@multiavatar/multiavatar/multiavatar.min.js"></script>
```

## 📝 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🎨 Design Highlights

- **Smooth Animations** - CSS keyframe animations for:
  - Floating avatars (float, slideUp, slideDown)
  - Ellipse decorations
  - Category card hover effects
  - Skeleton loading pulse

- **Responsive Images** - Dynamic sizing based on viewport
- **Themed Icons** - SVG icons that adapt to theme
- **Accessibility** - Semantic HTML, ARIA labels, focus states

## 📄 License

This project is for educational/demonstration purposes.

## 🤝 Acknowledgments

- MultiAvatar for the avatar generation library
- Fortnite images used as placeholders
- Vite team for the excellent build tool
