"use client";
import styles from "./page.module.css";
import { useForm, SubmitHandler, UseFormRegister } from "react-hook-form";

type Input = {
  email: string;
  password: string;
};

export default function page() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Input>();
  const onSubmit: SubmitHandler<Input> = (data) => console.log(data);

  return (
    <div className={styles.main}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Inputs label={"email"} register={register} required={true} />
        {errors.email && <p>This field is required</p>}
        <Inputs label={"password"} register={register} required={true} />
        {errors.password && <p>This field is required</p>}
        <button>Submit</button>
      </form>
      <button onClick={() => reset()}>Reset</button>
    </div>
  );
}
type Labels = "email" | "password";

type Inputs = {
  label: Labels;
  register: UseFormRegister<Input>;
  required: boolean;
};

const Inputs = ({ label, register, required }: Inputs) => (
  <label>
    <span>{label}</span>
    <input {...register(label, { required: required })} />
  </label>
);
