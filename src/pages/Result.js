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

  const answerOneVotes = poll?.votes.filter(vote => vote === 'answerOne')
    .length;
  const answerTwoVotes = poll?.votes.filter(vote => vote === 'answerTwo')
    .length;
  const answerThreeVotes = poll?.votes.filter(vote => vote === 'answerThree')
    .length;

  return (
    <Form>
      <h2>
        {poll?.question} ({poll?.votes.length} votes)
      </h2>
      <div>
        {poll?.answerOne} ({answerOneVotes} votes)
      </div>
      <div>
        {poll?.answerTwo} ({answerTwoVotes} votes)
      </div>
      <div>
        {poll?.answerThree} ({answerThreeVotes} votes)
      </div>
      <Button link="/">Create new poll</Button>
    </Form>
  );
}

export default Result;
