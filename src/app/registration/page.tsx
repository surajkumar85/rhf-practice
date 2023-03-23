"use client";
import styles from "./page.module.css";
import { useForm, SubmitHandler, UseFormRegister, Path } from "react-hook-form";

interface FieldType {
  email: string;
  password: string;
  "c-password": string;
}
type Label = "Email" | "Password" | "Confirm Password";

type InputProp = {
  label: Label;
  register: UseFormRegister<FieldType>;
  required: boolean;
  regLabel: Path<FieldType>;
  type: string;
};

const Input = ({ label, register, required, regLabel, type }: InputProp) => (
  <label>
    <span>{label}</span>
    <input type={type} {...register(regLabel, { required: required })} />
  </label>
);

export default function page() {
  const { register, handleSubmit } = useForm<FieldType>();
  const onSubmit: SubmitHandler<FieldType> = (data) => console.log(data);
  return (
    <div className={styles.main}>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          regLabel="email"
          label={"Email"}
          register={register}
          required={true}
          type="email"
        />
        <Input
          type="password"
          regLabel="password"
          label={"Password"}
          register={register}
          required={true}
        />
        <Input
          type="password"
          regLabel="c-password"
          label={"Confirm Password"}
          register={register}
          required={true}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
