import React from 'react';
import AppForm from '../components/AppForm';

function New() {
  async function handleSubmit(poll) {
    const response = await fetch('http://localhost:4000/polls', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(poll)
    });
    const createdPool = await response.json();
    alert(`Created a new poll with ID ${createdPool.id}`);
  }
  return (
    <AppForm
      question="Your question:"
      answers="Answer options:"
      onSubmit={handleSubmit}
    />
  );
}

export default New;
