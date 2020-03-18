import React from 'react';
import Button from '../components/Button';
import { useParams } from 'react-router-dom';
import Form from '../components/Form';
import styled from '@emotion/styled';

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
