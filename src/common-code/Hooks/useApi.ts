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

type Options = {
  payload?: any;
  onSuccess?: (data: any) => any;
};

const useApi = (): [
  DefaultState,
  (asyncFunction: any, options?: Options) => void
] => {
  const [state, setState] = React.useState(defaultState);

  const callApi = useCallback(async (asyncFunction: any, options?: Options) => {
    setState((previousState) => ({ ...previousState, status: "loading" }));

    try {
      const response = await asyncFunction(options?.payload);

      if (options?.onSuccess) {
        const newData = options.onSuccess(response);
        setState((previousState) => ({
          ...previousState,
          data: newData,
          status: "success",
        }));
      } else {
        setState((previousState) => ({
          ...previousState,
          data: response,
          status: "success",
        }));
      }
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
