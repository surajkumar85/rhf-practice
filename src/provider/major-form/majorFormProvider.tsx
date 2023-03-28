"use client";
import {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useReducer,
} from "react";
import { initialState } from "./initialState";
import { MajorFormAction, MajorFormState } from "@/types/formType";
import reducer from "./reducer";

const MajorFormStateContext = createContext<MajorFormState>(initialState);
const MajorFormStateDispatch = createContext<Dispatch<MajorFormAction>>(
  ({}: MajorFormAction) => {}
);

export default function MajorFormProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MajorFormStateContext.Provider value={state}>
      <MajorFormStateDispatch.Provider value={dispatch}>
        {children}
      </MajorFormStateDispatch.Provider>
    </MajorFormStateContext.Provider>
  );
}

export const useMajorFormState = () => useContext(MajorFormStateContext);
export const useMajorFormDispatch = () => useContext(MajorFormStateDispatch);
