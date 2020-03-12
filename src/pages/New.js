import React from "react";
import "./New.css";
import Form from "../components/Form";

function New() {
  return (
    <Form
      question="Your question:"
      answers="Answer options:"
      onSubmit={data => alert(JSON.stringify(data))}
    />
  );
}

export default New;
