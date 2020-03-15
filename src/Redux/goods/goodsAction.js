import * as types from "./typesGoods";

export const addGoodsItem = ({ id, currentSize, slice = [] }) => {
  return {
    type: types.ADD_GOODS_BEER,
    payload: {
      beer: {
        id,
        currentSize,
        slice
      }
    }
  };
};

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