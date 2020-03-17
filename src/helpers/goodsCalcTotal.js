import db from "../db/db";
import price from "./../db/price";
// TODO разобраться с ошибкой
const goodsCalcTotal = goods =>
  goods.length > 0
    ? goods.reduce(
        (total, goodsItem) =>
          (total +=
            goodsItem.currentSize *
              db.find(dbItem => dbItem.id === goodsItem.id).price +
              goodsItem.slice.length >
            0
              ? goodsItem.slice.reduce(
                  (totalSize, size) =>
                    (totalSize += price.bottle[size.type] * size.count),
                  0
                )
              : 0),
        0
      )
    : 0;
export default goodsCalcTotal;
