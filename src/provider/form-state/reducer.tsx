import { FormAction, FormState } from "@/types/formType";
import produce from "immer";

export default produce((state: FormState, action: FormAction) => {
  switch (action.type) {
    case "ADD_NAME":
      state.name = action.payload;
      break;
    case "ADD_EMAIL":
      state.email = action.payload;
      break;
    case "ADD_PHONE":
      state.phone = action.payload;
      break;
  }
});
