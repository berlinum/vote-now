import React from 'react';
import Button from '../components/Button';
import { useParams } from 'react-router-dom';
import Form from '../components/Form';
import styled from '@emotion/styled';
import { getPoll } from '../api/polls';
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

const Answers = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  min-width: 310px;
  height: 45px;
  margin: 19px 32px 0 33px;
  border-radius: 23px;
  color: ${props => props.theme.colors.textSecondary};
  background: ${props => props.theme.colors.bgSecondary};
  border: none;
  font-family: SF;
  font-size: 20px;
  padding-left: 20px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
`;

function Result() {
  const { pollId } = useParams();
  const [poll, setPoll] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState(false);

  React.useEffect(() => {
    async function doGetPoll() {
      try {
        setIsLoading(true);
        const poll = await getPoll(pollId);
        setPoll(poll);
        setIsLoading(false);
      } catch (error) {
        setErrorMessage(error.message);
      }
    }
    doGetPoll();
  }, [pollId]);

  const answerOneVotes =
    poll?.votes.filter(vote => vote === 'answerOne').length || 0;
  const answerTwoVotes =
    poll?.votes.filter(vote => vote === 'answerTwo').length || 0;
  const answerThreeVotes =
    poll?.votes.filter(vote => vote === 'answerThree').length || 0;

  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }

  if (isLoading) {
    return <Loading>Loading...</Loading>;
  }

  return (
    <Form>
      <LabelQuestion>Question:</LabelQuestion>
      <Question>
        {poll?.question}
        {/* ({poll?.votes.length} votes) */}
      </Question>
      <LabelAnswer>Results:</LabelAnswer>
      <Answers>
        {poll?.answerOne}&nbsp;({answerOneVotes} votes)
      </Answers>
      <Answers>
        {poll?.answerTwo}&nbsp;({answerTwoVotes} votes)
      </Answers>
      <Answers>
        {poll?.answerThree}&nbsp;({answerThreeVotes} votes)
      </Answers>
      <Button link="/">Create new poll</Button>
    </Form>
  );
}

export default Result;
