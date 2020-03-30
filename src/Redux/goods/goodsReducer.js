import * as types from "./goodsTypes";

const initialState = [
  {
    id: "001",
    currentSize: 0.5,
    slice: [
      {
        type: "3",
        count: 0
      },
      {
        type: "2",
        count: 0
      },
      {
        type: "1.5",
        count: 0
      },
      {
        type: "1",
        count: 0
      },
      {
        type: "0.5",
        count: 1
      }
    ],
    _id: "M2y4Tct5O"
  }
];

const goodsReducer = (state = [...initialState], action) => {
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
