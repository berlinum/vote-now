export async function getPoll(pollId) {
  const response = await fetch(`http://localhost:4000/polls/${pollId}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  console.log(response);
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
  if (!response.ok) {
    throw new Error(response.statusText);
  }
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
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const patchedPoll = await response.json();
  return patchedPoll;
}
