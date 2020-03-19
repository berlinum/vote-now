import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Button from '../components/Button';
import Form from '../components/Form';
import RadioInput from '../components/RadioInput';
import styled from '@emotion/styled';

const LabelQuestion = styled.label`
  align-self: flex-start;
  margin-left: 34px;
  font-size: 30px;
  font-family: SF;
  color: ${props => props.theme.colors.textSecondary};
`;

const Question = styled.div`
  box-sizing: border-box;
  min-width: 310px;
  height: 45px;
  margin: 17px 33px 0 32px;
  padding: 20px;
  color: #9a9a9a;
  background-color: #e1e1e3;
  border: none;
  font-family: 'SF italic';
  font-size: 20px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  align-self: center;
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

  const options = ['answerOne', 'answerTwo', 'answerThree'];

  return (
    <Form onSubmit={handleSubmit}>
      <LabelQuestion>Question:</LabelQuestion>
      <Question>{poll?.question}</Question>
      {options.map(option => (
        <RadioInput
          key={option}
          checked={answer === option}
          onChange={event => setAnswer(event.target.value)}
          value={option}
          label={poll?.[option]}
          name="answer"
        />
      ))}
      <Button>Vote</Button>
    </Form>
  );
}
export default Vote;
