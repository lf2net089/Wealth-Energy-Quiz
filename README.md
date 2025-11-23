# Wealth Energy Quiz (財富能量與角色測驗)

A psychological Single Page Application (SPA) designed to assess your subconscious "Wealth Dynamics" personality type. Unlike standard quizzes, this app uses a **progressive disclosure flow** (one question at a time) and **anti-gaming mechanics** to ensure authentic results.

It calculates your internal energy distribution (Spring, Summer, Fall, Winter) and determines which of the **8 Wealth Profiles** is your path to least resistance.

> **Privacy Focused**: All calculations are done entirely in your browser. No personal data is stored or sent to any server.

## 🌟 Key Features

- **🧠 Psychological Assessment**: 20 short, intuitive questions designed to bypass logical overthinking.
- **📱 App-Like Experience**:
  - **Progressive Flow**: Shows one question at a time to maintain focus.
  - **Auto-Advance**: Automatically slides to the next question upon selection.
  - **Review Mechanic**: Users can only go back to the *immediate previous question* to correct mistakes (preventing strategic answer changing).
- **📊 Deep Analysis**:
  - **4 Energy Types**: Visualized via an interactive Radar Chart.
  - **8 Wealth Profiles**: Calculates specific roles (e.g., Creator, Deal Maker, Lord) based on energy combinations.
- **🎨 Modern UI**: Fully responsive, mobile-first design with smooth animations.
- **🚀 Zero-Cost**: Runs 100% on GitHub Pages. No backend, no database.

## 🚀 Live Demo

👉 **[Click here to take the quiz](https://[YOUR-GITHUB-USERNAME].github.io/Wealth-Energy-Quiz/)**
*(Replace `[YOUR-GITHUB-USERNAME]` with your actual GitHub username)*

## 📁 File Structure

```text
├── index.html      # Main entry point (Single Page App structure)
├── styles.css      # Modern mobile-first styling & animations
├── script.js       # Core logic: State management, Scoring, & Chart rendering
├── questions.js    # Data: 20 psychological questions & randomized options
└── README.md       # Project documentation
```

## 🎯 How It Works
- **Start**: Click "開始測驗" to enter the immersive quiz mode.
- **Answer**: Select the option that matches your immediate instinct. The app will auto-advance.
- **Analyze**: The system tracks your scores across 4 dimensions:
  - 🌱 **Spring (Dynamo)**: Innovation & Vision
  - 🔥 **Summer (Blaze)**: Connection & People
  - 🍂 **Fall (Tempo)**: Timing & Service
  - ❄️ **Winter (Steel)**: Data & Systems
- **Result**:
  - Displays a Radar Chart of your energy balance.
  - Identifies your Primary Energy.
  - Assigns your specific Wealth Profile (e.g., "Star" or "Mechanic").

## 🎨 The 8 Wealth Profiles
This system maps the 4 energies into 8 distinct paths to wealth:

| Profile | Energy Mix | Description |
| :--- | :--- | :--- |
| **Creator (創作者)** | Pure Spring | Building better products. |
| **Star (明星)** | Spring + Summer | Building a unique brand. |
| **Supporter (支持者)** | Pure Summer | Leading teams & people. |
| **Deal Maker (媒合者)** | Summer + Fall | Connecting people & deals. |
| **Trader (商人)** | Pure Fall | Buying low, selling high. |
| **Accumulator (積蓄者)** | Fall + Winter | Collecting assets over time. |
| **Lord (地主)** | Pure Winter | Controlling cash-generating assets. |
| **Mechanic (技師)** | Winter + Spring | Optimizing systems. |

## 🛠️ Tech Stack
- **Core**: HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Visualization**: Chart.js (via CDN)
- **Build Tools**: NONE. (No npm, no webpack. Just pure, simple code.)

## 📦 Deployment

### Option 1: GitHub Pages (Recommended)
1. Fork or upload this repository to GitHub.
2. Go to **Settings** > **Pages**.
3. Under **Source**, select **Deploy from a branch**.
4. Select `main` (or `master`) branch and `/` (root) folder.
5. Click **Save**. Your site will be live in 1-2 minutes!

### Option 2: Local Testing
Simply open `index.html` in any web browser.

## 📄 License
This project is open source and available under the MIT License.
