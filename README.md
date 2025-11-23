# Wealth Energy Quiz (財富能量與角色測驗)

A professional-grade personality assessment designed to uncover your natural path to wealth. 

Unlike generic quizzes, this tool uses **situational judgment questions** rooted in behavioral psychology ("Micro-behaviors") to analyze your subconscious decision-making protocols.

> **Privacy Focused**: All calculations are done entirely in your browser. No personal data is stored or sent to any server.

## 🌟 Key Features

- **🧠 Deep Psychological Assessment**: 
  - **Dynamic Question Set**: The assessment adapts to the number of questions provided, ensuring flexibility.
  - Uses **Micro-behavior Analysis** (e.g., desktop organization, shopping habits) to bypass logical biases.
  - Includes **Consistency Checks** to distinguish between learned behaviors and natural instincts.
- **📱 App-Like Experience**:
  - **Progressive Flow**: One question at a time to maintain focus.
  - **Auto-Advance**: Smooth transitions for a seamless experience.
  - **Anti-Gaming**: Randomized options and limited backtracking ensure authentic results.
- **📸 Shareable Results**:
  - **Personalized Card**: Inputs user nickname for a customized result.
  - **One-Click Download**: Generates a high-quality image of the analysis dashboard using `html2canvas`.
- **📊 Visual Dashboard**:
  - **Radar Chart**: Visualizes your energy balance across 4 dimensions.
  - **8 Wealth Profiles**: Determines your specific role (e.g., Creator, Deal Maker, Lord) based on vector energy calculations.

## 🚀 Live Demo

👉 **[Click here to take the assessment](https://lf2net089.github.io/Wealth-Energy-Quiz/)**

## 🎯 The 4 Energies & 8 Profiles

The system assesses your balance of:

- 🌱 **Spring (Dynamo)**: Innovation & Vision
- 🔥 **Summer (Blaze)**: Connection & People
- 🍂 **Fall (Tempo)**: Timing & Service
- ❄️ **Winter (Steel)**: Data & Systems

Based on the vector angle of your energies, you are assigned one of 8 paths:

1. **Creator** (Pure Spring)
2. **Star** (Spring + Summer)
3. **Supporter** (Pure Summer)
4. **Deal Maker** (Summer + Fall)
5. **Trader** (Pure Fall)
6. **Accumulator** (Fall + Winter)
7. **Lord** (Pure Winter)
8. **Mechanic** (Winter + Spring)

## 📁 File Structure

```text
├── index.html      # Main entry point (includes html2canvas & Chart.js)
├── styles.css      # Landscape Dashboard & Capture Area styling
├── script.js       # Core logic, Vector calculation & Image generation
├── questions.js    # The psychological dataset (Dynamic length)
└── README.md       # Documentation