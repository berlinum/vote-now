import React from 'react';
import AppForm from '../components/AppForm';
import { postPoll } from '../api/polls';

function New() {
  const [isLoading, setLoading] = React.useState(false);

  async function handleSubmit(poll) {
    setLoading(true);
    const createdPoll = await postPoll(poll);

    alert(`Created a new poll with ID ${createdPoll.id}`);
  }
  return (
    <AppForm
      question="Your question:"
      answers="Answer options:"
      onSubmit={handleSubmit}
      button="Create poll"
      disabled={isLoading}
    />
  );
}

export default New;
