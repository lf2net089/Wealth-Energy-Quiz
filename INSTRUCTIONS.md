# Wealth Energy Quiz Copilot Instructions (Architectural Spec)

This file documents the architectural decisions, coding standards, and constraints for the "Wealth-Energy-Quiz" project. AI agents must reference this file before generating code.

## Project Overview

- **Name**: Wealth-Energy-Quiz
- **Description**: A professional-grade SPA personality assessment based on "Wealth Dynamics".
- **Scale**: **Dynamic Question Set**. The system adapts to the length of the array in `questions.js`.
- **UX Pattern**: **Progressive Disclosure** (One question at a time) with auto-advance.
- **Goal**: To provide a psychological, difficult-to-game assessment that analyzes subconscious behaviors and generates a shareable result card.

## Tech Stack & Constraints

- **Core**: HTML5, CSS3, Vanilla JavaScript (ES6+).
- **Visualization**: Chart.js (via CDN).
- **Export Tool**: html2canvas (via CDN) for generating result images.
- **Hosting**: GitHub Pages.
- **No Build Tools**: Pure browser-based code (No npm/webpack).

## 🧠 Psychological Design Logic (The "Architect View")

This is NOT a standard quiz. It uses advanced behavioral profiling techniques:

### 1. Micro-behaviors (微觀行為)

- **De-labeling**: Questions must NOT ask "Are you creative?" or "Do you like data?".
- **Implementation**: Questions must ask about specific, unconscious actions (e.g., "How do you organize your desktop?", "What's your path through a supermarket?").
- **Rationale**: These subconscious habits are impossible to fake and reveal the true energy type.

### 2. Consistency Check (交叉驗證)

- **Design**: The dataset contains paired scenarios measuring the same trait in different contexts.
- **Logic**: This detects "Mixed Types" vs. "Pure Types".

### 3. Anti-Gaming Mechanics

- **Randomization**: Options within each question must be shuffled (`shuffleArray`) to prevent pattern recognition.
- **No Backtracking**: Users can only review the *immediate previous* question.

## Feature Logic: The 8 Wealth Profiles

Calculated at the end based on the vector sum of the 4 energies.

### Calculation Method (Vector Math)

Instead of simple thresholds, the code calculates the **Angle** of the user's energy vector on a 2D plane:

- **X-Axis**: Summer (Right) vs. Winter (Left)
- **Y-Axis**: Spring (Up) vs. Fall (Down)
- **Result**: The angle (0-360°) determines the profile (e.g., 90° ± 22.5° = Creator).

| Profile | Primary Energy | Angle Approx. |
| :--- | :--- | :--- |
| **Creator** | Spring | ~90° (Top) |
| **Star** | Spring + Summer | ~45° (Top-Right) |
| **Supporter** | Summer | ~0° / 360° (Right) |
| **Deal Maker** | Summer + Fall | ~315° (Bottom-Right) |
| **Trader** | Fall | ~270° (Bottom) |
| **Accumulator** | Fall + Winter | ~225° (Bottom-Left) |
| **Lord** | Winter | ~180° (Left) |
| **Mechanic** | Winter + Spring | ~135° (Top-Left) |

## Code Style & Conventions

### JavaScript (`script.js`, `questions.js`)

- **Data Integrity**: `questions.js` serves as the single source of truth. The system must dynamically adapt to `quizData.length`.
- **Scoring System**:
  - `0`: Spring (Dynamo)
  - `1`: Summer (Blaze)
  - `2`: Fall (Tempo)
  - `3`: Winter (Steel)
- **User Input**: Capture `userName` at the start. Default to a placeholder if empty.
- **Export Logic**: Use `html2canvas` to capture the `#capture-area` div. Ensure the background is white and scale is set to 2x for Retina displays.

### CSS (`styles.css`)

- **Layout**: Landscape Dashboard (Bento Grid) for results.
- **Responsive**: Mobile-first (Vertical layout), switching to Grid layout on wider screens.
- **Capture Area**: The `#capture-area` must be visually distinct and contain all necessary metadata (Name, Date, Chart, Results) for the screenshot.

## Workflow

1. **Data Update**: Update `questions.js` to add or modify questions.
2. **Logic Update**: Ensure `script.js` uses `quizData.length` for all progress calculations.
3. **UI Update**: Ensure the Progress Bar calculates percentage based on the total question count dynamically.
