import converGoodsToMes from "./converGoodsToMes";
import Axios from "axios";
import goodsCalcTotal from "./goodsCalcTotal";

function sendToMes(fields, goods) {
  const token = "1122293192:AAFJTskAnbWnditzTmONEYHjZGCsVXxWlck";
  const url = `https://api.telegram.org/bot${token}/sendMessage`;

  const data = {
    text: "",
    chat_id: "-456012436",
    parse_mode: "html"
  };

  data.text =
    fields.reduce(
      (acc, el) => (acc += `<b>${el.label}: </b> ${el.value}\n`),
      ""
    ) +
    "\n" +
    converGoodsToMes(goods) +
    `Итого: ${goodsCalcTotal(goods)}`;

  Axios.post(url, data)
    .then(res => console.log("res", res))
    .catch(err => console.log("err", err));
}

export default sendToMes;
