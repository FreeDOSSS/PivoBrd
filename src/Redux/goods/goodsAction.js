import * as types from "./goodsTypes";
import shortid from "shortid";

export const addGoodsItem = ({ id, currentSize, slice = [] }) => {
  return {
    type: types.ADD_GOODS_BEER,
    payload: {
      beer: {
        id,
        currentSize,
        slice,
        _id: shortid.generate()
      }
    }
  };
};

export const removeGoods = _id => {
  return {
    type: types.REMOVE_GOODS_ITEM,
    payload: {
      _id
    }
  };
};

export const clearGoods = () => ({ type: types.CLEAR_GOODS });

// export const saveBudget = budget => {
//   return {
//     type: types.SAVE_BUDGET,
//     payload: {
//       budget: Number(budget)
//     }
//   };
// };

// export const addExpense = ({ name, amount }) => {
//   return {
//     type: types.ADD_EXPENSE,
//     payload: {
//       }
//     }
//   };
// };

// export const removeExpense = id => {
//   return {
//     type: types.REMOVE_EXPENSE,
//     payload: {
//       id
//     }
//   };
// };
