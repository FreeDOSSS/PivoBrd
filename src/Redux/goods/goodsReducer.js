import * as types from "./goodsTypes";

const goodsReducer = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case types.ADD_GOODS_BEER:
      return [...state, payload.beer];

    case types.REMOVE_GOODS_ITEM:
      return state.filter(
        el => el.id !== payload.id && el.currentSize !== payload.size
      );

    default:
      return state;
  }
};

export default goodsReducer;
