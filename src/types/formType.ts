export type FormState = {
  name: string;
  email: string;
  phone: string;
};
export type FormAction =
  | { type: "ADD_NAME"; payload: string }
  | { type: "ADD_EMAIL"; payload: string }
  | { type: "ADD_PHONE"; payload: string };
