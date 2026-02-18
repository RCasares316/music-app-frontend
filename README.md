# Music App (Frontend)

This is the frontend for the music application.
It is a React-based single-page application that allows users to explore music, create and manage playlists, and interact with their personal library through a fast and responsive interface.
The client communicates with a custom REST API for authentication and playlist persistence while dynamically loading track data from an external music service.

### Deploy Application
[Music Snippets](https://music-snippets.netlify.app/playlist/6992331cd743d194726a0f7f)


### Run Application Locally
Frontend:
http://localhost:5173

Both must run simultaneously.

# Overview

The frontend provides an intuitive user experience where authenticated users can:

- Browse the music library

- Create playlists

- View all of their playlists

- Open a playlist to see its tracks

- Add songs to playlists

- Remove songs from playlists

- Delete playlists

All updates are reflected instantly in the UI without requiring a page refresh.

# Technologies Used
React – Component-based UI

React Router – Client-side routing

JavaScript (ES6+) – Application logic

CSS – Layout, styling, and responsive design

Axios / Fetch – API communication

Vite / Create React App – Frontend tooling

Nectify -Deployment & hosting

# Core Features
### Authentication Flow
Users can sign up and log in

JWT is stored on the client

Authenticated requests automatically include the token

Protected views are only accessible when logged in

### Music Library
The music library:
Fetches track data from an external API

Displays:

Song title

Artist

Album

Artwork

Users can quickly add tracks to any playlist from this view.

### Playlist Management
Users can:
Create new playlists

View all personal playlists

Open a playlist to see its tracks

Remove tracks from a playlist

Delete playlists

State updates immediately after each action to keep the UI in sync with the backend.

# State Management Strategy
useState for local component state

useEffect for data fetching

Lifting state when multiple components need shared data

Immediate state updates after API mutations to prevent manual refreshes

This ensures a smooth and reactive user experience.

# API Integration
The client communicates with the backend to:
- Authenticate users
- Create playlists
- Fetch user playlists
- Update playlists
- Delete playlists

An API configuration file:
- Sets the base URL

Automatically attaches the auth token using request interceptors

# UI / UX Design Decisions
### Instant Feedback
After creating or deleting a playlist, the UI updates immediately without reloading the page.
### Reusable Components
Track cards, forms, and playlist views are modular and reusable to keep the codebase scalable.
### Protected Routes
Unauthorized users are redirected to the login page when attempting to access private content.
### Clean Navigation
A persistent navigation bar allows quick movement between the library and playlists.

# Challenges & Solutions
### Keeping UI in Sync with the Database
Solved by updating local state after successful API responses instead of re-fetching all data.
### Handling Asynchronous Data Loading
Implemented loading-safe rendering to prevent undefined errors while data is being fetched.
### Token Persistence
Stored the token locally and injected it into API requests automatically using an interceptor.

# Future Improvements

- Drag-and-drop playlist reordering
- Filtering system
- Different theme modes
- Global state management (Context API or Redux)
- Performance optimizations with memoization

# Running the Project Locally
1️⃣ Install dependencies
npm install

2️⃣ Start the development server
npm run dev

# Author
### Jullian Guerrero
### Jimmiealice Williams
### Richard Casares
GitHub: [Link](https://github.com/RCasares316/music-app-frontend)

# Reflections
Building the frontend strengthened our understanding of React application structure, especially managing asynchronous data, protecting routes, and keeping the UI synchronized with backend state.
The biggest improvement in this project was learning how to design a reactive interface where user actions immediately update the view without requiring manual refreshes. This mirrors real-world production applications and significantly improved my confidence working with full-stack systems.
