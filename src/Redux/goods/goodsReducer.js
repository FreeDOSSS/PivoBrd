import * as types from "./goodsTypes";

const goodsReducer = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case types.ADD_GOODS_BEER:
      return [...state, payload.beer];

    case types.REMOVE_GOODS_ITEM:
      return state.filter(el => el._id !== payload._id);

    default:
      return state;
  }
};

export default goodsReducer;
