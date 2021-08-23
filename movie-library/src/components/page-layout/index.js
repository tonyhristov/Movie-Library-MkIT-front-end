import React from "react";
import Header from "../../components/header";

const PageLayout = (props) => {
  return (
    <div >
      <Header />
      <div >{props.children}</div>
    </div>
  );
};

export default PageLayout;