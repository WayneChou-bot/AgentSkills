# 🌌 Agent Skills Guide (Cyberpunk Edition)

> **Unlock the full potential of your AI Agent.**

This is the official interactive guide website for **Agent Skills**, designed with a futuristic "Cyberpunk" aesthetic to provide an immersive onboarding experience. It guides users through installation, configuration, and usage of various AI skills.

![Project Preview](https://placehold.co/800x400/0f172a/06b6d4?text=Agent+Skills+Guide)

## ✨ Features

- **🕸️ Neural Network Background**: A dynamic, interactive particle system built with HTML5 Canvas.
- **⌨️ Hacker-Style Typewriter**: Terminal-like text rendering for titles.
- **💠 Holographic Transitions**: 3D scale-and-blur effects when switching steps.
- **🎹 Keyboard Navigation**: Use `Left` / `Right` arrow keys to navigate seamlessly.
- **📋 Click-to-Copy**: Click on any command (e.g., `@docx`, `/slash`) to instantly copy it.
- **🌏 Bilingual Support**: Full Traditional Chinese (zh-TW) and English support.

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/WayneChou-bot/AgentSkills.git
cd AgentSkills
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open `http://localhost:5173` to view the site.

### 4. Build for Production
```bash
npm run build
```

## 📂 Project Structure

```
src/
├── components/
│   ├── BackgroundParticles.jsx  # Canvas-based neural network background
│   ├── StepCard.jsx             # Main content card with 3D transitions
│   ├── TypewriterText.jsx       # Animated text component
│   └── ...
├── data/
│   └── steps.js                 # Content data (Bilingual)
├── App.jsx                      # Main logic & State management
└── index.css                    # Global styles & Tailwind directives
```

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

[MIT](https://choosealicense.com/licenses/mit/)
