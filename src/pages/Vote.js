import React from "react";
import "./Vote.css";
import Form from "../components/Form";
import Button from "../components/Button";

function Vote() {
  return <Button buttonName="Vote" class="button__vote" link="/result" />;
}
export default Vote;
