import AsideCard from "./AsideCard";
import { connect } from "react-redux";
import * as goodsOperators from "./../../../Redux/goods/goodsOperators";
import * as goodsActions from "./../../../Redux/goods/goodsAction";

const mapDispatchToProps = dispatch => ({
  onDelete: _id => dispatch(goodsActions.removeGoods(_id))
});

export default connect(null, mapDispatchToProps)(AsideCard);
