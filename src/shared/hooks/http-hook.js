import { useState, useCallback, useRef, useEffect } from 'react';

export const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const activeHttpRequests = useRef([]);

  const sendRequest = useCallback(
    async (url, method = 'GET', body = null, headers = {}) => {
      setIsLoading(true); // expets for a response, hence in the component it runs a spinner
      const httpAbortCtrl = new AbortController(); // allows to abort DOM-request in case we change switch to another component
      
      activeHttpRequests.current.push(httpAbortCtrl); // current displays the dom elem sent to the useRef value, this adds abortController to the ref
      try {
        const response = await fetch(url, {
          method,
          body,
          headers,
          // get an AbortSignal obj to use in communication with the DOM-request
          signal: httpAbortCtrl.signal
        });

        const responseData = await response.json();

        activeHttpRequests.current = activeHttpRequests.current.filter(
          reqCtrl => reqCtrl !== httpAbortCtrl
        );

        if (!response.ok) {
          throw new Error(responseData.message);
        }

        setIsLoading(false); // the response is handled, hence the spinner is turned off and we see either the success or the error handling
        return responseData;
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
        throw err;
      }
    },
    []
  );

  const clearError = () => {
    setError(null);
  };

  useEffect(() => { 
    return () => { // runs a clean-up logic when a component unmounts

      activeHttpRequests.current.forEach(abortCtrl => abortCtrl.abort());
    };
  }, []);

  return { isLoading, error, sendRequest, clearError };
};
