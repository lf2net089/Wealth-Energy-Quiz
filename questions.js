// Energy Types: 0=Spring(Dynamo), 1=Summer(Blaze), 2=Fall(Tempo), 3=Winter(Steel)

const quizData = [
  // --- 第一階段：直覺反應 (Input) ---
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
  // --- 第二階段：生活型態 (Lifestyle) ---
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
  // --- 第三階段：微觀行為 (Micro-Behavior) ---
  {
    question: "Q11. 你的電腦桌面通常長怎樣？",
    options: [
      { text: "檔案散落各地，但我找得到", value: 0 },
      { text: "放這陣子要用的，或是有趣的桌布", value: 1 },
      { text: "乾淨舒服，不想看到太多圖示", value: 2 },
      { text: "分類資料夾，井然有序", value: 3 }
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
  // --- 第四階段：價值觀與壓力 (Values & Stress) ---
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
  },
  // --- 第五階段：加強驗證題 (Consistency Check) ---
  {
    question: "Q21. 第一次嘗試做一道新菜，你會？",
    options: [
      { text: "憑感覺加料，自創食譜", value: 0 },
      { text: "打電話問會煮飯的朋友", value: 1 },
      { text: "邊看影片邊做，慢慢來", value: 2 },
      { text: "嚴格按照食譜的克數與時間", value: 3 }
    ]
  },
  {
    question: "Q22. 玩策略遊戲或大富翁，你的風格是？",
    options: [
      { text: "冒險派：喜歡嘗試高風險高報酬", value: 0 },
      { text: "外交派：靠結盟或談判來獲勝", value: 1 },
      { text: "保守派：穩穩存錢，不亂花", value: 2 },
      { text: "精算派：計算每一步的期望值", value: 3 }
    ]
  },
  {
    question: "Q23. 什麼樣的場合最讓你感到能量被吸乾？",
    options: [
      { text: "充滿規矩、不能隨意走動的地方", value: 0 },
      { text: "只有我一個人，沒人可以講話", value: 1 },
      { text: "一直有人催促，氣氛很緊張", value: 2 },
      { text: "充滿情緒化發言，沒有邏輯的對話", value: 3 }
    ]
  },
  {
    question: "Q24. 需要向陌生人自我介紹時，你傾向？",
    options: [
      { text: "秀出我做過的酷作品或想法", value: 0 },
      { text: "聊聊共同的朋友或興趣", value: 1 },
      { text: "簡單講重點，保持禮貌距離", value: 2 },
      { text: "遞上名片，介紹我的專業職稱", value: 3 }
    ]
  },
  {
    question: "Q25. 去大賣場買東西，你的路徑是？",
    options: [
      { text: "沒有固定路線，看到什麼逛什麼", value: 0 },
      { text: "推著車到處看，遇到試吃就停下來聊", value: 1 },
      { text: "慢慢逛，享受推車的節奏", value: 2 },
      { text: "直奔目標區，拿了就走", value: 3 }
    ]
  },
  {
    question: "Q26. 對於「承諾」這件事，你的態度？",
    options: [
      { text: "當下感覺對了就答應，細節以後再說", value: 0 },
      { text: "不好意思拒絕，常常不小心答應太多", value: 1 },
      { text: "會想很久，確認做得到才敢答應", value: 2 },
      { text: "白紙黑字寫下來才算數", value: 3 }
    ]
  },
  {
    question: "Q27. 收到別人負面批評時，第一反應？",
    options: [
      { text: "覺得對方不懂我的明白，懶得解釋", value: 0 },
      { text: "很受傷，覺得是不是我不討人喜歡", value: 1 },
      { text: "默默承受，想說忍一下就過了", value: 2 },
      { text: "分析批評內容，看有沒有道理", value: 3 }
    ]
  },
  {
    question: "Q28. 最理想的一天是？",
    options: [
      { text: "沒有行程，充滿驚喜與靈感的一天", value: 0 },
      { text: "跟一群好朋友熱鬧慶祝的一天", value: 1 },
      { text: "睡飽飽，在海邊發呆的一天", value: 2 },
      { text: "所有代辦事項都高效率打勾的一天", value: 3 }
    ]
  },
  {
    question: "Q29. 遇到一個死結解不開，你會？",
    options: [
      { text: "換個角度，甚至把結剪斷（破壞式創新）", value: 0 },
      { text: "找人幫忙解，兩個人比較快", value: 1 },
      { text: "慢慢解，花時間總會解開的", value: 2 },
      { text: "研究結的構造，找出鬆動的點", value: 3 }
    ]
  },
  {
    question: "Q30. 你認為成功最重要的關鍵是？",
    options: [
      { text: "與眾不同的創新力", value: 0 },
      { text: "強大的人脈網絡", value: 1 },
      { text: "堅持到底的耐力", value: 2 },
      { text: "精準無誤的判斷力", value: 3 }
    ]
  },
  // --- 第六階段：深層潛意識 (Deep Subconscious) ---
  {
    question: "Q31. 在完全黑暗的房間裡，你最渴望什麼？",
    options: [
      { text: "一支手電筒，讓我探索", value: 0 },
      { text: "一個聲音，確認我不是一個人", value: 1 },
      { text: "一張舒服的椅子，讓我可以休息", value: 2 },
      { text: "一張地圖，告訴我出口在哪", value: 3 }
    ]
  },
  {
    question: "Q32. 你最害怕變成什麼樣的人？",
    options: [
      { text: "平庸、無聊、跟大家都一樣的人", value: 0 },
      { text: "孤獨、被排擠、沒人理的人", value: 1 },
      { text: "動盪不安、一直活在恐懼中的人", value: 2 },
      { text: "愚蠢、失控、被情緒左右的人", value: 3 }
    ]
  },
  {
    question: "Q33. 如果你是動物，你覺得自己是？",
    options: [
      { text: "老鷹：飛得高，看得遠", value: 0 },
      { text: "海豚：聰明，喜歡群體", value: 1 },
      { text: "大象：穩重，步伐緩慢", value: 2 },
      { text: "貓頭鷹：冷靜，夜間觀察", value: 3 }
    ]
  },
  {
    question: "Q34. 看到路邊有人在排隊，你的直覺？",
    options: [
      { text: "好奇是在排什麼酷東西？", value: 0 },
      { text: "好像很熱鬧，去湊個熱鬧好了", value: 1 },
      { text: "覺得很累，直接走掉", value: 2 },
      { text: "評估隊伍長度與價值，看值不值得排", value: 3 }
    ]
  },
  {
    question: "Q35. 手機電量剩 5% 且沒帶充電器，你會？",
    options: [
      { text: "不管它，反正沒電就沒電", value: 0 },
      { text: "到處問路人有沒有得借", value: 1 },
      { text: "把手機關機，非必要不開", value: 2 },
      { text: "開啟省電模式，關閉所有後台", value: 3 }
    ]
  },
  {
    question: "Q36. 你的夢想屋通常具備什麼條件？",
    options: [
      { text: "造型獨特，充滿設計感", value: 0 },
      { text: "有個大客廳或大露台，方便宴客", value: 1 },
      { text: "溫馨舒適，採光好通風好", value: 2 },
      { text: "收納功能強大，動線規劃完美", value: 3 }
    ]
  },
  {
    question: "Q37. 對於「改變」這件事，你的感受？",
    options: [
      { text: "興奮，終於有新鮮事了", value: 0 },
      { text: "還好，只要大家都在我就OK", value: 1 },
      { text: "抗拒，為什麼要變？", value: 2 },
      { text: "審慎，評估改變的必要性", value: 3 }
    ]
  },
  {
    question: "Q38. 當你做錯事被發現，你會？",
    options: [
      { text: "笑笑帶過，試圖用幽默化解", value: 0 },
      { text: "趕快道歉，怕對方生氣", value: 1 },
      { text: "沉默不語，等待處置", value: 2 },
      { text: "承認錯誤，並提出修正方案", value: 3 }
    ]
  },
  {
    question: "Q39. 你覺得什麼是「浪費時間」？",
    options: [
      { text: "做一成不變、機械式的事情", value: 0 },
      { text: "一個人待著，沒人講話", value: 1 },
      { text: "一直趕場，沒辦法好好休息", value: 2 },
      { text: "做沒有效率、沒有產出的事", value: 3 }
    ]
  },
  {
    question: "Q40. 最後一題，你相信直覺嗎？",
    options: [
      { text: "超級相信，我的直覺通常很準", value: 0 },
      { text: "看人，對人的直覺蠻準的", value: 1 },
      { text: "一半一半，還是會怕怕的", value: 2 },
      { text: "不相信，我相信證據", value: 3 }
    ]
  }
];