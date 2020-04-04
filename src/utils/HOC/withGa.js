import React, { useEffect } from "react";
import Helmet from "react-helmet";
import logo from "./../../assets/images/logo.png";

const withGa = (WrappedComponent) => (props) => {
  const { location } = props;
  useEffect(() => {
    console.log("withGa");
  }, []);
  return (
    <>
      <Helmet>
        <meta property="og:image" content={logo} />
        {/* <link rel="canonical" href={`${baseUrl}${location.url}`} /> */}
        <meta
          property="og:title"
          content={`Доставка разливного пива и сидра в Бердянске`}
        />
        {/* <meta name="description" content={`Срочный выкуп авто в ${city}`} /> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`pivasov.com${location.url}`} />
      </Helmet>
      <WrappedComponent {...props} />
    </>
  );
};

export default withGa;
