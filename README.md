# MusicGPT - AI-Powered Song Creation Platform

A modern, responsive web application for creating music using AI, built with
Next.js 14, TypeScript, and Tailwind CSS. Features include text-to-speech voice
selection, dynamic form modes, and smooth animations.

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

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Custom CSS animations
- **State Management**: React Hooks, Custom hooks
- **API**: Next.js API Routes
- **Containerization**: Docker, Docker Compose
- **Package Manager**: Yarn
- **Development**: ESLint, Prettier

## 📦 Installation & Setup

### Prerequisites

- Node.js 18+
- Yarn or npm
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
# Build image
docker build -t musicgpt .

# Run container
docker run -p 3000:3000 musicgpt

# Development with volumes
docker build -f Dockerfile.dev -t musicgpt-dev .
docker run -p 3000:3000 -v $(pwd):/app musicgpt-dev
```

## 🏗️ Project Structure

```
├── app/                          # Next.js 13+ App Router
│   ├── api/                      # API Routes
│   │   ├── generate-song/        # Song generation endpoint
│   │   └── voices/              # Voice fetching endpoint
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Home page
├── components/                   # React Components
│   ├── common/                  # Shared components
│   │   ├── button/             # Button components
│   │   ├── textarea.tsx        # Reusable textarea
│   │   ├── voice-avatar.tsx    # Voice selection avatar
│   │   ├── gradient-background.tsx # Animated background
│   │   ├── form-actions.tsx    # Form action buttons
│   │   └── tools-dropdown.tsx  # Tools selection dropdown
│   ├── forms/                   # Form components
│   │   ├── default-song-form.tsx # Main song creation form
│   │   └── text-to-speech-form.tsx # TTS form with voice selection
│   └── search-box.tsx          # Main search container
├── hooks/                       # Custom React Hooks
│   ├── useSongGeneration.ts    # Song generation logic
│   └── useVoices.ts            # Voice fetching logic
├── constants/                   # Application constants
│   └── index.ts                # All constants and config
├── assets/                      # Static assets
│   └── globals.css             # Global styles
├── configs/                     # Configuration files
├── utils/                       # Utility functions
├── Dockerfile                   # Production Dockerfile
├── Dockerfile.dev              # Development Dockerfile
├── docker-compose.yml          # Docker Compose configuration
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

- [ ] Voice search functionality
- [ ] Language filtering
- [ ] Infinite scroll pagination
- [ ] Form mode switching
- [ ] Voice selection
- [ ] Form submission
- [ ] Responsive design
- [ ] Loading states
- [ ] Error handling

### Automated Testing (Future)

- Unit tests with Jest
- Integration tests with Playwright
- E2E tests for critical user flows

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository
2. Configure environment variables
3. Deploy automatically on push

### Docker Deployment

```bash
# Build production image
docker build -t musicgpt .

# Run with environment variables
docker run -p 3000:3000 \
  -e NODE_ENV=production \
  -e NEXT_PUBLIC_API_URL=https://your-api.com \
  musicgpt
```

### Environment Variables

- `NODE_ENV`: Environment (development/production)
- `NEXT_PUBLIC_API_URL`: API base URL
- `NEXT_TELEMETRY_DISABLED`: Disable Next.js telemetry

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file
for details.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first styling
- All contributors and testers

## 📞 Support

For support, email support@musicgpt.com or create an issue in the repository.

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
