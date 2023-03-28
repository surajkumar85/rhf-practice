"use client";
import styles from "./page.module.css";
import { useForm, SubmitHandler, UseFormRegister, Path } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  email: z.string().min(1, "Please enter a valid email."),
  password: z.string().min(6, "Password should be min of 6 character long."),
  cpassword: z.string().min(6, "Password shoud be min of 6 character long."),
  gender: z.string(),
});

type FieldType = z.infer<typeof formSchema>;

type Label = "Email" | "Password" | "Confirm Password" | "Male" | "Female";

type InputProp = {
  label: Label;
  register: UseFormRegister<FieldType>;
  required: boolean;
  regLabel: Path<FieldType>;
  type: string;
  errorMsg: string;
  value?: string;
};

const Input = ({
  label,
  register,
  required,
  regLabel,
  type,
  errorMsg,
  value,
}: InputProp) => (
  <label>
    <span>{label}</span>
    <input
      type={type}
      value={value}
      {...register(regLabel, { required: required })}
    />
    <p style={{ color: "red" }}>{errorMsg}</p>
  </label>
);

export default function page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldType>({
    resolver: zodResolver(formSchema),
  });
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
          errorMsg={errors?.email?.message as string}
        />
        <Input
          type="password"
          regLabel="password"
          label={"Password"}
          register={register}
          required={true}
          errorMsg={errors?.password?.message as string}
        />
        <Input
          type="password"
          regLabel="cpassword"
          label={"Confirm Password"}
          register={register}
          required={true}
          errorMsg={errors?.cpassword?.message as string}
        />
        <Input
          type="radio"
          regLabel="gender"
          register={register}
          required={true}
          value="male"
          label="Male"
          errorMsg={errors?.gender?.message as string}
        />
        <Input
          type="radio"
          regLabel="gender"
          register={register}
          required={true}
          value="female"
          label="Female"
          errorMsg={errors?.gender?.message as string}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
