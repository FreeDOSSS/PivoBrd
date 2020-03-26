import Menu from "./Menu";
import { connect } from "react-redux";
import { getGoods } from "../../Redux/goods/goodsSelector";

const mapStateToProps = state => ({
  goods: getGoods(state)
});

export default connect(mapStateToProps)(Menu);
