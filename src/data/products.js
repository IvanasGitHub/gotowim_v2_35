// src/data/products.js
const products = [
  {
    id: 1,
    name: "Авокадо",
    benefits: [
      {
        title: "Богат витаминами",
        description:
          "Содержит E, C, B5, B6, калий — для здоровья сердца, кожи и иммунитета.",
        ratio: { good: 90, bad: 10 },
        recommended: ["Спортсменам", "Пожилым"],
        bestTime: ["Утро", "Обед"],
      },
      {
        title: "Поддержка сердца",
        description:
          "Мононенасыщенные жиры снижают риск сердечно-сосудистых заболеваний.",
        ratio: { good: 85, bad: 15 },
        recommended: ["Взрослым"],
        bestTime: ["Обед"],
      },
    ],
    harms: [
      {
        title: "Высокая калорийность",
        description:
          "Переедание может привести к набору веса при малоподвижном образе жизни.",
        ratio: { good: 60, bad: 40 },
        recommended: ["Спортсменам"],
        bestTime: ["Утро"],
      },
      {
        title: "Токсичность ядра",
        description: "Косточка и кожура ядовиты для домашних животных.",
        ratio: { good: 50, bad: 50 },
        recommended: ["Всем, без косточки"],
        bestTime: ["В любое время"],
      },
    ],
  },
  // можно добавить другие продукты
];

export default products;
