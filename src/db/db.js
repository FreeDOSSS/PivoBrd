import sich_95 from "./../assets/images/sich/sich-95.jpg";
import sich_chumak from "./../assets/images/sich/sich-chumak.jpg";
import sich_g from "./../assets/images/sich/sich-g.jpg";
import sich_kegler from "./../assets/images/sich/sich-kegler.jpg";
import sich_mos_filter from "./../assets/images/sich/sich-mos_filter.jpg";
import sich_mos_notfilter from "./../assets/images/sich/sich-mos_notfilter.jpg";
import sich_med from "./../assets/images/sich/sich_med.jpg";
import vist_g from "./../assets/images/vist/vist_g.jpg";
import vist_gold from "./../assets/images/vist/vist_gold.jpg";
import vist_mos from "./../assets/images/vist/vist_mos.jpg";
import vist_night from "./../assets/images/vist/vist_night.jpg";

const db = [
  // ВИСТ
  {
    id: "001",
    brend: "Жигулевское",
    category: "vist",
    discription: "ПИВО ЖИГУЛЕВСКОЕ СВЕТЛОЕ ФИЛЬТРОВАННОЕ 3.7% об.",
    price: 25,
    deg: "3.7",
    color: "светлое",
    type: "Фильтрованное",
    img: vist_g
  },
  {
    id: "002",
    brend: "Московское",
    category: "vist",
    discription: "ПИВО МОСКОВСКОЕ СВЕТЛОЕ ФИЛЬТРОВАННОЕ 4,5% об.",
    price: 26,
    deg: "4,5",
    color: "Светлое",
    type: "Фильтрованное",
    img: vist_mos
  },
  {
    id: "003",
    brend: "Gold",
    category: "vist",
    discription: "ПИВО GOLD СВЕТЛОЕ ФИЛЬТРОВАННОЕ 5,0% об.",
    price: 26,
    deg: "5,0%",
    color: "Светлое",
    type: "Фильтрованное",
    img: vist_gold
  },
  {
    id: "004",
    brend: "Запорожская ночь",
    category: "vist",
    discription: "ПИВО ЗАПОРОЖСКАЯ НОЧЬ Полутёмное ФИЛЬТРОВАННОЕ 4,1°",
    price: 26,
    deg: "4,1",
    color: "Полутёмное",
    type: "Фильтрованное",
    img: vist_night
  },

  // СИЧ
  {
    id: "005",
    brend: "Жигулевское",
    category: "sich",
    discription:
      "ПИВО FDB AROUND THE WORLD «LEGO WEIZE» СВЕТЛОЕ НЕФИЛЬТРОВАННОЕ 4,1%",
    price: 22,
    deg: "4,1",
    color: "Светлое",
    type: "Фильтрованное",
    img: sich_g
  },
  {
    id: "006",
    brend: "Московское",
    category: "sich",
    discription:
      "ПИВО FDB AROUND THE WORLD «LEGO WEIZE» СВЕТЛОЕ НЕФИЛЬТРОВАННОЕ 6.8°",
    price: 23,
    deg: "4.8",
    color: "Светлое",
    type: "Фильтрованное",
    img: sich_mos_filter
  },
  {
    id: "007",
    brend: "Московское",
    category: "sich",
    discription:
      "ПИВО FDB AROUND THE WORLD «LEGO WEIZE» СВЕТЛОЕ НЕФИЛЬТРОВАННОЕ 6.8°",
    price: 24,
    deg: "4.8",
    color: "Светлое",
    type: "Не фильтрованное",
    img: sich_mos_notfilter
  },
  {
    id: "008",
    brend: "Чумацкое",
    category: "sich",
    discription:
      "ПИВО FDB AROUND THE WORLD «LEGO WEIZE» СВЕТЛОЕ НЕФИЛЬТРОВАННОЕ 6.8°",
    price: 24,
    deg: "4.8",
    color: "Темное",
    type: "Фильтрованное",
    img: sich_chumak
  },
  {
    id: "009",
    brend: "Медовое",
    category: "sich",
    discription:
      "ПИВО FDB AROUND THE WORLD «LEGO WEIZE» СВЕТЛОЕ НЕФИЛЬТРОВАННОЕ 6.8°",
    price: 24,
    deg: "4.8",
    color: "Светлое",
    type: "Фильтрованное",
    img: sich_med
  },
  {
    id: "010",
    brend: "95",
    category: "sich",
    discription:
      "ПИВО FDB AROUND THE WORLD «LEGO WEIZE» СВЕТЛОЕ НЕФИЛЬТРОВАННОЕ 6.8°",
    price: 24,
    deg: "4.8",
    color: "Светлое",
    type: "Фильтрованное",
    img: sich_95
  },
  {
    id: "011",
    brend: "Kegler Brielle",
    category: "sich",
    discription:
      "ПИВО FDB AROUND THE WORLD «LEGO WEIZE» СВЕТЛОЕ НЕФИЛЬТРОВАННОЕ 6.8°",
    price: 25,
    deg: "4.8",
    color: "Светлое",
    type: "Фильтрованное",
    img: sich_kegler
  },
  // Диморис
  {
    id: "012",
    brend: "Южная Бавария",
    category: "dimoris",
    discription:
      "ПИВО FDB AROUND THE WORLD «LEGO WEIZE» СВЕТЛОЕ НЕФИЛЬТРОВАННОЕ 6.8°",
    price: 24,
    deg: "4.8",
    color: "Светлое",
    type: "Фильтрованное",
    img: ""
  },
  {
    id: "013",
    brend: "Южная Бавария",
    category: "dimoris",
    discription:
      "ПИВО FDB AROUND THE WORLD «LEGO WEIZE» СВЕТЛОЕ НЕФИЛЬТРОВАННОЕ 6.8°",
    price: 24,
    deg: "4.8",
    color: "Темное",
    type: "Фильтрованное",
    img: ""
  }
];

export default db;
