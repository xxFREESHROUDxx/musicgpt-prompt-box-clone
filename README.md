# MusicGPT Clone - AI Song Creation Platform

A modern web application that replicates MusicGPT's interface and functionality,
featuring AI-powered song creation with multiple modes and text-to-speech
capabilities.

## 🎯 Project Overview

This project is a full-stack clone of MusicGPT built with modern web
technologies. It demonstrates proficiency in React development, API design,
state management, and user experience optimization.

## ✨ Key Features

### Core Functionality

- **Multi-Mode Song Creation**: Three distinct creation modes:
  - **Create Anything**: General song creation with text prompts
  - **Instrumental**: Generate instrumental music without lyrics
  - **Lyrics**: Create songs with custom lyrics input
- **Text-to-Speech Integration**: Advanced voice selection system with 30+
  celebrity voices
- **File Upload Support**: Audio file attachment for reference tracks
- **Real-time Form Validation**: Instant feedback and error handling

### Voice Selection System

- **30+ Voice Options**: Celebrity voices from English, Nepali, and Indian
  backgrounds
- **Smart Search**: Real-time voice search with debounced input (300ms delay)
- **Language Filtering**: Filter voices by language (All, English, Nepali,
  Indian)
- **Infinite Scroll Pagination**: Efficient loading of voices (8 per page)
- **Voice Preview**: Visual avatars with selection states

### User Experience

- **Smooth Animations**: Framer Motion powered transitions between forms
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Loading States**: Skeleton loaders and progress indicators
- **Dynamic Form Transitions**: Seamless switching between creation modes
- **Keyboard Shortcuts**: Ctrl+Enter for quick form submission

### Technical Highlights

- **Type Safety**: Full TypeScript implementation throughout
- **Custom Hooks**: Clean separation of business logic (`useSongGeneration`,
  `useVoices`)
- **State Management**: Intelligent state preservation when switching between
  modes
- **API Integration**: RESTful endpoints for voice fetching and song generation
- **Optimized Performance**: Debounced search, caching, and efficient re-renders

## 🛠️ Tech Stack

**Frontend**

- Next.js 14 (App Router)
- React 18 with TypeScript
- Tailwind CSS for styling
- Framer Motion for animations
- Lucide React for icons

**Backend**

- Next.js API Routes
- TypeScript for type safety
- JSON response handling

**Development Tools**

- ESLint & Prettier for code quality
- Husky for Git hooks
- Commitlint for conventional commits
- Docker for containerization

**Package Management**

- Yarn for dependency management
- Optimized dependency resolution

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- Yarn package manager
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd musicgpt-prompt-box-clone
   ```

2. **Install dependencies**

   ```bash
   yarn install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   # Configure your environment variables
   ```

4. **Start development server**

   ```bash
   yarn dev
   ```

5. **Open application** Navigate to
   [http://localhost:3000](http://localhost:3000)

### Docker Setup

**Development**

```bash
docker-compose --profile dev up --build
```

**Production**

```bash
docker-compose up --build
```

## 📱 Usage

### Song Creation Modes

1. **Create Anything Mode**
   - Enter a text description of your desired song
   - Optionally attach an audio file for reference
   - Choose between instrumental or lyrics modes

2. **Text-to-Speech Mode**
   - Browse and search through 30+ celebrity voices
   - Filter by language (English/Nepali/Indian)
   - Enter text to be spoken in the selected voice
   - Real-time voice selection with visual feedback

3. **Advanced Features**
   - **Mode Switching**: Seamlessly switch between creation modes
   - **State Preservation**: Form data is intelligently preserved when switching
     tools
   - **File Management**: Upload and remove audio files with validation
   - **Keyboard Shortcuts**: Use Ctrl+Enter for quick submission

## 🏗️ Project Architecture

```
├── app/                     # Next.js App Router
│   ├── api/                 # API endpoints
│   │   ├── voices/          # Voice fetching with pagination
│   │   └── generate-song/   # Song generation endpoint
│   ├── layout.tsx           # Root layout with gradient background
│   └── page.tsx             # Main application page
├── components/              # React components
│   ├── forms/               # Form components
│   ├── common/              # Reusable UI components
│   └── song-creation-interface.tsx # Main interface
├── hooks/                   # Custom React hooks
│   ├── useSongGeneration.ts # Song creation logic
│   └── useVoices.ts         # Voice fetching and management
├── constants/               # Application constants and data
├── utils/                   # Utility functions
└── types/                   # TypeScript type definitions
```

## 🎨 Design Decisions

### Performance Optimizations

- **Debounced Search**: 300ms delay prevents excessive API calls
- **Pagination**: Efficient loading with intersection observer
- **State Caching**: Intelligent caching of voice data
- **Optimistic Updates**: Immediate UI feedback for better UX

### User Experience

- **Dark Theme**: Modern purple gradient matching MusicGPT aesthetic
- **Smooth Transitions**: 500ms form transitions for professional feel
- **Loading States**: Skeleton loaders during data fetching
- **Error Handling**: Comprehensive error states with user-friendly messages

### Code Quality

- **TypeScript**: Full type safety prevents runtime errors
- **Component Composition**: Modular, reusable components
- **Custom Hooks**: Business logic separation for maintainability
- **Consistent Styling**: Tailwind CSS with custom design system

## 🔧 API Endpoints

### GET `/api/voices`

Fetches paginated voice data with search and filtering capabilities.

**Query Parameters:**

- `page`: Page number (default: 1)
- `limit`: Items per page (default: 8)
- `language`: Filter by language (all/english/nepali/indian)
- `search`: Search by voice name

### POST `/api/generate-song`

Processes song generation requests with comprehensive logging.

**Request Body:**

```json
{
  "prompt": "Song description",
  "type": "create anything | instrumental | lyrics | text to speech: Voice Name",
  "lyrics": "Optional lyrics content",
  "fileSelected": "Optional audio file name"
}
```

## 🧪 Testing & Quality

### Manual Testing Coverage

- ✅ Voice search and filtering functionality
- ✅ Form mode switching and state preservation
- ✅ Infinite scroll pagination
- ✅ File upload and validation
- ✅ Responsive design across devices
- ✅ Error handling and edge cases
- ✅ API integration and data flow

### Code Quality Standards

- ESLint configuration with strict rules
- Prettier for consistent code formatting
- Husky pre-commit hooks
- Conventional commit messages
- TypeScript strict mode enabled

## 📊 Performance Metrics

- **Initial Load Time**: Optimized with Next.js code splitting
- **Search Responsiveness**: 300ms debounced search for smooth UX
- **Voice Loading**: Efficient pagination with skeleton states
- **Form Transitions**: 500ms smooth animations
- **Bundle Size**: Optimized with tree shaking and dynamic imports

## 🔍 Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📝 Development Scripts

```bash
yarn dev          # Start development server
yarn build        # Build for production
yarn start        # Start production server
yarn lint         # Run ESLint
yarn type-check   # TypeScript type checking
```

---

**Developed by Baibhav KC** | Modern React Application for AI Song Creation
