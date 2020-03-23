import { connect } from "react-redux";
import { getGoods } from "../../Redux/goods/goodsSelector";
import Goods from "./Goods";

const mapStateToProps = state => ({
  goods: getGoods(state)
});

// const mapDispatchToProps = {};

export default connect(mapStateToProps)(Goods);
