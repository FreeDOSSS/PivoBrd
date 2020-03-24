import * as goodsActions from "./goodsAction";

export const removeGoods = data => dispatch => {
  dispatch(goodsActions.removeGoods(data));
};
