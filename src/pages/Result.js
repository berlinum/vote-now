import React from 'react';
import Button from '../components/Button';
import { useParams } from 'react-router-dom';
import Form from '../components/Form';

function Result() {
  const { pollId } = useParams();
  const [poll, setPoll] = React.useState(null);

  React.useEffect(() => {
    async function getPoll() {
      const response = await fetch(`http://localhost:4000/polls/${pollId}`);
      const poll = await response.json();
      setPoll(poll);
    }
    getPoll();
  }, [pollId]);

  return (
    <Form>
      <h2>{poll?.question}</h2>
      <div>{poll?.answerOne}</div>
      <div>{poll?.answerTwo}</div>
      <div>{poll?.answerThree}</div>
      <Button link="/">Create new poll</Button>
    </Form>
  );
}

export default Result;
