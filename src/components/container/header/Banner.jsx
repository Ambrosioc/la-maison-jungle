import React from "react";
import "../../../styles/Banner.css";

function Banner({ children }) {
  return <div className="lmj-banner">{children}</div>;
}

export default Banner;

// deuxième medthodes pour exporter le composant

// function Banner(props) {
//   const children = props.children;
//   return <div className="lmj-banner">{children}</div>;
// }

// export default Banner;
