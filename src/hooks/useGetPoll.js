import React from 'react';
import { getPoll } from '../api/polls';

function useGetPoll(pollId) {
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

  return { poll, isLoading, errorMessage };
}

export default useGetPoll;
