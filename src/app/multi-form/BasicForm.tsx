import { useFormContext } from "react-hook-form";

export default function BasicForm() {
  const { register } = useFormContext();
  return (
    <div>
      <label>
        <span>First Name: </span>
        <input type="text" {...register("firstName")} />
      </label>
      <label>
        <span>Last name: </span>
        <input type="text" {...register("lastName")} />
      </label>
    </div>
  );
}
