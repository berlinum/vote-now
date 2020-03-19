export async function getPoll(pollId) {
  const response = await fetch(`http://localhost:4000/polls/${pollId}`);
  const poll = await response.json();
  return poll;
}

export async function postPoll(poll) {
  const response = await fetch('http://localhost:4000/polls', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(poll)
  });
  const createdPoll = await response.json();
  return createdPoll;
}

export async function patchPoll(pollId, newPoll) {
  const response = await fetch(`http://localhost:4000/polls/${pollId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newPoll)
  });
  const patchedPoll = await response.json();
  return patchedPoll;
}
