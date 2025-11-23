# Wealth-Energy-Quiz Copilot Instructions

This file documents the architectural decisions, coding standards, and constraints for the "Wealth-Energy-Quiz" project. AI agents must reference this file before generating code.

## Project Overview

- **Name**: Wealth-Energy-Quiz
- **Description**: A static Single Page Application (SPA) based on the "Wealth Dynamics" system. It assesses users' personality traits (Spring, Summer, Fall, Winter) and calculates their specific "Wealth Profile" (one of 8 types).
- **Goal**: To provide a lightweight, privacy-focused (client-side only), and zero-cost hosting solution that delivers immediate visual results.

## Tech Stack & Constraints

- **Core**: HTML5, CSS3, Vanilla JavaScript (ES6+).
- **Visualization**: Chart.js (Loaded via CDN) for the Radar Chart.
- **Hosting**: GitHub Pages.
- **Build Tools**: **NONE**. Do not introduce `npm`, `webpack`, `react`, or `node_modules`.
- **Data Persistence**: None (Session-based).

## Code Style & Conventions

### JavaScript (`script.js`, `questions.js`, `profiles.js`)

- **Modularity**:
  - `questions.js`: Stores the quiz questions.
  - `profiles.js`: Stores the content for the 8 Wealth Profiles (Title, Description, Representative Figures).
  - `script.js`: Logic controller.
- **Scoring System**:
  - `0`: Spring (Dynamo / 發電機)
  - `1`: Summer (Blaze / 火焰)
  - `2`: Fall (Tempo / 節奏)
  - `3`: Winter (Steel / 鋼鐵)

### CSS (`styles.css`)

- **Methodology**: Mobile-First.
- **Layout**: Flexbox / Grid.
- **Visuals**: Use colors corresponding to energies (Spring: Green, Summer: Red, Fall: Yellow/Orange, Winter: Blue/Grey).

## Feature Logic: The 8 Wealth Profiles

The system must calculate one of 8 profiles based on the user's 4 energy scores.

### 1. Calculation Logic (`calculateProfile` function)

1.  Identify the **Primary Energy** (Highest Score).
2.  Identify the **Secondary Energy** (Highest of the two _neighboring_ energies).
    - _Note:_ Neighbors are defined circularly: Spring(0) <-> Summer(1) <-> Fall(2) <-> Winter(3) <-> Spring(0).
3.  **Threshold Rule**:
    - If (Primary Score - Secondary Score) > Threshold (e.g., 2 points): **Pure Profile** (Corner).
    - Else: **Mixed Profile** (Side).

### 2. Profile Mapping Table

| Primary | Secondary  | Profile Name             | Type  |
| :------ | :--------- | :----------------------- | :---- |
| Spring  | (None/Low) | **Creator (創作者)**     | Pure  |
| Spring  | Summer     | **Star (明星)**          | Mixed |
| Summer  | Spring     | **Star (明星)**          | Mixed |
| Summer  | (None/Low) | **Supporter (支持者)**   | Pure  |
| Summer  | Fall       | **Deal Maker (媒合者)**  | Mixed |
| Fall    | Summer     | **Deal Maker (媒合者)**  | Mixed |
| Fall    | (None/Low) | **Trader (商人)**        | Pure  |
| Fall    | Winter     | **Accumulator (積蓄者)** | Mixed |
| Winter  | Fall       | **Accumulator (積蓄者)** | Mixed |
| Winter  | (None/Low) | **Lord (地主)**          | Pure  |
| Winter  | Spring     | **Mechanic (技師)**      | Mixed |
| Spring  | Winter     | **Mechanic (技師)**      | Mixed |

## Content Data Structure (`profiles.js`)

The `profiles.js` file must contain an object/array with the following detailed content:

1.  **Creator (創作者)**
    - _Tag_: 上方：靠腦袋賺錢
    - _Desc_: 賣產品的。哪怕從零開始，只要有想法就能變現。這種人不能管細節，會死。
    - _Example_: Steve Jobs (賈伯斯)
2.  **Star (明星)**
    - _Tag_: 上方/右方：個人品牌
    - _Desc_: 賣個人品牌的。產品好壞不重要，重點是他這個人站出來，你就買單了。
    - _Example_: Oprah Winfrey (歐普拉)
3.  **Mechanic (技師)**
    - _Tag_: 上方/左方：系統優化
    - _Desc_: 改良系統的。他不一定原創，但能把別人的爛東西，改良成超強的自動賺錢機器。
    - _Example_: Jeff Bezos (貝佐斯)
4.  **Supporter (支持者)**
    - _Tag_: 右方：靠人脈賺錢
    - _Desc_: 帶團隊的超強 CEO 類型。自己不用最厲害，但能讓厲害的人都聽他的，替他賣命。
    - _Example_: Jack Welch
5.  **Deal Maker (媒合者)**
    - _Tag_: 右方/下方：資源搓合
    - _Desc_: 靠搓合賺佣金的。不用有產品，也不用有錢，只要把有錢跟有需求的人拉在一起，他就賺了。
    - _Example_: Donald Trump (Early Career)
6.  **Trader (商人)**
    - _Tag_: 下方：靠時機賺錢
    - _Desc_: 賺價差的。不需要創意，只要心臟大顆，抓準時機，低買高賣。
    - _Example_: George Soros (索羅斯)
7.  **Accumulator (積蓄者)**
    - _Tag_: 下方/左方：資產累積
    - _Desc_: 存資產的。最無聊但也最穩，靠時間跟複利，慢慢滾成巨富。
    - _Example_: Warren Buffett (巴菲特)
8.  **Lord (地主)**
    - _Tag_: 左方：靠系統賺錢
    - _Desc_: 控現金流的。完全不露臉，掌握資源跟後台，錢會自動流進來。
    - _Example_: John D. Rockefeller (洛克菲勒)

## Visual Output Requirements

The result page must display:

1.  **Main Energy Headline**: e.g., "你的主能量：火焰 (Summer)"
2.  **The Radar Chart**: Visualizing the 4 energy scores.
3.  **The Wealth Profile Card**: A distinct card styling displaying:
    - **Role Name** (e.g., 明星 Star)
    - **Tagline** (e.g., 賣個人品牌的)
    - **Description** text.
    - **Representative Icon/Image** (Placeholder or Emoji).

## AI Agent Guidelines (Do's and Don'ts)

- **DO** implement the `calculateProfile` logic carefully, handling edge cases where scores might be equal (prioritize the energy that appears first in the cycle: Spring > Summer > Fall > Winter).
- **DO** create a separate `profiles.js` to keep the content easy to edit.
- **DO NOT** hardcode the profile text inside HTML; inject it via JavaScript.
- **DO** ensure the Radar Chart scale starts at 0.
