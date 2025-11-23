# Wealth Energy Quiz Copilot Instructions

This file documents the architectural decisions, coding standards, and constraints for the "Wealth-Energy-Quiz" project. AI agents must reference this file before generating code.

## Project Overview

- **Name**: Wealth-Energy-Quiz
- **Description**: A static SPA personality test based on "Wealth Dynamics".
- **UX Pattern**: **Progressive Disclosure** (One question at a time).
- **Goal**: To provide a psychological, difficult-to-game assessment with immediate visual results.

## Tech Stack

- **Core**: HTML5, CSS3, Vanilla JavaScript (ES6+).
- **Visualization**: Chart.js.
- **Hosting**: GitHub Pages.
- **No Build Tools**: Pure browser-based code.

## UX & Logic Requirements (CRITICAL)

### 1. Question Flow: One-by-One
- **NO Scrolling List**: Do not show all questions at once.
- **Auto-Advance**: When a user selects an option, the system must:
  1. Highlight the selection briefly (e.g., 300ms delay).
  2. Automatically slide/fade to the next question.
- **Navigation**:
  - **Back Button**: Allow going back **ONLY to the immediate previous question** to correct a mistake.
  - **Progress Bar**: Display current progress (e.g., "Question 5 / 20").

### 2. Anti-Gaming & Psychological Design
- **Obfuscation**: Questions should not be obvious (e.g., do not ask "Do you like to start things?"). Instead, ask about **subconscious reactions** to stress, chaos, or boredom.
- **Short & Punchy**: Question text and Option text must be concise to reduce cognitive load (Speed = Intuition).
- **Randomization**:
  - The *order of options* within a question MUST be shuffled every time.
  - The internal values (0-3) must map correctly despite visual shuffling.

### 3. Feature Logic: The 8 Wealth Profiles (Calculated at End)
*(Refer to previous instructions for Profile Logic: Creator, Star, Supporter, Deal Maker, Trader, Accumulator, Lord, Mechanic)*

## Code Style & Conventions

### JavaScript (`script.js`, `questions.js`, `profiles.js`)
- **State Management**: Use `currentQuestionIndex` to track progress.
- **Answer Storage**: Store answers in an array/object by question ID.
- **Scoring**:
  - `0`: Spring (Dynamo)
  - `1`: Summer (Blaze)
  - `2`: Fall (Tempo)
  - `3`: Winter (Steel)

### CSS (`styles.css`)
- **Card Layout**: Center the single question card vertically and horizontally.
- **Animations**: Use simple CSS transitions for switching questions (fade-in/out).
- **Touch Targets**: Options should be large, clickable blocks (not tiny radio buttons).

## Workflow

1. Edit `questions.js` to implement the new short-form psychological questions.
2. Edit `script.js` to implement the `renderQuestion(index)` and `handleOptionClick` logic.
3. Edit `index.html` to replace the list container with a single card container + progress bar.