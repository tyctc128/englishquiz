// 單字測驗資料庫
const vocabularyList = [
    {
        word: "a",
        options: ["一(個)", "二(個)", "三(個)", "四(個)"],
        correct: 0
    },
    {
        word: "A.M.",
        options: ["下午", "晚上", "上午", "中午"],
        correct: 2
    },
    {
        word: "ability",
        options: ["能力", "時間", "地點", "金錢"],
        correct: 0
    },
    {
        word: "able",
        options: ["不可能的", "能夠的", "困難的", "簡單的"],
        correct: 1
    },
    {
        word: "about",
        options: ["遠離", "經過", "關於", "之下"],
        correct: 2
    },
    {
        word: "above",
        options: ["之下", "之內", "之外", "之上"],
        correct: 3
    },
    {
        word: "abroad",
        options: ["在家裡", "在學校", "在國外", "在公園"],
        correct: 2
    },
    {
        word: "absent",
        options: ["出席的", "缺席的", "準時的", "遲到的"],
        correct: 1
    },
    {
        word: "accept",
        options: ["拒絕", "接受", "思考", "放棄"],
        correct: 1
    },
    {
        word: "accident",
        options: ["計畫", "意外", "活動", "慶祝"],
        correct: 1
    },
    {
        word: "achieve",
        options: ["失敗", "放棄", "達到", "開始"],
        correct: 2
    },
    {
        word: "across",
        options: ["橫過", "直下", "轉彎", "後退"],
        correct: 0
    },
    {
        word: "act",
        options: ["睡覺", "演出", "跑步", "游泳"],
        correct: 1
    },
    {
        word: "action",
        options: ["想法", "行動", "夢想", "計畫"],
        correct: 1
    },
    {
        word: "active",
        options: ["懶惰的", "活躍的", "安靜的", "疲倦的"],
        correct: 1
    },
    {
        word: "activity",
        options: ["活動", "睡眠", "食物", "天氣"],
        correct: 0
    },
    {
        word: "actor",
        options: ["老師", "醫生", "演員", "警察"],
        correct: 2
    },
    {
        word: "actress",
        options: ["女演員", "女老師", "女醫生", "女警察"],
        correct: 0
    },
    {
        word: "actually",
        options: ["可能", "或許", "實際上", "也許"],
        correct: 2
    },
    {
        word: "add",
        options: ["減少", "加上", "除以", "乘以"],
        correct: 1
    }
];

// 隨機取得指定數量的單字
function getRandomVocabulary(count) {
    const shuffled = [...vocabularyList].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}
