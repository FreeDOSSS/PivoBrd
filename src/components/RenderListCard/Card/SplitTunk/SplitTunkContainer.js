import SplitTunk from "./SplitTunk";
import { addGoodsItem } from "../../../../Redux/goods/goodsAction";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => ({
  addGoods: ({ id, currentSize, slice }) =>
    dispatch(addGoodsItem({ id, currentSize, slice }))
});

export default connect(null, mapDispatchToProps)(SplitTunk);
