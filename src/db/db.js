import baguette_lobster from "./../assets/images/baguette/baguette-lobster.png";
import baguette_pork from "./../assets/images/baguette/baguette-pork.png";
import baguette_sous from "./../assets/images/baguette/baguette-sous.png";
import bigbob_chease from "./../assets/images/big_bob/bigbob_chease.jpg";
import bigbob_chili from "./../assets/images/big_bob/bigbob_chili.jpg";
import bigbob_korova from "./../assets/images/big_bob/bigbob_korova.jpg";
import bigbob_salt from "./../assets/images/big_bob/bigbob_salt.jpg";
import bigbob_vasabi from "./../assets/images/big_bob/bigbob_vasabi.jpg";
import dimoris_dark from "./../assets/images/bovar/dark.png";
import dimoris_light from "./../assets/images/bovar/light.png";
import grenki_bif from "./../assets/images/grinki/grenki_bif.png";
import grenki_bovar from "./../assets/images/grinki/grenki_bovar.png";
import grenki_salo from "./../assets/images/grinki/grenki_salo.png";
import sich_95 from "./../assets/images/sich/sich-95.png";
import sich_chumak from "./../assets/images/sich/sich-chumak.png";
import sich_g from "./../assets/images/sich/sich-g.png";
import sich_kegler from "./../assets/images/sich/sich-kegler.png";
import sich_mos_filter from "./../assets/images/sich/sich-mos_filter.png";
import sich_mos_notfilter from "./../assets/images/sich/sich-mos_notfilter.png";
import sich_med from "./../assets/images/sich/sich_med.png";
import sidre from "./../assets/images/sidre.png";
import syx_bekon from "./../assets/images/syx/syx_bekon.png";
import syx_crab from "./../assets/images/syx/syx_crab.png";
import syx_hren from "./../assets/images/syx/syx_hren.png";
import syx_mix from "./../assets/images/syx/syx_mix.png";
import syx_shashlik from "./../assets/images/syx/syx_shashlik.png";
import syx_smetana from "./../assets/images/syx/syx_smetana.png";
import vist_g from "./../assets/images/vist/vist_g.png";
import vist_gold from "./../assets/images/vist/vist_gold.png";
import vist_mos from "./../assets/images/vist/vist_mos.png";
import vist_night from "./../assets/images/vist/vist_night.png";

import lays_max_paprika from "./../assets/images/lays/lays_max_paprika.png";
import lays_maxx_salsa from "./../assets/images/lays/lays_maxx_salsa.png";

import lays_strong_chili from "./../assets/images/lays/lays_strong_chili.png";
import lays_strong_fire_rebra from "./../assets/images/lays/lays_strong_fire_rebra.png";
import lays_strong_vasabi from "./../assets/images/lays/lays_strong_vasabi.png";

import lays_chease from "./../assets/images/lays/lays_chease.png";
import lays_bekon from "./../assets/images/lays/lays_bekon.png";
import layz_grib_smetana from "./../assets/images/lays/layz_grib_smetana.png";
import lays_smetana_zelen from "./../assets/images/lays/lays_smetana_zelen.png";
import lays_krab from "./../assets/images/lays/lays_krab.png";
import lays_paprika from "./../assets/images/lays/lays_paprika.png";

const db = [
  // ВИСТ
  {
    id: "001",
    title: "ВИСТ Жигулевское",
    category: "vist",
    discription: "Пиво Жигулевское светлое фильтрованное 3.7% об.",
    price: 25,
    img: vist_g,
  },
  {
    id: "002",
    title: "ВИСТ Московское",
    category: "vist",
    discription: "Пиво Московское светлое фильтрованное 4,5% об.",
    price: 26,
    img: vist_mos,
  },
  {
    id: "003",
    title: "ВИСТ Gold",
    category: "vist",
    discription: "Пиво Gold светлое фильтрованное 5,0% об.",
    price: 26,
    img: vist_gold,
  },
  {
    id: "004",
    title: "ВИСТ Запорожская ночь",
    category: "vist",
    discription: "Пиво Запорожская ночь полутёмное фильтрованное 4,1% об.",
    price: 26,
    img: vist_night,
  },

  // СИЧ
  {
    id: "005",
    title: "СИЧ Жигулевское",
    category: "sich",
    discription: "Пиво Жигулевское светлое фильтрованное 3.7% об.",
    price: 22,
    img: sich_g,
  },
  {
    id: "006",
    title: "СИЧ Московское фил.",
    category: "sich",
    discription: "Пиво Московское светлое фильтрованное 4.7% об.",
    price: 23,
    img: sich_mos_filter,
  },
  {
    id: "007",
    title: "СИЧ Московское нефил.",
    category: "sich",
    discription: "Пиво Московское светлое нефильтрованное 5.2% об.",
    price: 24,
    img: sich_mos_notfilter,
  },
  {
    id: "008",
    title: "СИЧ Чумацкое",
    category: "sich",
    discription: "Пиво Чумацкое темное фильтрованное 4.3% об.",
    price: 24,
    img: sich_chumak,
  },
  {
    id: "009",
    title: "СИЧ Медовое",
    category: "sich",
    discription: "Пиво Медовое светлое фильтрованное 4.7% об.",
    price: 24,
    img: sich_med,
  },
  {
    id: "010",
    title: "СИЧ 95",
    category: "sich",
    discription: "Пиво 95 светлое фильтрованное 5% об.",
    price: 24,
    img: sich_95,
  },
  {
    id: "011",
    title: "СИЧ Kegler Brielle",
    category: "sich",
    discription: "Пиво Kegler Brielle светлое фильтрованное 5% об.",
    price: 25,
    img: sich_kegler,
  },

  // Диморис
  {
    id: "012",
    title: "Диморис Юж. Бавария с.",
    category: "dimoris",
    discription: "Пиво Южная Бавария светлое фильтрованное 4.6% об.",
    price: 24,
    img: dimoris_light,
  },
  {
    id: "013",
    title: "Диморис Юж. Бавария т.",
    category: "dimoris",
    discription: "Пиво Южная Бавария темное фильтрованное 4.6% об.",
    price: 24,
    img: dimoris_dark,
  },

  // Сидр
  {
    id: "101",
    title: "Сидр Яблоко",
    category: "sidre",
    discription: "Сидр Яблоко 5% об.",
    price: 24,
    img: sidre,
  },
  {
    id: "102",
    title: "Сидр Клубника со сливками",
    category: "sidre",
    discription: "Сидр Клубника со сливками 5% об.",
    price: 24,
    img: sidre,
  },
  {
    id: "103",
    title: "Сидр Лайм + имбирь",
    category: "sidre",
    discription: "Сидр Лайм + имбирь 5% об.",
    price: 24,
    img: sidre,
  },
  {
    id: "104",
    title: "Сидр Фраголино",
    category: "sidre",
    discription: "Сидр Фраголино 5% об.",
    price: 24,
    img: sidre,
  },
  {
    id: "105",
    title: "Сидр Грейпфрут",
    category: "sidre",
    discription: "Сидр Грейпфрут 5% об.",
    price: 24,
    img: sidre,
  },
  {
    id: "106",
    title: "Сидр Киви",
    category: "sidre",
    discription: "Сидр Киви 5% об.",
    price: 24,
    img: sidre,
  },
  {
    id: "107",
    title: "Сидр Асти Шампань",
    category: "sidre",
    discription: "Сидр Асти Шампань 5% об.",
    price: 24,
    img: sidre,
  },
  {
    id: "107",
    title: "Сидр Ананас",
    category: "sidre",
    discription: "Сидр Ананас 5% об.",
    price: 24,
    img: sidre,
  },
  {
    id: "107",
    title: "Сидр Пиноколада",
    category: "sidre",
    discription: "Сидр Пиноколада 5% об.",
    price: 24,
    img: sidre,
  },

  // Закуски

  // Lays
  // Maxx
  {
    id: "218",
    title: "Чипсы Lays MAXX Паприка 120g",
    category: "zakuski",
    discription: "Чипсы Lays MAXX Паприка 120g",
    price: 35,
    img: lays_max_paprika,
  },
  {
    id: "219",
    title: "Чипсы Lays MAXX Сальса 120g",
    category: "zakuski",
    discription: "Чипсы Lays MAXX Сальса 120g",
    price: 35,
    img: lays_maxx_salsa,
  },
  //  Strong
  {
    id: "220",
    title: "Чипсы Lays Strong Чили лайм 120g",
    category: "zakuski",
    discription: "Чипсы Lays Strong Чили лайм 120g",
    price: 35,
    img: lays_strong_chili,
  },
  {
    id: "221",
    title: "Чипсы Lays Strong Огненные ребра 120g",
    category: "zakuski",
    discription: "Чипсы Lays Strong Огненные ребра 120g",
    price: 35,
    img: lays_strong_fire_rebra,
  },
  {
    id: "222",
    title: "Чипсы Lays Strong Васаби 120g",
    category: "zakuski",
    discription: "Чипсы Lays Strong Васаби 120g",
    price: 35,
    img: lays_strong_vasabi,
  },
  // Defualt
  {
    id: "223",
    title: "Чипсы Lays Cыр 133g",
    category: "zakuski",
    discription: "Чипсы Lays Cыр 133g",
    price: 35,
    img: lays_chease,
  },
  {
    id: "224",
    title: "Чипсы Lays Бекон 133g",
    category: "zakuski",
    discription: "Чипсы Lays Бекон 133g",
    price: 35,
    img: lays_bekon,
  },
  {
    id: "225",
    title: "Чипсы Lays Сметана грибы 133g",
    category: "zakuski",
    discription: "Чипсы Lays Сметана грибы 133g",
    price: 35,
    img: layz_grib_smetana,
  },
  {
    id: "226",
    title: "Чипсы Lays Сметана лук 133g",
    category: "zakuski",
    discription: "Чипсы Lays Сметана лук 133g",
    price: 35,
    img: lays_smetana_zelen,
  },
  {
    id: "227",
    title: "Чипсы Lays Краб 133g",
    category: "zakuski",
    discription: "Чипсы Lays Краб 133g",
    price: 35,
    img: lays_krab,
  },
  {
    id: "228",
    title: "Чипсы Lays Паприка 133g",
    category: "zakuski",
    discription: "Чипсы Lays Паприка 133g",
    price: 35,
    img: lays_paprika,
  },
  // Орешки
  {
    id: "201",
    title: "Орешки Big Bob васаби 60g",
    category: "zakuski",
    discription: "Орешки Big Bob васаби 60g",
    price: 15,
    img: bigbob_vasabi,
  },
  {
    id: "202",
    title: "Орешки Big Bob соленые 60g",
    category: "zakuski",
    discription: "Орешки Big Bob соленые 60g",
    price: 15,
    img: bigbob_salt,
  },
  {
    id: "203",
    title: "Орешки Big Bob чили 60g",
    category: "zakuski",
    discription: "Орешки Big Bob чили 60g",
    price: 15,
    img: bigbob_chili,
  },
  {
    id: "204",
    title: "Орешки Big Bob сыр 60g",
    category: "zakuski",
    discription: "Орешки Big Bob сыр 60g",
    price: 15,
    img: bigbob_chease,
  },
  {
    id: "205",
    title: "Орешки Big Bob говядина 60g",
    category: "zakuski",
    discription: "Орешки Big Bob говядина 60g",
    price: 15,
    img: bigbob_korova,
  },
  // Сухарики Баг 70gет

  {
    id: "206",
    title: "Багет Flint лобстер 70g",
    category: "zakuski",
    discription: "Багет Flint лобстер 70g",
    price: 10,
    img: baguette_lobster,
  },
  {
    id: "207",
    title: "Багет Flint буженина 70g",
    category: "zakuski",
    discription: "Багет Flint буженина 70g",
    price: 10,
    img: baguette_pork,
  },
  {
    id: "208",
    title: "Багет Flint сливочный соус 70g",
    category: "zakuski",
    discription: "Багет Flint сливочный соус 70g",
    price: 10,
    img: baguette_sous,
  },
  // grenki
  {
    id: "209",
    title: "Гренки Flint телятина с аджикой 70g",
    category: "zakuski",
    discription: "Гренки Flint телятина с аджикой 70g",
    price: 10,
    img: grenki_bif,
  },
  {
    id: "210",
    title: "Гренки Flint баварские колбаски 70g",
    category: "zakuski",
    discription: "Гренки Flint баварские колбаски 70g",
    price: 10,
    img: grenki_bovar,
  },
  {
    id: "211",
    title: "Гренки Flint сало с хреном 70g",
    category: "zakuski",
    discription: "Гренки Flint сало с хреном 70g",
    price: 10,
    img: grenki_salo,
  },
  // Сухарики
  {
    id: "212",
    title: "Сухарики Flint бекон 70g",
    category: "zakuski",
    discription: "Сухарики Flint бекон 70g",
    price: 10,
    img: syx_bekon,
  },
  {
    id: "213",
    title: "Сухарики Flint краб 70g",
    category: "zakuski",
    discription: "Сухарики Flint краб 70g",
    price: 10,
    img: syx_crab,
  },
  {
    id: "214",
    title: "Сухарики Flint холодец с хреном 70g",
    category: "zakuski",
    discription: "Сухарики Flint холодец с хреном 70g",
    price: 10,
    img: syx_hren,
  },
  {
    id: "215",
    title: "Сухарики Flint mix 100g",
    category: "zakuski",
    discription: "Сухарики Flint mix 100g",
    price: 15,
    img: syx_mix,
  },
  {
    id: "216",
    title: "Сухарики Flint шашлык 70g",
    category: "zakuski",
    discription: "Сухарики Flint шашлык 70g",
    price: 10,
    img: syx_shashlik,
  },
  {
    id: "217",
    title: "Сухарики Flint сметана с зеленью 70g",
    category: "zakuski",
    discription: "Сухарики Flint сметана с зеленью 70g",
    price: 10,
    img: syx_smetana,
  },
];

export default db;
