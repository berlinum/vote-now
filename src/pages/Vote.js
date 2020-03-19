import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Button from '../components/Button';
import Form from '../components/Form';
import RadioInput from '../components/RadioInput';
import styled from '@emotion/styled';
import { getPoll, patchPoll } from '../api/polls';
import Loading from '../components/Loading';

const LabelQuestion = styled.label`
  align-self: flex-start;
  margin-left: 34px;
  font-size: 30px;
  font-family: SF;
  color: ${props => props.theme.colors.textPrimary};
`;

const LabelAnswer = styled(LabelQuestion)`
  margin: 43px 0 0 34px;
`;

const Question = styled.div`
  box-sizing: border-box;
  min-width: 310px;
  height: 45px;
  margin: 17px 33px 0 32px;
  padding: 7px 0 0 20px;
  color: ${props => props.theme.colors.textSecondary};
  background-color: ${props => props.theme.colors.bgSecondary};
  border: 1px solid ${props => props.theme.colors.bgBorder};
  font-family: SF;
  font-size: 23px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

const Error = styled.div`
  font-size: 30px;
  font-family: SF;
  color: ${props => props.theme.colors.textPrimary};
`;

function Vote() {
  const { pollId } = useParams();
  const history = useHistory();
  const [poll, setPoll] = React.useState(null);
  const [answer, setAnswer] = React.useState(null);
  const [isLoadingPatchPoll, setIsLoadingPatchPoll] = React.useState(false);
  const [isLoadingGetPoll, setIsLoadingGetPoll] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState(false);

  React.useEffect(() => {
    async function doGetPoll() {
      try {
        setIsLoadingGetPoll(true);
        const poll = await getPoll(pollId);
        setPoll(poll);
        setIsLoadingGetPoll(false);
      } catch (error) {
        setErrorMessage(error.message);
      }
    }
    doGetPoll();
    // getPoll(pollId).then(poll => setPoll(poll));
  }, [pollId]);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoadingPatchPoll(true);

    const newPoll = { ...poll };
    newPoll.votes.push(answer);

    await patchPoll(newPoll);
    history.push(`/polls/${poll.id}`);
  }

  if (errorMessage) {
    return <Error>{errorMessage}</Error>;
  }

  if (isLoadingGetPoll) {
    return <Loading>Loading...</Loading>;
  }

  const options = ['answerOne', 'answerTwo', 'answerThree'];

  return (
    <Form onSubmit={handleSubmit}>
      <LabelQuestion>Question:</LabelQuestion>
      <Question>{poll?.question}</Question>
      <LabelAnswer>Answer:</LabelAnswer>
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
      <Button disabled={isLoadingPatchPoll}>Vote</Button>
    </Form>
  );
}
export default Vote;
