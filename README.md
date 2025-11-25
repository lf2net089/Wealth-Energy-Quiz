# 財富能量與角色評測系統 (Wealth Energy Quiz)

本專案為一個專業級的**單頁應用程式 (SPA)**，旨在透過分析使用者的潛意識決策協定，揭示其天賦的「財富原動力」（Wealth Dynamics）類型。

> **隱私焦點 (Privacy Focused)**：所有運算皆在客戶端（瀏覽器）完成。不儲存或傳輸任何個人數據至伺服器。

## 🌟 核心功能規格 (Key Features)

- **🧠 深度心理學評估 (Deep Psychological Assessment)**：
  - **動態題庫配置 (Dynamic Question Set)**：評估系統可依據題庫數量自動調整，確保彈性。
  - 採用 **微觀行為分析 (Micro-behavior Analysis)**，透過分析使用者在日常情境中的反應（如桌面整理、購物習慣等）來繞開邏輯偏見。
  - 內含 **一致性驗證機制 (Consistency Checks)**，用於區分後天學習行為與自然本能。
- **📱 應用程式級體驗 (App-Like Experience)**：
  - **漸進式流程 (Progressive Flow)**：每次僅顯示一道問題，以維持作答專注度。
  - **自動推進 (Auto-Advance)**：選定選項後平順地過渡至下一題。
  - **防舞弊機制 (Anti-Gaming)**：選項隨機化，並設有**有限度回溯機制**，以確保結果的真實性。
- **📸 結果分享模組 (Shareable Results)**：
  - **個人化報告卡 (Personalized Card)**：可輸入暱稱，生成客製化結果。
  - **一鍵下載 (One-Click Download)**：使用 `html2canvas` 生成高品質的分析儀表板圖片。
- **📊 視覺化儀表板 (Visual Dashboard)**：
  - **雷達圖 (Radar Chart)**：視覺化呈現四大能量的平衡分佈。
  - **8 大財富角色**：根據能量向量角度，判定最適合使用者的特定致富路徑。

## 🎯 四大能量與八大角色 (The 4 Energies & 8 Profiles)

本系統評估您在以下四個維度的能量平衡：

- 🌱 **Spring (Dynamo / 發電機)**：創新與願景 (Innovation & Vision)
- 🔥 **Summer (Blaze / 火焰)**：連結與人脈 (Connection & People)
- 🍂 **Fall (Tempo / 節奏)**：時機與服務 (Timing & Service)
- ❄️ **Winter (Steel / 鋼鐵)**：數據與系統 (Data & Systems)

系統將根據您的能量向量角度，指派八個致富路徑之一：

1. **Creator** (創作者) - (Pure Spring)
2. **Star** (明星) - (Spring + Summer)
3. **Supporter** (支持者) - (Pure Summer)
4. **Deal Maker** (媒合者) - (Summer + Fall)
5. **Trader** (商人) - (Pure Fall)
6. **Accumulator** (積蓄者) - (Fall + Winter)
7. **Lord** (地主) - (Pure Winter)
8. **Mechanic** (技師) - (Winter + Spring)

## 📁 檔案結構 (File Structure)

```text
├── index.html      # 主程式入口 (包含 html2canvas 與 Chart.js 的 CDN 引入)
├── styles.css      # 佈景樣式：橫向儀表板與截圖區域樣式
├── script.js       # 核心邏輯：狀態管理、計分與圖表渲染
└── questions.js    # 評測題庫數據