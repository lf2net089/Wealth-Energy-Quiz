// Energy Types: 0=Spring(Dynamo), 1=Summer(Blaze), 2=Fall(Tempo), 3=Winter(Steel)

const quizData = [
  {
    question: "Q1. 拿到一個全新的任務，你的第一步？",
    options: [
      { text: "不管限制，先想有什麼新招", value: 0 },
      { text: "先找人討論，問問大家的想法", value: 1 },
      { text: "先觀望一下，不急著行動", value: 2 },
      { text: "先讀資料，搞懂邏輯再做", value: 3 }
    ]
  },
  {
    question: "Q2. 看到一個賺錢的好機會，關鍵是？",
    options: [
      { text: "這東西夠新、夠酷、沒人做過", value: 0 },
      { text: "是誰在做？這人值不值得信？", value: 1 },
      { text: "進場時機對不對？感覺對了嗎？", value: 2 },
      { text: "數據顯示會賺，風險算得過去", value: 3 }
    ]
  },
  {
    question: "Q3. 學新東西的時候，你的習慣是？",
    options: [
      { text: "直接動手試錯，邊做邊學", value: 0 },
      { text: "找人教我，直接問比較快", value: 1 },
      { text: "照著步驟，一步一步慢慢來", value: 2 },
      { text: "先讀原理，把架構搞懂再動手", value: 3 }
    ]
  },
  {
    question: "Q4. 大家意見不合吵架了，你會？",
    options: [
      { text: "提出一個新點子轉移焦點", value: 0 },
      { text: "負責安撫大家，當和事佬", value: 1 },
      { text: "先不講話，等大家冷靜", value: 2 },
      { text: "分析利弊，講道理給他們聽", value: 3 }
    ]
  },
  {
    question: "Q5. 你的時間觀念比較接近？",
    options: [
      { text: "隨性，喜歡同時間做很多事", value: 0 },
      { text: "很滿，時間都花在跟人互動", value: 1 },
      { text: "穩定，不喜歡行程突然被改", value: 2 },
      { text: "精準，幾點做什麼都規劃好", value: 3 }
    ]
  },
  {
    question: "Q6. 去派對認識新朋友，你會？",
    options: [
      { text: "找看起來最特別、有趣的人", value: 0 },
      { text: "全場遊走，跟每個人都聊兩句", value: 1 },
      { text: "待在熟人圈，除非有人來搭話", value: 2 },
      { text: "只找對我有幫助的關鍵人物", value: 3 }
    ]
  },
  {
    question: "Q7. 突然出包了！你的直覺反應？",
    options: [
      { text: "快想一個新辦法來救火", value: 0 },
      { text: "趕快去道歉安撫，處理情緒", value: 1 },
      { text: "先確認狀況，不要亂承諾", value: 2 },
      { text: "查紀錄，看是哪個環節出錯", value: 3 }
    ]
  },
  {
    question: "Q8. 旅行的時候，最重要的是？",
    options: [
      { text: "要有探險的驚喜感", value: 0 },
      { text: "旅伴好不好玩、開不開心", value: 1 },
      { text: "住得舒服、行程不要太累", value: 2 },
      { text: "攻略要做足，該去的都要去", value: 3 }
    ]
  },
  {
    question: "Q9. 你最欣賞哪種領袖？",
    options: [
      { text: "有遠見，能看見未來的", value: 0 },
      { text: "有魅力，能激勵人心的", value: 1 },
      { text: "很可靠，能給安全感的", value: 2 },
      { text: "很專業，決策精準的", value: 3 }
    ]
  },
  {
    question: "Q10. 想說服別人聽你的，你會？",
    options: [
      { text: "畫大餅：讓他看到美好未來", value: 0 },
      { text: "講故事：動之以情", value: 1 },
      { text: "展誠意：讓他覺得你很實在", value: 2 },
      { text: "列數據：用事實證明", value: 3 }
    ]
  },
  {
    question: "Q11. 你的桌面通常長怎樣？",
    options: [
      { text: "亂中有序，只有我知道在哪", value: 0 },
      { text: "貼滿照片、公仔或紀念品", value: 1 },
      { text: "舒服就好，有抱枕或零食", value: 2 },
      { text: "乾淨整齊，東西都歸位", value: 3 }
    ]
  },
  {
    question: "Q12. 做那種很無聊的重複工作，你會？",
    options: [
      { text: "很容易分心，拖到最後才做", value: 0 },
      { text: "邊做邊找人聊天或聽廣播", value: 1 },
      { text: "乖乖做完，雖然無聊但能忍受", value: 2 },
      { text: "想辦法優化流程，下次自動化", value: 3 }
    ]
  },
  {
    question: "Q13. 週末沒事做，比較想？",
    options: [
      { text: "創作、發明或去逛市集", value: 0 },
      { text: "約局、聚餐或打球", value: 1 },
      { text: "按摩、散步或睡午覺", value: 2 },
      { text: "閱讀、下棋或整理檔案", value: 3 }
    ]
  },
  {
    question: "Q14. 買東西的標準通常是？",
    options: [
      { text: "新奇、酷炫、獨特", value: 0 },
      { text: "朋友推薦、很多人買", value: 1 },
      { text: "質感好、服務好", value: 2 },
      { text: "CP值高、規格好", value: 3 }
    ]
  },
  {
    question: "Q15. 有錢最棒的地方是？",
    options: [
      { text: "自由：想幹嘛就幹嘛", value: 0 },
      { text: "影響力：能幫助別人", value: 1 },
      { text: "安全感：不用為錢煩惱", value: 2 },
      { text: "掌控權：證明自己眼光準", value: 3 }
    ]
  },
  {
    question: "Q16. 比較喜歡哪種電影角色？",
    options: [
      { text: "不按牌理出牌的天才", value: 0 },
      { text: "熱血講義氣的隊長", value: 1 },
      { text: "忠誠守護的夥伴", value: 2 },
      { text: "冷靜分析的軍師", value: 3 }
    ]
  },
  {
    question: "Q17. 計畫趕不上變化，你會？",
    options: [
      { text: "覺得好玩，剛好試試新路", value: 0 },
      { text: "找人訴苦，討個拍", value: 1 },
      { text: "覺得不安，需要靜一靜", value: 2 },
      { text: "重新計算，修正計畫", value: 3 }
    ]
  },
  {
    question: "Q18. 朋友最常誇你什麼？",
    options: [
      { text: "點子很多", value: 0 },
      { text: "人緣很好", value: 1 },
      { text: "很靠譜", value: 2 },
      { text: "邏輯很強", value: 3 }
    ]
  },
  {
    question: "Q19. 如果要創業，你想做？",
    options: [
      { text: "開發前所未有的新產品", value: 0 },
      { text: "做個人品牌或代理", value: 1 },
      { text: "加盟知名品牌，有SOP", value: 2 },
      { text: "投資房產或系統，收租金", value: 3 }
    ]
  },
  {
    question: "Q20. 選一個超能力？",
    options: [
      { text: "無中生有 (創造)", value: 0 },
      { text: "讀心術 (人際)", value: 1 },
      { text: "時間感知 (時機)", value: 2 },
      { text: "超級運算 (邏輯)", value: 3 }
    ]
  }
];