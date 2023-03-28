import { MajorFormAction, MajorFormState } from "@/types/formType";
import produce from "immer";

export default produce((state: MajorFormState, action: MajorFormAction) => {
  switch (action.type) {
    case "ADD_MAJOR_FORM_DATA":
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.source = action.payload.source;
      break;
  }
});
