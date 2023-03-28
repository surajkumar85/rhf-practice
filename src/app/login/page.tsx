"use client";
import { useStateDispatch } from "@/provider/form-state/formStateProvider";
import styles from "./page.module.css";
import { useForm, SubmitHandler, UseFormRegister } from "react-hook-form";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(3, "Name Should be greater than 2 character."),
  email: z.string(),
  phone: z.string(),
});

type Input = z.infer<typeof formSchema>;

export default function page() {
  const dispatch = useStateDispatch();
  // const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<Input> = (data) => {
    console.log(data);
    dispatch({ type: "ADD_NAME", payload: data.name });
    dispatch({ type: "ADD_EMAIL", payload: data.email });
    dispatch({ type: "ADD_PHONE", payload: data.phone });
    // router.push("/dashboad");
  };

  return (
    <div className={styles.main}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Inputs label={"name"} register={register} required={true} />
        {errors.name && <p>{errors.name.message}</p>}
        <Inputs label={"email"} register={register} required={true} />
        {errors.email && <p>This field is required</p>}
        <Inputs label={"phone"} register={register} required={true} />
        {errors.phone && <p>This field is required</p>}
        <button>Submit</button>
      </form>
      <Link href="/dashboard">To Dashboard</Link>
    </div>
  );
}
type Labels = "email" | "name" | "phone";

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
