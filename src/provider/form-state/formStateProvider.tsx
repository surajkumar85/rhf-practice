"use client";
import {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useReducer,
} from "react";
import { FormAction, FormState } from "./../../types/formType";
import { initialState } from "./initialState";
import reducer from "./reducer";

const FormStateContext = createContext<FormState>(initialState);
const FormStateDispatch = createContext<Dispatch<FormAction>>(
  ({}: FormAction) => {}
);

export default function FormStateProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <FormStateContext.Provider value={state}>
      <FormStateDispatch.Provider value={dispatch}>
        {children}
      </FormStateDispatch.Provider>
    </FormStateContext.Provider>
  );
}

export const useStateContext = () => useContext(FormStateContext);
export const useStateDispatch = () => useContext(FormStateDispatch);
