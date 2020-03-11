import React from "react";
import { Link } from "react-router-dom";
import "./Result.css";

function Result() {
  return (
    <div className="container">
      <Link to="/">
        <button type="button" className="button__result">
          Create new poll
        </button>
      </Link>
    </div>
  );
}

export default Result;
