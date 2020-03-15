import Card from "./Card";
import { connect } from "react-redux";
import { addGoodsItem } from "./../../Redux/goods/goodsAction";

const mapDispatchToProps = dispatch => {
  return {
    addGoods: ({ id, currentSize, slice }) =>
      dispatch(addGoodsItem({ id, currentSize, slice }))
  };
};

export default connect(null, mapDispatchToProps)(Card);
