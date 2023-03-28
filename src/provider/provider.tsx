import { ReactNode } from "react";
import FormStateProvider from "./form-state/formStateProvider";
import MajorFormProvider from "./major-form/majorFormProvider";

export default function Provider({ children }: { children: ReactNode }) {
  return (
    <FormStateProvider>
      <MajorFormProvider>{children}</MajorFormProvider>
    </FormStateProvider>
  );
}
