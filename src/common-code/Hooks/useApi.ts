import React, { useCallback } from "react";

type DefaultState = {
  data: any;
  error: any;
  status: "success" | "error" | "loading" | "idle";
};

const defaultState: DefaultState = {
  status: "idle",
  error: null,
  data: null,
};

const useApi = (
  initialValue: any
): [DefaultState, (asyncFunction: any, ...args: any) => void] => {
  const [state, setState] = React.useState({
    ...defaultState,
    data: initialValue,
  });

  const callApi = useCallback(async (asyncFunction: any, ...args) => {
    setState((previousState) => ({ ...previousState, status: "loading" }));

    try {
      const response = await asyncFunction(...args);
      setState((previousState) => ({
        ...previousState,
        data: response,
        status: "success",
      }));
    } catch (error) {
      setState((previousState) => ({
        ...previousState,
        error,
        status: "error",
      }));
    }
  }, []);

  return [state, callApi];
};

export default useApi;
