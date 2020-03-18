import React from 'react';
import Button from './Button';
import styled from '@emotion/styled';
import Form from '../components/Form';

const Input = styled.input`
  box-sizing: border-box;
  min-width: 310px;
  height: 45px;
  color: #9a9a9a;
  background-color: #e1e1e3;
  border: none;
  font-family: 'SF italic';
  font-size: 20px;
  padding-left: 20px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
  &:focus {
    outline: #007aff;
    box-shadow: 0 0 3px 2px #007aff;
  }
`;

const InputQuestion = styled(Input)`
  margin: 17px 33px 0 32px;
  border-radius: 10px;
`;

const InputAnswer = styled(Input)`
  margin: 19px 32px 0 33px;
  border-radius: 23px;
`;

const Label = styled.label`
  align-self: flex-start;
  font-size: 30px;
  font-family: SF;
  color: #707070;
  &::placeholder {
    color: #9a9a9a;
  }
`;

const LabelQuestion = styled(Label)`
  margin-left: 34px;
`;

const LabelAnswer = styled(Label)`
  margin: 43px 0 0 34px;
`;

function AppForm(props) {
  const [question, setQuestion] = React.useState('');
  const [answerOne, setAnswerOne] = React.useState('');
  const [answerTwo, setAnswerTwo] = React.useState('');
  const [answerThree, setAnswerThree] = React.useState('');
  const poll = {
    question: question,
    answerOne: answerOne,
    answerTwo: answerTwo,
    answerThree: answerThree,
    votes: []
  };

  async function handleSubmit(event) {
    event.preventDefault();
    props.onSubmit(poll);
  }
  return (
    <Form onSubmit={handleSubmit}>
      <LabelQuestion>{props.question}</LabelQuestion>
      <InputQuestion
        type="text"
        placeholder="Enter question..."
        value={question}
        onChange={event => {
          setQuestion(event.target.value);
        }}
      />
      <LabelAnswer>{props.answers}</LabelAnswer>
      <InputAnswer
        type="text"
        placeholder="Answer..."
        value={answerOne}
        onChange={event => {
          setAnswerOne(event.target.value);
        }}
      />
      <InputAnswer
        type="text"
        placeholder="Answer..."
        value={answerTwo}
        onChange={event => {
          setAnswerTwo(event.target.value);
        }}
      />
      <InputAnswer
        type="text"
        placeholder="Answer..."
        value={answerThree}
        onChange={event => {
          setAnswerThree(event.target.value);
        }}
      />
      <Button>Create poll</Button>
    </Form>
  );
}

export default AppForm;
