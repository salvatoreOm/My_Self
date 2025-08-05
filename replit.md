# Overview

This is a modern portfolio website built with React, TypeScript, and Express.js featuring an animated, interactive design. The application showcases personal projects, educational journey, travel experiences, and favorite media content through a single-page application with smooth scrolling navigation and engaging animations.

The portfolio includes sections for displaying projects with technology stacks, an educational timeline, an interactive map of visited locations in India, embedded media players for Spotify and YouTube content, and contact information - all presented with a cohesive dark/light theme system and responsive design.

# User Preferences

- **User Identity**: Om Parihar (male)
- **Design Preference**: Masculine, less girly styling
- **Communication Style**: Simple, everyday language
- **Media Integration**: Real Spotify playlist embed and Google My Maps integration

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent, accessible UI components
- **Animations**: Framer Motion for smooth page transitions, scroll-triggered animations, and interactive elements
- **State Management**: React Query (TanStack Query) for server state management and caching
- **Routing**: Wouter for lightweight client-side routing
- **Theme System**: Custom theme provider supporting light/dark modes with CSS variables

## Backend Architecture
- **Server**: Express.js with TypeScript for API endpoints and static file serving
- **Data Storage**: In-memory storage implementation with interface for easy database migration
- **Development Setup**: Vite integration for hot module replacement and development server
- **Build Process**: ESBuild for server bundling and Vite for client bundling

## Component Structure
- **UI Components**: Radix UI primitives wrapped with custom styling using class-variance-authority
- **Layout Components**: Modular sections (Hero, Projects, Journey, Favorites, Contact) with consistent animation patterns
- **Interactive Elements**: Animated text components, floating elements, interactive map pins, and media players
- **Responsive Design**: Mobile-first approach with breakpoint-aware components

## Data Management
- **Schema Validation**: Zod schemas for type-safe data structures (projects, timeline, locations, media)
- **Static Data**: Portfolio content stored in TypeScript files with strongly typed interfaces
- **Shared Types**: Common schemas between client and server for consistent data contracts

## Development Workflow
- **Hot Reloading**: Vite development server with Express middleware integration
- **Type Checking**: Strict TypeScript configuration with path mapping for clean imports
- **Error Handling**: Runtime error overlay for development debugging
- **Build Output**: Separate client and server builds with optimized production assets

# External Dependencies

## Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Query for component framework and state management
- **TypeScript**: Full TypeScript support across client and server with strict type checking
- **Vite**: Modern build tool with fast development server and optimized production builds
- **Express.js**: Web server framework for API endpoints and static file serving

## UI and Styling
- **Tailwind CSS**: Utility-first CSS framework with custom design system integration
- **Radix UI**: Comprehensive collection of accessible, unstyled UI primitives
- **shadcn/ui**: Pre-built component library built on Radix UI with consistent styling
- **Framer Motion**: Animation library for page transitions and interactive animations
- **Lucide React**: Icon library with consistent iconography throughout the application

## Database and Validation
- **Drizzle ORM**: Type-safe database toolkit configured for PostgreSQL
- **Zod**: Runtime type validation and schema definition
- **@neondatabase/serverless**: Serverless PostgreSQL database adapter for production deployment

## Development Tools
- **ESBuild**: Fast JavaScript bundler for server-side code compilation
- **PostCSS**: CSS processing with Tailwind CSS integration
- **Date-fns**: Date manipulation utilities for timeline and content features
- **Wouter**: Lightweight routing library for single-page navigation

## Authentication and Session Management
- **connect-pg-simple**: PostgreSQL session store for Express sessions (configured but not actively used)
- Session management infrastructure prepared for future user authentication features