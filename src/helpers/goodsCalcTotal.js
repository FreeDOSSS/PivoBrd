import db from "../db/db";
import price from "./../db/price";

const goodsCalcTotal = goods =>
  goods && goods.length > 0
    ? goods.reduce(
        (acc, el) =>
          (acc +=
            db.find(dbI => dbI.id === el.id).price * el.currentSize +
            el.slice.reduce(
              (accSize, size) =>
                (accSize += price.bottle[size.type] * size.count),
              0
            )),
        0
      )
    : 0;
export default goodsCalcTotal;
