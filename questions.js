const quizData = [
  {
    question: "Q1. 拿到一支功能複雜的新手機，你通常？",
    options: [
      { text: "先亂按，試試有什麼新功能", value: 0 },
      { text: "問朋友這支好不好用", value: 1 },
      { text: "照設定引導，一步步完成", value: 2 },
      { text: "先讀規格與評測數據", value: 3 }
    ]
  },
  {
    question: "Q2. 聽別人講話時，最受不了哪種？",
    options: [
      { text: "內容重複，沒新意太無聊", value: 0 },
      { text: "語調平淡，太嚴肅沒溫度", value: 1 },
      { text: "跳來跳去，太急促跟不上", value: 2 },
      { text: "邏輯混亂，沒數據沒根據", value: 3 }
    ]
  },
  {
    question: "Q3. 在書店決定拿起這本書是因為？",
    options: [
      { text: "書名聳動，封面設計很酷", value: 0 },
      { text: "有名人推薦，作者我聽過", value: 1 },
      { text: "標題療癒，紙質摸起來舒服", value: 2 },
      { text: "目錄清晰，分析架構很強", value: 3 }
    ]
  },
  {
    question: "Q4. 學生時代的筆記通常長怎樣？",
    options: [
      { text: "塗鴉很多，只有自己看得懂", value: 0 },
      { text: "寫得不多，都記好笑的事", value: 1 },
      { text: "字跡工整，標記清楚很乾淨", value: 2 },
      { text: "條列分明，有邏輯編號", value: 3 }
    ]
  },
  {
    question: "Q5. 朋友聚餐意見不合，你會？",
    options: [
      { text: "提議去沒吃過的怪店嚐鮮", value: 0 },
      { text: "看大家想吃什麼就順著氣氛", value: 1 },
      { text: "只要不難吃不用排隊都好", value: 2 },
      { text: "查Google評分找CP值最高的", value: 3 }
    ]
  },
  {
    question: "Q6. 買高價品(如筆電)的關鍵一擊？",
    options: [
      { text: "設計太酷了，拿出去是焦點", value: 0 },
      { text: "店員服務好，朋友也大推", value: 1 },
      { text: "保固完善，現在買有送贈品", value: 2 },
      { text: "規格比較後，性能價格比最優", value: 3 }
    ]
  },
  {
    question: "Q7. 工作遇到難題卡關，本能反應？",
    options: [
      { text: "先不管它，晚點靈感會來", value: 0 },
      { text: "馬上打電話問高手怎麼搞", value: 1 },
      { text: "找過去案例，慢慢嘗試不求快", value: 2 },
      { text: "上網找官方手冊研究原理", value: 3 }
    ]
  },
  {
    question: "Q8. 如果由你規劃旅遊，風格偏向？",
    options: [
      { text: "探險之旅：看到好玩就停", value: 0 },
      { text: "社交之旅：大家玩得開心就好", value: 1 },
      { text: "慢活之旅：睡到自然醒做SPA", value: 2 },
      { text: "知性之旅：把著名地標看完", value: 3 }
    ]
  },
  {
    question: "Q9. 團隊開會時，你通常扮演？",
    options: [
      { text: "點子王：一直丟新想法", value: 0 },
      { text: "氣氛組：負責串場聊天", value: 1 },
      { text: "執行者：確認何時要做完", value: 2 },
      { text: "糾察隊：負責挑毛病與漏洞", value: 3 }
    ]
  },
  {
    question: "Q10. 說服別人時，你的習慣招式？",
    options: [
      { text: "畫大餅：描繪美好未來", value: 0 },
      { text: "講故事：動之以情", value: 1 },
      { text: "展誠意：強調對大家的好處", value: 2 },
      { text: "列數據：用證據證明我是對的", value: 3 }
    ]
  },
  {
    question: "Q11. 最受不了哪一種主管？",
    options: [
      { text: "管超細的控制狂", value: 0 },
      { text: "沒人性的冷血機器", value: 1 },
      { text: "朝令夕改的暴君", value: 2 },
      { text: "邏輯不通的草包", value: 3 }
    ]
  },
  {
    question: "Q12. 上台演講 20 分鐘，最怕發生？",
    options: [
      { text: "講到一半忘詞，沒秀到亮點", value: 0 },
      { text: "台下沒反應，場面冷掉", value: 1 },
      { text: "講太久超時，耽誤大家下課", value: 2 },
      { text: "數據引用錯誤，被當場打臉", value: 3 }
    ]
  },
  {
    question: "Q13. 你的辦公桌/書桌狀態？",
    options: [
      { text: "亂中有序，只有我知道東西在哪", value: 0 },
      { text: "貼滿照片公仔，很有生活感", value: 1 },
      { text: "舒適至上，有靠枕跟零食", value: 2 },
      { text: "極簡整潔，像樣品屋一樣", value: 3 }
    ]
  },
  {
    question: "Q14. 週末沒事做，怎麼充電？",
    options: [
      { text: "去逛市集找靈感", value: 0 },
      { text: "跟朋友聚會聊天", value: 1 },
      { text: "在家追劇睡午覺", value: 2 },
      { text: "整理檔案與讀書", value: 3 }
    ]
  },
  {
    question: "Q15. 衣櫃裡的衣服風格？",
    options: [
      { text: "風格多變，喜歡嘗試新款", value: 0 },
      { text: "場合取向，穿起來要亮眼", value: 1 },
      { text: "材質舒服，棉麻寬鬆為主", value: 2 },
      { text: "機能實用，黑白灰好整理", value: 3 }
    ]
  },
  {
    question: "Q16. 「財富自由」最吸引你的是？",
    options: [
      { text: "自由：想做什麼瘋狂事都行", value: 0 },
      { text: "影響力：能幫助更多人", value: 1 },
      { text: "安全感：平穩無憂的日子", value: 2 },
      { text: "掌控權：證明眼光是正確的", value: 3 }
    ]
  },
  {
    question: "Q17. 電影裡最欣賞的角色？",
    options: [
      { text: "打破常規的天才主角", value: 0 },
      { text: "團結眾人的熱血領袖", value: 1 },
      { text: "默默守護的忠誠配角", value: 2 },
      { text: "冷靜分析的軍師智囊", value: 3 }
    ]
  },
  {
    question: "Q18. 希望墓碑上刻著什麼評價？",
    options: [
      { text: "與眾不同的創新者", value: 0 },
      { text: "溫暖受喜愛的萬人迷", value: 1 },
      { text: "值得信賴的守護者", value: 2 },
      { text: "建立秩序的智者", value: 3 }
    ]
  },
  {
    question: "Q19. 壓力爆炸時的陰影反應？",
    options: [
      { text: "煩躁易怒，想把一切推翻", value: 0 },
      { text: "情緒化，覺得沒人懂我", value: 1 },
      { text: "退縮封閉，不想面對世界", value: 2 },
      { text: "冷漠挑剔，拒絕溝通", value: 3 }
    ]
  },
  {
    question: "Q20. 如果要選一種超能力？",
    options: [
      { text: "創造 (無中生有)", value: 0 },
      { text: "連結 (人體磁鐵)", value: 1 },
      { text: "感知 (環境敏銳)", value: 2 },
      { text: "邏輯 (洞察結構)", value: 3 }
    ]
  }
];
