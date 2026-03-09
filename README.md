#live-link: 
 # Scroll-Driven-Hero-Section-Animation
# 🚗 Car Scroll Animation

A visually stunning scroll-driven hero section animation built with **Next.js**, **GSAP**, and **React 19**. This project replicates the immersive car scroll animation demo — featuring a cinematic car reveal, trail effects, animated text boxes, and letter-highlight transitions all driven by the user's scroll position.

> 🔗 Live Reference: [[paraschaturvedi.github.io/car-scroll-animation](https://paraschaturvedi.github.io/car-scroll-animation/)](https://paraschaturvedi.github.io/car-scroll-animation

---

## ✨ Features

- 🎞️ **Scroll-driven animation** — Every visual element reacts to scroll position in real time
- 🚘 **Car image reveal** — Smooth entrance and pinned car with animated trail
- 🔤 **Letter-by-letter text highlighting** — Dynamic text transitions synced to scroll
- 📦 **Floating text boxes** — Contextual UI panels that animate into view
- ⚡ **GSAP ScrollTrigger** — Powered by the industry-standard animation library
- 🎨 **Tailwind CSS** — Utility-first styling with a global stylesheet
- 🟦 **TypeScript** — Fully typed codebase for reliability and DX

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org/) | 15.1.7 | React framework & routing |
| [React](https://react.dev/) | 19.0.0 | UI rendering |
| [GSAP](https://gsap.com/) | 3.12.5 | Scroll animations |
| [@gsap/react](https://gsap.com/react) | 2.1.2 | GSAP React integration |
| [Tailwind CSS](https://tailwindcss.com/) | 3.4.17 | Utility-first styling |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | Static type checking |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **Yarn** (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/car-scroll-animation.git

# Navigate into the project directory
cd car-scroll-animation

# Install dependencies
yarn install
```

### Running Locally

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the animation.

### Build for Production

```bash
yarn build
yarn start
```

---

## 📁 Project Structure

```
car-scroll-animation/
├── public/              # Static assets (car image, trail, etc.)
├── src/
│   └── app/
│       ├── globals.css  # Global styles & CSS variables
│       ├── layout.tsx   # Root layout component
│       └── page.tsx     # Main scroll animation page
├── next.config.ts       # Next.js configuration
├── tailwind.config.ts   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project metadata & scripts
```

---

## 🎬 How It Works

The animation is entirely scroll-driven using **GSAP's ScrollTrigger** plugin:

1. **Pin the scene** — The hero section is pinned while the user scrolls through a long scroll container.
2. **Car entrance** — The car slides in from the side as scroll begins.
3. **Trail effect** — A motion trail follows behind the car, fading in and out.
4. **Text highlighting** — Individual letters in the heading get highlighted progressively as the user scrolls.
5. **Info panels** — Floating text boxes fade and slide in at specific scroll milestones.

---

## 📜 Scripts

| Command | Description |
|---|---|
| `yarn dev` | Start the development server |
| `yarn build` | Build the production bundle |
| `yarn start` | Start the production server |
| `yarn lint` | Run ESLint to check for issues |

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
  Made with ❤️ and GSAP magic
</div>
