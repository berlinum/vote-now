import React from "react";
import "./Result.css";
import Button from "../components/Button";

function Result() {
  return <Button button="Create new poll" class="button__result" link="/" />;
}

export default Result;

// {/* <div className="button__container">
//   <Link to="/">
//     <button type="button" className="button__result">
//       Create new poll
//     </button>
//   </Link>
// </div>; */}
