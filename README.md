# MusicGPT

A search bar clone of MusicGPT.

## 🚀 Features

### Core Functionality

- **Multi-Mode Song Creation**: Support for "Create anything", "Instrumental",
  and "Lyrics" modes
- **Text-to-Speech Integration**: Voice selection with 30+ real actor voices
  from English, Nepali, and Indian backgrounds
- **Dynamic Form Transitions**: Smooth animations between different form modes
- **Real-time Search & Filtering**: Search voices by name and filter by language
- **Infinite Scroll Pagination**: Load more voices as you scroll
- **Responsive Design**: Mobile-first approach with adaptive layouts

### Technical Features

- **Backend API Integration**: RESTful API endpoints for voice fetching and song
  generation
- **Loading States**: Skeleton loading and smooth transitions
- **Form Validation**: Real-time validation with proper error handling
- **State Management**: Custom hooks for clean state management
- **TypeScript**: Full type safety throughout the application
- **Docker Support**: Complete containerization for development and production
- **Code Quality**: ESLint, Prettier, Husky, and commitlint for code standards

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Custom CSS animations
- **State Management**: React Hooks, Custom hooks
- **API**: Next.js API Routes
- **Containerization**: Docker, Docker Compose
- **Package Manager**: Yarn
- **Development**: ESLint, Prettier, Husky, commitlint

## 📦 Installation & Setup

### Prerequisites

- Node.js 18+
- Yarn
- Docker (optional)

### Local Development

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd musicgpt-prompt-box-clone
   ```

2. **Install dependencies**

   ```bash
   yarn install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Run the development server**

   ```bash
   yarn dev
   ```

5. **Open your browser** Navigate to
   [http://localhost:3000](http://localhost:3000)

### Docker Setup

#### Production Build

```bash
# Build and run production container
docker-compose up --build

# Or run in detached mode
docker-compose up -d --build
```

#### Development Build

```bash
# Run development container with hot reload
docker-compose --profile dev up --build
```

#### Individual Docker Commands

```bash
# Build production image
docker build -t musicgpt --target runner .

# Build development image
docker build -t musicgpt-dev --target development .

# Run production container
docker run -p 3000:3000 musicgpt

# Run development container with volumes
docker run -p 3000:3000 -v $(pwd):/app -v /app/node_modules -v /app/.next musicgpt-dev
```

## 🏗️ Project Structure

```
├── app/                          # Next.js 14+ App Router
│   ├── api/                      # API Routes
│   │   ├── generate-song/        # Song generation endpoint
│   │   └── voices/              # Voice fetching endpoint
│   ├── fonts/                   # Font files
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Home page
│
├── components/                   # React Components
│   ├── common/                  # Shared components
│   │   ├── button/             # Button components
│   │   │   ├── button.tsx      # Main button component
│   │   │   └── index.ts        # Button exports
│   │   ├── dropdown/           # Dropdown components
│   │   │   ├── dropdown.tsx    # Main dropdown component
│   │   │   ├── dropdown-children.tsx # Dropdown children
│   │   │   ├── language-dropdown.tsx # Language filter dropdown
│   │   │   ├── tools-dropdown.tsx # Tools selection dropdown
│   │   │   └── index.ts        # Dropdown exports
│   │   ├── input/              # Input components
│   │   │   └── textarea.tsx    # Reusable textarea
│   │   ├── animated-form-wrapper.tsx # Form animation wrapper
│   │   ├── badge.tsx           # Badge component
│   │   ├── form-actions.tsx    # Form action buttons
│   │   ├── gradient-background.tsx # Animated background
│   │   └── voice-avatar.tsx    # Voice selection avatar
│   ├── forms/                   # Form components
│   │   ├── default-song-form.tsx # Main song creation form
│   │   └── text-to-speech-form.tsx # TTS form with voice selection
│   └── search-box.tsx          # Main search container
├── hooks/                       # Custom React Hooks
│   ├── useSongGeneration.ts    # Song generation logic
│   └── useVoices.ts            # Voice fetching logic
├── constants/                   # Application constants
│   ├── index.ts                # Main constants export
│   ├── routes.ts               # Route definitions
│   └── static-contents.ts      # Static content data
├── configs/                     # Configuration files
│   ├── app.config.ts           # App configuration
│   └── font-config.ts          # Font configuration
├── utils/                       # Utility functions
│   ├── twclsx.ts               # Tailwind CSS class utilities
│   ├── use-navigation-event.ts # Navigation event hooks
│   ├── use-outside-click-event.ts # Outside click detection
│   └── use-visibility.ts       # Visibility detection
├── assets/                      # Static assets
│   └── globals.css             # Global styles
├── docs/                        # Documentation
│   ├── COMMITLINT.md           # Commit message guidelines
│   └── PULL_REQUEST_TEMPLATE.md # PR template
├── public/                      # Public static files
├── .husky/                      # Git hooks configuration
├── Dockerfile                   # Unified Dockerfile (dev + prod)
├── docker-compose.yml          # Docker Compose configuration
├── next.config.mjs             # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── package.json                # Dependencies and scripts
└── README.md                   # This file
```

## 🎨 Design Decisions

### Architecture Patterns

1. **Component Composition**: Modular, reusable components with clear separation
   of concerns
2. **Custom Hooks**: Business logic separated into custom hooks for reusability
3. **Constants Management**: Centralized configuration for easy maintenance
4. **Type Safety**: Full TypeScript implementation for better development
   experience

### UI/UX Decisions

1. **Dark Theme**: Purple gradient background with dark UI for modern aesthetics
   that matches MusicGPT's theme
2. **Smooth Animations**: CSS transitions and keyframe animations for
   professional feel
3. **Responsive Design**: Mobile-first approach with adaptive layouts
4. **Loading States**: Skeleton loading and smooth transitions for better UX
5. **Form Validation**: Real-time validation with visual feedback

### Performance Optimizations

1. **Debounced Search**: 300ms delay to prevent excessive API calls
2. **Infinite Scroll**: Efficient pagination with intersection observer
3. **Image Optimization**: Next.js built-in image optimization
4. **Code Splitting**: Automatic code splitting by Next.js
5. **Docker Optimization**: Multi-stage builds for smaller production images

## 🔧 API Endpoints

### GET /api/voices

Fetch paginated list of voices with search and filtering.

**Query Parameters:**

- `page`: Page number (default: 1)
- `limit`: Items per page (default: 8)
- `language`: Filter by language (all, english, nepali, indian)
- `search`: Search by voice name

**Response:**

```json
{
  "voices": [
    {
      "name": "Emma Watson",
      "language": "english"
    }
  ],
  "pagination": {
    "currentPage": 1,
    "totalPages": 4,
    "totalVoices": 30,
    "hasNextPage": true,
    "hasPrevPage": false
  }
}
```

### POST /api/generate-song

Submit song generation request.

**Request Body:**

```json
{
  "prompt": "Create a happy song about summer",
  "type": "text to speech: Emma Watson",
  "lyrics": "Optional lyrics content"
}
```

**Response:**

```json
{
  "success": true,
  "message": "Song generation request received",
  "data": {
    "id": "song_1234567890",
    "type": "text to speech: Emma Watson",
    "prompt": "Create a happy song about summer",
    "status": "processing"
  }
}
```

## 🎭 Animation System

### Gradient Background Animation

- **4-second cycle** with smooth color transitions
- **Purple to black gradient** that animates from top to center and back
- **CSS keyframes** for optimal performance

### Form Transitions

- **Slide animations** between different form modes
- **Opacity transitions** for smooth fade effects
- **Height animations** for dynamic form sizing

### Loading States

- **Skeleton loading** for initial voice loading
- **Bouncing dots** for pagination loading
- **Smooth transitions** for all state changes

## 🧪 Testing

### Manual Testing Checklist

- [x] Voice search functionality
- [x] Language filtering
- [x] Infinite scroll pagination
- [x] Form mode switching
- [x] Voice selection
- [x] Form submission
- [x] Responsive design
- [x] Loading states
- [x] Error handling
- [x] Backend Logging Data

### Available Scripts

```bash
# Development
yarn dev              # Start development server
yarn build            # Build for production
yarn start            # Start production server
yarn lint             # Run ESLint

# Testing
yarn test:e2e         # Run Playwright E2E tests

# Storybook
yarn storybook        # Start Storybook development server
yarn build-storybook  # Build Storybook for production

# Code Quality
yarn prepare          # Setup Husky git hooks
```

### Automated Testing (Future)

- Unit tests with Jest
- Integration tests with Playwright
- E2E tests for critical user flows

**By Baibhav KC ❤️**
