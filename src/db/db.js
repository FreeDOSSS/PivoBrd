import sich_95 from "./../assets/images/sich/sich-95.png";
import sich_chumak from "./../assets/images/sich/sich-chumak.png";
import sich_g from "./../assets/images/sich/sich-g.png";
import sich_kegler from "./../assets/images/sich/sich-kegler.png";
import sich_mos_filter from "./../assets/images/sich/sich-mos_filter.png";
import sich_mos_notfilter from "./../assets/images/sich/sich-mos_notfilter.png";
import sich_med from "./../assets/images/sich/sich_med.png";
import vist_g from "./../assets/images/vist/vist_g.png";
import vist_gold from "./../assets/images/vist/vist_gold.png";
import vist_mos from "./../assets/images/vist/vist_mos.png";
import vist_night from "./../assets/images/vist/vist_night.png";

import dimoris_light from "./../assets/images/bovar/light.png";
import dimoris_dark from "./../assets/images/bovar/dark.png";

const db = [
  // ВИСТ
  {
    id: "001",
    title: "ВИСТ Жигулевское",
    category: "vist",
    discription: "Пиво Жигулевское светлое фильтрованное 3.7% об.",
    price: 25,
    img: vist_g
  },
  {
    id: "002",
    title: "ВИСТ Московское",
    category: "vist",
    discription: "Пиво Московское светлое фильтрованное 4,5% об.",
    price: 26,
    img: vist_mos
  },
  {
    id: "003",
    title: "ВИСТ Gold",
    category: "vist",
    discription: "Пиво Gold светлое фильтрованное 5,0% об.",
    price: 26,
    img: vist_gold
  },
  {
    id: "004",
    title: "ВИСТ Запорожская ночь",
    category: "vist",
    discription: "Пиво Запорожская ночь полутёмное фильтрованное 4,1% об.",
    price: 26,
    img: vist_night
  },

  // СИЧ
  {
    id: "005",
    title: "СИЧ Жигулевское",
    category: "sich",
    discription: "Пиво Жигулевское светлое фильтрованное 3.7% об.",
    price: 22,
    img: sich_g
  },
  {
    id: "006",
    title: "СИЧ Московское фил.",
    category: "sich",
    discription: "Пиво Московское светлое фильтрованное 4.7% об.",
    price: 23,
    img: sich_mos_filter
  },
  {
    id: "007",
    title: "СИЧ Московское нефил.",
    category: "sich",
    discription: "Пиво Московское светлое нефильтрованное 5.2% об.",
    price: 24,
    img: sich_mos_notfilter
  },
  {
    id: "008",
    title: "СИЧ Чумацкое",
    category: "sich",
    discription: "Пиво Чумацкое темное фильтрованное 4.3% об.",
    price: 24,
    img: sich_chumak
  },
  {
    id: "009",
    title: "СИЧ Медовое",
    category: "sich",
    discription: "Пиво Медовое светлое фильтрованное 4.7% об.",
    price: 24,
    img: sich_med
  },
  {
    id: "010",
    title: "СИЧ 95",
    category: "sich",
    discription: "Пиво 95 светлое фильтрованное 5% об.",
    price: 24,
    img: sich_95
  },
  {
    id: "011",
    title: "СИЧ Kegler Brielle",
    category: "sich",
    discription: "Пиво Kegler Brielle светлое фильтрованное 5% об.",
    price: 25,
    img: sich_kegler
  },

  // Диморис
  {
    id: "012",
    title: "Диморис Юж. Бавария с.",
    category: "dimoris",
    discription: "Пиво Южная Бавария светлое фильтрованное 4.6% об.",
    price: 24,
    img: dimoris_light
  },
  {
    id: "013",
    title: "Диморис Юж. Бавария т.",
    category: "dimoris",
    discription: "Пиво Южная Бавария темное фильтрованное 4.6% об.",
    price: 24,
    img: dimoris_dark
  },

  // Сидр
  {
    id: "101",
    title: "Сидр Яблоко",
    category: "sidre",
    discription: "Сидр Яблоко 5% об.",
    price: 24,
    img: dimoris_dark
  },
  {
    id: "102",
    title: "Сидр Клубника со сливками",
    category: "sidre",
    discription: "Сидр Клубника со сливками 5% об.",
    price: 24,
    img: dimoris_dark
  },
  {
    id: "103",
    title: "Сидр Лайм + имбирь",
    category: "sidre",
    discription: "Сидр Лайм + имбирь 5% об.",
    price: 24,
    img: dimoris_dark
  },
  {
    id: "104",
    title: "Сидр Фраголино",
    category: "sidre",
    discription: "Сидр Фраголино 5% об.",
    price: 24,
    img: dimoris_dark
  },
  {
    id: "105",
    title: "Сидр Грейпфрут",
    category: "sidre",
    discription: "Сидр Грейпфрут 5% об.",
    price: 24,
    img: dimoris_dark
  },
  {
    id: "106",
    title: "Сидр Киви",
    category: "sidre",
    discription: "Сидр Киви 5% об.",
    price: 24,
    img: dimoris_dark
  },
  {
    id: "107",
    title: "Сидр Асти Шампань",
    category: "sidre",
    discription: "Сидр Асти Шампань 5% об.",
    price: 24,
    img: dimoris_dark
  },
  {
    id: "107",
    title: "Сидр Ананас",
    category: "sidre",
    discription: "Сидр Ананас 5% об.",
    price: 24,
    img: dimoris_dark
  },
  {
    id: "107",
    title: "Сидр Пиноколада",
    category: "sidre",
    discription: "Сидр Пиноколада 5% об.",
    price: 24,
    img: dimoris_dark
  }
];

export default db;
