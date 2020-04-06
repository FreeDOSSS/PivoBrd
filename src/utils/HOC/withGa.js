import React, { useEffect } from "react";
import Helmet from "react-helmet";
// import logo from "./../../assets/images/logo.png";

const withGa = (WrappedComponent) => (props) => {
  // const { location } = props;
  useEffect(() => {
    console.log("withGa");
  }, []);
  return (
    <>
      <Helmet></Helmet>
      <WrappedComponent {...props} />
    </>
  );
};

export default withGa;
