import AsideCard from "./AsideCard";
import { connect } from "react-redux";
import * as goodsOperators from "./../../../Redux/goods/goodsOperators";

const mapDispatchToProps = {
  onDelete: data => goodsOperators.removeGoods(data)
};

export default connect(null, mapDispatchToProps)(AsideCard);
