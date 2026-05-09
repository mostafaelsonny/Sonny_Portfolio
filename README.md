# 👨‍💻 Mostafa Elsonny - Premium Digital Portfolio

A cinematic, high-performance developer portfolio built to deliver an unforgettable user experience. Designed with premium dark-mode aesthetics, fluid animations, and heavy performance optimization, this portfolio showcases my projects, skills, and experience as a Front-end Developer.

## ✨ Key Features

- **Cinematic Visuals & Video Integration**: Utilizes high-quality, auto-playing background videos and project hover videos hosted on Cloudinary.
- **Advanced Performance Optimization**: 
  - **Lazy Loading Media**: Heavy video assets and images are only fetched when they enter the viewport using `react-intersection-observer`.
  - **Component Code-Splitting**: Below-the-fold sections (About, Projects, Skills, Contact) are dynamically imported using React's `lazy` and `Suspense`, ensuring an instant initial page load.
- **Fluid Animations**: Combining the power of **Framer Motion** for scroll-driven layout reveals and **AOS (Animate on Scroll)** for simple element fading, creating a deeply interactive and alive UI.
- **Responsive & Mobile-First**: meticulously crafted with responsive Tailwind CSS breakpoints, ensuring a flawless layout transition from ultra-wide desktops down to mobile devices.
- **Premium Glassmorphism Aesthetics**: Features custom gradient text, deeply nested glassmorphism layers (`mix-blend-mode`), and soft ambient neon shadows.

## 🛠️ Tech Stack

This project leverages modern frontend architecture:

- **Core**: [React.js](https://react.dev/) (v19)
- **Build Tool**: [Vite](https://vitejs.dev/) (Lightning fast HMR & bundling)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4) with arbitrary values for precise design execution.
- **Animations**: 
  - [Framer Motion](https://www.framer.com/motion/) (Scroll tracking & complex element reveals)
  - [AOS](https://michalsnik.github.io/aos/) (Scroll-based CSS animations)
- **Performance**: `react-intersection-observer` for viewport detection.

## 📁 Project Structure

```text
├── public/                 # Static assets (Favicons, SVG icons, Images)
├── src/
│   ├── assets/             # Internal assets
│   ├── components/         # Reusable UI components
│   │   ├── BackgroundMedia.jsx  # Parallax background videos
│   │   ├── InfoCard.jsx         # Bento-grid style info cards
│   │   ├── ProjectCard.jsx      # Animated project showcase cards
│   │   ├── VideoPlayer.jsx      # Performance-optimized hover-to-play videos
│   │   ├── Navbar.jsx           # Top navigation bar
│   │   └── Sidebar.jsx          # Mobile side menu
│   ├── hooks/
│   │   └── useScrollReveal.js   # Custom Framer Motion hook for scroll animations
│   ├── sections/           # Major page sections (Code-split targets)
│   │   ├── Hero.jsx        
│   │   ├── About.jsx       
│   │   ├── Projects.jsx    
│   │   ├── Skills.jsx      
│   │   └── Contact.jsx     
│   ├── App.jsx             # Main application layout and Suspense boundaries
│   ├── index.css           # Global Tailwind directives & custom CSS
│   └── main.jsx            # React root injection
```

## 🎨 Theming & Aesthetics

- **Dark Mode Native**: The entire interface is built strictly around a futuristic dark color palette (Deep navy `#001f7c38`, dark purples `#2200493d`, and rich blacks).
- **Ambient Lighting**: achieved via precise `box-shadow` configurations tailored to React state (e.g., `hover:shadow-[0_0_25px_rgb(255,255,255)]`).
- **Gradients**: Utility `.gradient` classes apply specific text-clipping techniques to highlight key words across the application.
- **Blur & Transparency**: Frequent use of CSS filters (`backdrop-blur`) and CSS mix-blend-modes (`mix-blend-lighten`, `mix-blend-overlay`) to seamlessly integrate video content with the background without harsh square borders.

## 🚀 Getting Started

Follow these steps to run the portfolio locally on your machine.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18+) and npm/yarn installed.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/sonny-portfolio.git
   cd sonny-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **View the project:**
   Open your browser and navigate to the local URL provided by Vite (typically `http://localhost:5173`).

### Building for Production

To create a highly optimized production build:
```bash
npm run build
```
You can preview the built production app locally using:
```bash
npm run preview
```

---
*Designed & Engineered by Mostafa Elsonny.*
