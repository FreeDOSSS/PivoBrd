import { combineReducers } from "redux";
import goodsReducer from "./goods/goodsReducer";

export default combineReducers({
  goods: goodsReducer
});
