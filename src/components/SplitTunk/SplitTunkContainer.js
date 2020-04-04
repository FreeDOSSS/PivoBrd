import SplitTunk from "./SplitTunk";
// import { addGoodsItem } from "./../../";
import { connect } from "react-redux";
import { addGoodsItem } from "../../Redux/goods/goodsAction";

const mapDispatchToProps = (dispatch) => ({
  addGoods: ({ id, currentSize, slice }) =>
    dispatch(addGoodsItem({ id, currentSize, slice })),
});

export default connect(null, mapDispatchToProps)(SplitTunk);
