"use client";
import {
  Path,
  SubmitHandler,
  UseFormRegister,
  useForm,
  useFieldArray,
} from "react-hook-form";
import styles from "./page.module.css";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  useMajorFormDispatch,
  useMajorFormState,
} from "@/provider/major-form/majorFormProvider";
import Link from "next/link";

const formSchema = z.object({
  name: z.string().min(3, "Name should be greater than 2 character."),
  email: z.string().email("Email is not valid please try again."),
  source: z.array(
    z.object({
      sourceName: z.string().min(5, "Source name should not be empty."),
    })
  ),
});

type FormField = z.infer<typeof formSchema>;

export default function Page() {
  const dispatch = useMajorFormDispatch();
  const { name, source, email } = useMajorFormState();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormField>({
    defaultValues: {
      name,
      email,
      source,
    },
    resolver: zodResolver(formSchema),
  });

  const { fields, append, remove } = useFieldArray({
    name: "source",
    control,
  });

  const onSubmit: SubmitHandler<FormField> = (data) => {
    dispatch({ type: "ADD_MAJOR_FORM_DATA", payload: data });
  };

  return (
    <div className={styles.main}>
      <h1>Major Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Name"
          registerLabel="name"
          register={register}
          type="text"
          required={true}
          errorMsg={errors.name?.message}
        />
        <Input
          label="Email"
          registerLabel="email"
          register={register}
          type="email"
          required={true}
          errorMsg={errors.email?.message}
        />
        {fields?.map((field, index) => (
          <div className={styles.source}>
            <Input
              key={field.id}
              label={`Source-${index + 1}`}
              type="text"
              register={register}
              registerLabel={`source.${index}.sourceName`}
              required={false}
              errorMsg={
                errors.source && errors.source[index]?.sourceName?.message
              }
            />
            <button onClick={() => remove(index)}>Delete</button>
          </div>
        ))}
        <button
          onClick={() => {
            append({ sourceName: "" });
          }}
        >
          Add
        </button>
        <button type="submit">Submit</button>
      </form>
      <Link href="/dashboard">To dashboard</Link>
    </div>
  );
}

type InputProp = {
  label: string;
  type: string;
  register: UseFormRegister<FormField>;
  registerLabel: Path<FormField>;
  required: boolean;
  value?: string;
  errorMsg?: string;
};

const Input = ({
  label,
  type,
  register,
  registerLabel,
  required,
  value,
  errorMsg,
}: InputProp) => {
  return (
    <label>
      <span>{label}</span>
      <input
        value={value}
        type={type}
        {...register(registerLabel, { required: required })}
      />
      <p style={{ color: "red" }}>{errorMsg}</p>
    </label>
  );
};
