import { connect } from "react-redux";
import { getGoods } from "../../Redux/goods/goodsSelector";
import Goods from "./Goods";
import { clearGoods } from "../../Redux/goods/goodsAction";

const mapStateToProps = state => ({
  goods: getGoods(state)
});

const mapDispatchToProps = dispatch => ({
  clear: () => dispatch(clearGoods())
});

export default connect(mapStateToProps, mapDispatchToProps)(Goods);
