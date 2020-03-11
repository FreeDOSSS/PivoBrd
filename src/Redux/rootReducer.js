import { combineReducers } from "redux";
import goodsReducer from "./goods/reducer";

export default combineReducers({
  //   planer: appReducer
  goods: goodsReducer
});
