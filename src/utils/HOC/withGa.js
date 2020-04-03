import React, { useEffect } from "react";
const withGa = WrappedComponent => props => {
  useEffect(() => {
    console.log("1", 1);
  }, []);
  return <WrappedComponent {...props} />;
};

export default withGa;
