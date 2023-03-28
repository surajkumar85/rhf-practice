import { ReactNode } from "react";
import FormStateProvider from "./form-state/formStateProvider";

export default function Provider({ children }: { children: ReactNode }) {
  return <FormStateProvider>{children}</FormStateProvider>;
}
