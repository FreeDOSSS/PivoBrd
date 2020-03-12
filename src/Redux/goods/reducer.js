import * as types from "./types";

const goodsReducer = (state = [], action) => {
  switch (action.type) {
    case types.ADD_GOODS_BEER:
      return [...state, action.payload.beer];

    // case types.ADD_EXPENSE:
    //   return {
    //     ...state,
    //     expenses: [...state.expenses, action.payload.expenses]
    //   };

    // case types.REMOVE_EXPENSE:
    //   return {
    //     ...state,
    //     expenses: state.expenses.filter(el => el.id !== action.payload.id)
    //   };

    default:
      return state;
  }
};

export default goodsReducer;
