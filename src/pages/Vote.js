import React from "react";
import { Link } from "react-router-dom";
import "./Vote.css";

function Vote() {
  return (
    <div className="container">
      <Link to="/result">
        <button type="button" className="button__vote">
          Result
        </button>
      </Link>
    </div>
  );
}

export default Vote;
