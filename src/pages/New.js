import React from "react";
import "./New.css";
import Form from "../components/Form";

function New() {
  async function handleSubmit(poll) {
    const response = await fetch(
      process.env.REACT_APP_POLLS_API ||
        "https://my-json-server.typicode.com/berlinum/vote-now/polls",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(poll)
      }
    );
    const createdPool = await response.json();
    alert(`Created a new poll with ID ${createdPool.id}`);
  }
  return (
    <Form
      question="Your question:"
      answers="Answer options:"
      onSubmit={handleSubmit}
    />
  );
}

export default New;
