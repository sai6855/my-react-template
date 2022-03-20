import { createContext, useContext, useState } from "react";

const Context = createContext();

export const Provider = ({ store, children }) => {
  const [localStore, setLocalStore] = useState(store);
  store.subscribe(() => {
    setLocalStore(() => ({ ...store }));
  });
  return <Context.Provider value={localStore}>{children}</Context.Provider>;
};

export const useSelector = () => {
  const store = useContext(Context);
  return store.getState();
};

export const useDispatch = () => {
  const store = useContext(Context);
  return store.dispatch;
};
