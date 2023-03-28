export type FormState = {
  name: string;
  email: string;
  phone: string;
};
export type FormAction =
  | { type: "ADD_NAME"; payload: string }
  | { type: "ADD_EMAIL"; payload: string }
  | { type: "ADD_PHONE"; payload: string };

export type MajorFormState = {
  name: string;
  email: string;
  source: { sourceName: string }[];
};

export type MajorFormAction = {
  type: "ADD_MAJOR_FORM_DATA";
  payload: MajorFormState;
};
