import React from "react";
import { Link } from "react-router-dom";
import "./New.css";

function New() {
  return (
    <div className="container">
      <Link to="/vote">
        <button type="button" className="button__new">
          Create poll
        </button>
      </Link>
    </div>
  );
}

export default New;
