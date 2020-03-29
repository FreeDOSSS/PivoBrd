import { connect } from "react-redux";
import * as goodsActions from "./../../../Redux/goods/goodsAction";
import AsideCard from "./AsideCard";

const mapDispatchToProps = dispatch => ({
  onDelete: _id => dispatch(goodsActions.removeGoods(_id))
});

export default connect(null, mapDispatchToProps)(AsideCard);
