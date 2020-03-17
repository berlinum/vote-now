import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Button from '../components/Button';
import Form from '../components/Form';
import styled from '@emotion/styled';

const Label = styled.label`
  display: block;
  align-self: flex-start;
  font-size: 30px;
  font-family: SF;
  color: #707070;
  &::placeholder {
    color: #9a9a9a;
  }
`;

function Vote() {
  const { pollId } = useParams();
  const history = useHistory();
  const [poll, setPoll] = React.useState(null);
  const [answer, setAnswer] = React.useState(null);

  React.useEffect(() => {
    async function getPoll() {
      const response = await fetch(`http://localhost:4000/polls/${pollId}`);
      const poll = await response.json();
      setPoll(poll);
    }
    getPoll();
  }, [pollId]);

  async function handleSubmit(event) {
    event.preventDefault();

    const newPoll = { ...poll };
    newPoll.votes.push(answer);

    await fetch(`http://localhost:4000/polls/${pollId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPoll)
    });
    history.push(`/polls/${poll.id}`);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <h2>{poll?.question}</h2>
      <Label>
        <input
          type="radio"
          name="answer"
          value="answerOne"
          checked={answer === 'answerOne'}
          onChange={event => setAnswer(event.target.value)}
        />
        {poll?.answerOne}
      </Label>
      <Label>
        <input
          type="radio"
          name="answer"
          value="answerTwo"
          checked={answer === 'answerTwo'}
          onChange={event => setAnswer(event.target.value)}
        />
        {poll?.answerTwo}
      </Label>
      <Label>
        <input
          type="radio"
          name="answer"
          value="answerThree"
          checked={answer === 'answerThree'}
          onChange={event => setAnswer(event.target.value)}
        />
        {poll?.answerThree}
      </Label>
      <Button>Vote</Button>
    </Form>
  );
}
export default Vote;
