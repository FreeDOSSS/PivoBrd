import * as types from "./goodsTypes";

const goodsReducer = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case types.ADD_GOODS_BEER:
      return [...state, payload.beer];

    default:
      return state;
  }
};

export default goodsReducer;
