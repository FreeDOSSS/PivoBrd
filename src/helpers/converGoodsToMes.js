import db from "./../db/db";

function converGoodsToMes(goods) {
  let mes = "";

  goods.forEach((el) => {
    const { title } = db.find((item) => item.id === el.id);

    let name = `<b>${title}: </b>${el.currentSize} ${
      Number(el.id) > 200 ? "шт." : "л."
    }\n`;

    name =
      name +
      el.slice.reduce(
        (acc, bottle) =>
          (acc +=
            bottle.count > 0
              ? `    <b>${bottle.type}  л.: </b> ${bottle.count}  шт.\n`
              : ""),
        ""
      );

    mes += name + "\n";
  });

  return mes;
}

export default converGoodsToMes;
